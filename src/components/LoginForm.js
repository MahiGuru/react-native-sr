// Formik x React Native example
import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import { Formik, Field } from 'formik';
import PrimaryButton from '../utils/Button';
import * as yup from 'yup';
import SrTextInput from '../utils/SrTextInput';


const validationSchema = yup.object().shape({
  url: yup.string().required().label('Url'),
  username: yup.string().required().label('Username').min(2, 'Seems a bit short').max(10, 'We prefer insecure system'),
  password: yup.string().required().label('Password').min(2, 'Seems a bit short').max(10, 'We prefer insecure system')
})
export const LoginForm = props => {
  return (
    <SafeAreaView style={{ marginTop: 10 }}>
    <Formik
      initialValues={{ url: 'agasga', username: 'asgasgasg', password: 'asgasgasg' }}
      onSubmit={(values,actions) => {  
                    setTimeout(() => {
                      actions.setSubmitting(false);
                      props.navigateTo();
                    }, 1000);
                  }
      }
      validationSchema={validationSchema}
    >
      {formikProps  => (
        <React.Fragment> 
          <SrTextInput
            placeholder="Url"
            formikProps={formikProps}
            formikKey="url"
            style={{/** Custom styles */}}
            /*autoFocus*/
           />
           <SrTextInput
            placeholder="Username"
            formikProps={formikProps}
            formikKey="username"
           />
           <SrTextInput
            placeholder="Password"
            formikProps={formikProps}
            formikKey="password"
           /> 

           {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <PrimaryButton title="Login"
                onPress={formikProps.handleSubmit} 
                style={{ marginHorizontal: 15, paddingVertical: 30, marginTop:20 }}
                textStyle={{ /* styles for button title */ }} />
          )}

        </React.Fragment>
      )}
    </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    padding: '10px'
  },
  textField: {
    
  }
});
