import React from 'react';
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Alert,
  ScrollView,
  SafeAreaView,
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
import Header from '../../components/Header';
import {Auth} from 'aws-amplify';
import {Formik} from 'formik';
import * as yup from 'yup';

export default function SignUp({navigation}) {
  const [isLoading, setIsLoading] = React.useState(false);

  async function signUp({firstName, lastName, password, username, email}) {
    setIsLoading(true);
    try {
      await Auth.signUp({
        firstName,
        lastName,
        password,
        username,
        attributes: {
          email,
          'custom:firstName': firstName,
          'custom:lastName': lastName,
        },
      });
      setIsLoading(false);
      navigation.navigate('VerifyMobile', {
        firstName,
        lastName,
        email,
        username,
        password,
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Alert.alert('Error', error.message);
    }
  }

  const SigninSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: yup
      .string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: yup
      .string()
      .min(8, 'Minimum 8 symbols')
      .max(30, 'Maximum 30 symbols')
      .required('Required'),
    email: yup.string().email('Invalid email').required('Required'),
    username: yup
      .string()
      .when('email', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: yup
          .string()
          .oneOf([yup.ref('email')], 'Both email must be the same'),
      })
      .required('Required'),
  });

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', paddingTop: '10%'}}>
      <ScrollView style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.backgroundContainer}>
          <Header
            headerText="Create Account"
            subText="Please enter your details below to create a new account"
          />
          <Formik
            initialValues={{
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              username: '',
            }}
            validationSchema={SigninSchema}
            onSubmit={signUp}>
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
                  placeholder="First name"
                  autoCorrect={false}
                  value={values.firstName}
                  hasError={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : false
                  }
                  onChangeText={handleChange('firstName')}
                />
                <TextInputSignup
                  placeholder="Last name"
                  value={values.lastName}
                  hasError={
                    errors.lastName && touched.lastName
                      ? errors.lastName
                      : false
                  }
                  autoCorrect={false}
                  onChangeText={handleChange('lastName')}
                />
                <TextInputSignup
                  placeholder="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  value={values.email}
                  hasError={
                    errors.email && touched.email ? errors.email : false
                  }
                  onChangeText={(value) =>
                    setFieldValue('email', value.toLowerCase())
                  }
                />
                <TextInputSignup
                  placeholder="Confirm email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={values.username}
                  hasError={
                    errors.username && touched.username
                      ? errors.username
                      : false
                  }
                  onChangeText={(value) =>
                    setFieldValue('username', value.toLowerCase())
                  }
                />
                <TextInputSignup
                  placeholder="Password"
                  secureTextEntry={true}
                  value={values.password}
                  hasError={
                    errors.password && touched.password
                      ? errors.password
                      : false
                  }
                  onChangeText={handleChange('password')}
                />

                <Text style={styles.terms}>
                  I agree to connecMe2 privacy policy and terms of service.
                </Text>

                <View style={{bottom: 30, marginTop: -20}}>
                  <Button
                    onPress={handleSubmit}
                    text="Sign Up"
                    isLoading={isLoading}
                  />
                </View>
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
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signUp}>
                I have an account!{' '}
                <Text style={{color: '#f59532'}}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
