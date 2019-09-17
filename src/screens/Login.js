import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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
        <View
          style={{ flex: 1, height: 100, backgroundColor: 'powderblue' }}
        ></View>
        <View style={{ flex: 3, backgroundColor: 'steelblue' }}>
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
