import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LoginForm } from '../components/LoginForm';
import { connect } from 'react-redux';
import logoPlanonImg from '../assets/images/logo_planon.jpg';

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
    const navigateToScreen = () => {
      navigate('Scan', {name: 'Jane'})
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, height: 100, backgroundColor: '#0564A4' }}>
          <Image source={require('../assets/images/logo_planon.jpg')} resizeMode='contain'
          style={{
            maxHeight: '100%',
            maxWidth: '100%'
            }}  />
        </View>
        <View style={{ flex: 3, backgroundColor: '#FFF', padding: 10 }}>
          <LoginForm navigateTo={() => this.props.navigation.navigate('Scan')}></LoginForm>
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
