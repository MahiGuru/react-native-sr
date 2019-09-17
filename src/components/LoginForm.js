// Formik x React Native example
import React from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

export const LoginForm = props => {
  const [url, onSetUrl] = React.useState('');
  const [username, onSetUsername] = React.useState('');
  const [password, onSetPassword] = React.useState('');
  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={values => console.log(values)}
    >
      {props => (
        <View style={{ margin: 5 }}>
          <TextInput
            inlineImageLeft="search_icon"
            autoFocus={false}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              marginBottom: 8
            }}
            onChangeText={text => onSetUrl(text)}
            value={url}
            placeholder="Url"
            editable
            maxLength={40}
          />
          <TextInput
            autoFocus={false}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              marginBottom: 8
            }}
            onChangeText={text => onSetUsername(text)}
            value={username}
            placeholder="Username"
            editable
            maxLength={40}
          />
          <TextInput
            autoFocus={false}
            style={{
              borderColor: 'gray',
              borderWidth: 1,
              padding: 10,
              marginBottom: 8
            }}
            onChangeText={text => onSetPassword(text)}
            value={password}
            placeholder="Password"
            editable
            maxLength={40}
          />
          <Button
            title="Login"
            color="#1e32bd"
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    padding: '10px'
  }
});
