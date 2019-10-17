import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { request_type_action_creator } from "../../actions/request-types.actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Ionicons, FontAwesome, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  icon,
  Left,
  Right,
  Icon,
  Body,
  View,
  StyleProvider
} from "native-base";
import PrimaryButton from "../../utils/Button";
class RequestTypeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);
  }
  
  async componentDidMount() {
    await this.props.getRequestTypes();
  }

  render() {
    const mapListItems = (item) => {
            return ( 
              <ListItem style={styles.container} icon onPress={() => { 
                this.props.navigation.navigate("Task", {
                  requestId: item.id,
                  otherParam: 'anything you want here',
                })
              }}>
                  <Body style={{flex: 0.8, padding:20, boxSizing:'border-box'}}>
                      <Text style={{fontSize: 14}}>{item.label}</Text>
                  </Body>
                  <Right style={{flex:0.2, padding:20, boxSizing:'border-box'}}>
                      <Ionicons name='ios-arrow-forward' size={25}/>
                  </Right>
              </ListItem>
            );
    }

    return (
      <Container>
        <Content> 
          <List style={{marginTop:10, padding:10}}>
            {this.props.requestTypes ? (<List dataArray={this.props.requestTypes}
            renderRow={(data) =>
              mapListItems(data)}>
          </List>) : null}
          </List>
        </Content>
        <PrimaryButton
          title="GO TO Task"
          onPress={() => { 
            this.props.navigation.navigate("Task", {
              requestId: 55,
              otherParam: 'anything you want here',
            })
          }}
          style={{
            marginHorizontal: 15,
            paddingVertical: 30,
            marginTop: 20
          }}
        />
      </Container>     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    paddingLeft:20,
    margin:3,
    borderColor: '#b5b5b5',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 25,
    fontSize: 12
  }
}); 
 
function mapStateToProps({ requestTypes, users }) {
  console.log(requestTypes, users);
  return {
    requestTypes: requestTypes.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getRequestTypes: request_type_action_creator
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestTypeScreen);
