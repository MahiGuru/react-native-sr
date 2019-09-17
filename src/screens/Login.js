import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LoginForm } from '../components/LoginForm';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 2, height: 100, backgroundColor: '#1e32bd' }}>
          <Image
            style={{ width: 200, height: 200 }}
            source={{
              uri: 'https://facebook.github.io/react-native/img/tiny_logo.png'
            }}
            alt="IMAGE NOT LOADING"
          />
        </View>
        <View style={{ flex: 4, backgroundColor: '#FFF', padding: 10 }}>
          <LoginForm></LoginForm>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  const { friends } = state;
  return { friends };
};

export default connect(mapStateToProps)(LoginScreen);
