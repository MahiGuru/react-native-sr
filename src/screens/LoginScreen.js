import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LoginForm } from '../components/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { autheticate_action_creator } from "../actions/authenticate.actions";

import Storage from '../store/storage';
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
  componentDidMount(){
    Storage.clearAll();
    //REDUX: action creator called
  }
  

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, height: 100, backgroundColor: '#0564A4' }}>
          <Image
            source={require('../assets/images/logo_planon.jpg')}
            resizeMode="contain"
            style={{
              maxHeight: '100%',
              maxWidth: '100%'
            }}
          />
        </View>
        <View style={{ flex: 3, backgroundColor: '#FFF', padding: 10 }}>
          <LoginForm
            navigateTo={async () => {
                await this.props.login();
                this.props.navigation.navigate({ routeName: 'Layout' });
              }
            }
          ></LoginForm> 
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
 

const mapStateToProps = (state) => {
  return { 
    vocabulary: state.authenticate
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
      login: autheticate_action_creator
  }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
