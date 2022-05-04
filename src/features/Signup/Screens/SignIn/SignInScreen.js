import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import {Divider} from 'react-native-elements';
import Twitter from '../../../../assets/Twitter.js';
import Facebook from '../../../../assets/Facebook.js';
import Gmail from '../../../../assets/Gmail.js';
import LinkedIn from '../../../../assets/LinkedIn.js';
import Apple from '../../../../assets/Apple.js';
import Button from '../../../../components/form/Button';
import TextInputSignup from '../../../../components/form/TextInputSignup';
import {Auth} from 'aws-amplify';
import {useDispatch} from 'react-redux';
import * as actions from '../../../userProfile/_redux/actions';
import {Formik} from 'formik';
import * as yup from 'yup';

export default function SignInScreen({navigation, updateAuthState}) {
  const dispatch = useDispatch();

  const [isSubmitting, setSubmitting] = useState(false);

  async function signIn({password, email}, {setErrors, resetForm}) {
    setSubmitting(true);
    try {
      await Auth.signIn(email, password);

      const user = await Auth.currentAuthenticatedUser();
      dispatch(
        actions.getSeeker(email, (seekerResult) => {
          if (seekerResult.length !== 0) {
            //User exist in db, navigate to discover screen
            updateAuthState('loggedIn');
          } else {
            //If User not exist in db, create one and navigate to discover

            const {attributes} = user;

            const input = {
              username: email,
              firstName: attributes['custom:firstName'],
              lastName: attributes['custom:lastName'],
              status: 1,
              email: email,
              profileCompleted: false,
              visibleToProviders: false,
              visibleToSeekers: false,
            };

            dispatch(
              actions.createSeeker(input, () => {
                updateAuthState('loggedIn');
                setSubmitting(false);
              }),
            ).catch(() => {
              Alert.alert('Signin Error');
              setSubmitting(false);
            });
          }
          setSubmitting(false);
        }),
      );
    } catch (error) {
      console.log(error);
      if (error?.code === 'UserNotConfirmedException') {
        //If user not confirmed with verification code, navigate to verify screen
        await resendVerificationCode({email, password});
      } else {
        Alert.alert('Error', error?.message);
        setSubmitting(false);
      }
    }
  }

  const resendVerificationCode = async ({email, password}) => {
    try {
      await Auth.resendSignUp(email);

      setSubmitting(false);

      navigation.navigate('VerifyMobile', {
        email,
        username: email,
        password,
      });
    } catch (error) {}
  };

  const SignupSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, 'Minimum 8 symbols')
      .max(30, 'Maximum 30 symbols')
      .required('Password is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.backgroundContainer}>
      <Image
        style={styles.logoImage}
        source={require('../../../../assets/LogoNew1.jpeg')}
      />
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={signIn}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          touched,
          values,
          errors,
        }) => (
          <>
            <TextInputSignup
              placeholder="Email"
              value={values.email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={(value) =>
                setFieldValue('email', value.toLowerCase())
              }
              hasError={errors.email && touched.email ? errors.email : false}
            />
            <TextInputSignup
              placeholder="Password"
              value={values.password}
              secureTextEntry
              autoCorrect={false}
              textContentType="password"
              onChangeText={handleChange('password')}
              hasError={
                errors.password && touched.password ? errors.password : false
              }
            />

            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <Button
              text="Sign In"
              onPress={handleSubmit}
              disabled={isSubmitting}
              isLoading={isSubmitting}
            />
          </>
        )}
      </Formik>

      <View style={styles.dividerView}>
        <Divider style={styles.dividerLeft} />
        <Text style={styles.dividerContent}>Or connect with</Text>
        <Divider style={styles.dividerRight} />
      </View>
      <View style={styles.socials}>
        <Twitter width="40" height="40" />
        <Facebook width="40" height="40" />
        <Gmail width="40" height="40" />
        <LinkedIn width="40" height="40" />
        <Apple width="40" height="40" />
      </View>

      <View style={{flexDirection: 'row', top: '5%'}}>
        <Text style={styles.signUp}>I don't have an account!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={{color: '#f59532'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
