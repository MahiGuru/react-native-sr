import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LoginForm } from '../components/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user_action_creator } from "../actions/user.actions";

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
    //action creator called using bindactioncreator
    this.props.getUsers();    
  }

  render() {
    const { navigate } = this.props.navigation;
    const navigateToScreen = () => {
      navigate('Scan', { name: 'Jane' });
    };
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
            navigateTo={() =>
              this.props.navigation.navigate({ routeName: 'Layout' })
            }
          ></LoginForm> 
        </View>
        <View style={{flex: 2}}> 
            <Text>USER INFO</Text>
            {this.props.users ? (
              <View>
                <Text>{this.props.users.email}</Text>
                <Text>
                  {this.props.users.first_name}
                  {this.props.users.last_name}
                </Text>
              </View>
            ) : null} 
            
            
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
  console.log('requestTypes', state);
  return { 
    users: state.users.data
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
      getUsers: user_action_creator
  }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
