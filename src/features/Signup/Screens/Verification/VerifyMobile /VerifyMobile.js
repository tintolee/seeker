import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity, View, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {Auth} from 'aws-amplify';
import {Formik} from 'formik';
import * as yup from 'yup';

import Button from '../../../../../components/form/Button';
import TextInputSignup from '../../../../../components/form/TextInputSignup';
import Header from '../../../components/Header';
import * as actions from '../../../../userProfile/_redux/actions';
import {theme} from '../../../../../components/Theme';
import {LineArrowLeft} from '../../../../../components/svg/icons';
import styles from './styles';

export default function VerifyMobile({navigation, route, updateAuthState}) {
  const initialValues = {
    username: '',
    status: '',
    email: '',
    code: '',
  };

  const [username] = useState(route.params?.username);
  const [password] = useState(route.params?.password);
  const [email] = useState(route.params?.email);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            Alert.alert('Confirm', 'Are you sure you want to go back?', [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {text: 'OK', onPress: () => navigation.goBack()},
            ]);
          }}>
          <LineArrowLeft width={24} height={24} color={theme.colors.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const handleOnSubmit = async ({code}) => {
    setIsLoading(true);
    try {
      await Auth.confirmSignUp(username, code);

      await Auth.signIn(email, password);

      const user = await Auth.currentAuthenticatedUser();

      const {attributes} = user;

      const input = {
        username: route.params?.username,
        firstName: route.params?.firstName || attributes['custom:firstName'],
        lastName: route.params?.lastName || attributes['custom:lastName'],
        status: 1,
        email: route.params?.email,
        profileCompleted: false,
        visibleToProviders: false,
        visibleToSeekers: false,
      };

      dispatch(
        actions.createSeeker(input, () => {
          updateAuthState('loggedIn');
          setIsLoading(false);
        }),
      ).catch(() => {
        Alert.alert('Verification Error');
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
      if (error?.code === 'NotAuthorizedException') {
        //If user not signed in navigate to sign in screen
        navigation.navigate('SignIn');
      } else {
        Alert.alert('Verification Error', error?.message);
        setIsLoading(false);
      }
    }
  };

  // async function resendConfirmationCode() {
  //   try {
  //     await Auth.resendSignUp(username);
  //     console.log('code resent successfully');
  //   } catch (err) {
  //     console.log('error resending code: ', err);
  //   }
  // }

  const VerificationSchema = yup.object().shape({
    code: yup
      .string()
      .min(6, 'Must be 6 digit')
      .max(6, 'Must be 6 digit')
      .required('Verification code is required'),
  });

  return (
    <View style={styles.backgroundContainer}>
      <View style={{bottom: 80}}>
        <Header
          headerText="Verification"
          subText="We’ve emailed you a verification code, please enter it below"
        />
      </View>

      <Formik
        initialValues={initialValues}
        validationSchema={VerificationSchema}
        onSubmit={handleOnSubmit}>
        {({handleChange, handleSubmit, touched, values, errors}) => (
          <>
            <View style={styles.passwordInput}>
              <TextInputSignup
                placeholder="6 digit code"
                keyboardType={'number-pad'}
                value={values.code}
                autoCorrect={false}
                onChangeText={handleChange('code')}
                hasError={errors.code && touched.code ? errors.code : false}
              />
            </View>
            <View style={{marginBottom: 20}}>
              {/* <TouchableOpacity onPress={resendConfirmationCode}>
                <Text style={styles.resendCode}>Resend Code</Text>
              </TouchableOpacity> */}
            </View>
            <View style={{bottom: '25%'}}>
              <Button
                isLoading={isLoading}
                onPress={handleSubmit}
                text="Verify"
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
