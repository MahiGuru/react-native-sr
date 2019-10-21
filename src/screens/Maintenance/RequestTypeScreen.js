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
  StyleProvider,
  Card,
  CardItem
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
class RequestTypeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    return { 
      title: params ? params.title: ''
    }
  };
  async componentDidMount() {
    await this.props.getRequestTypes();
    console.log(this.props);
  }

  render() {
    const { params } = this.props.navigation.state;
    const mapListItems = (data) => {
        return (
          <TouchableOpacity  onPress={() => {
              this.props.navigation.navigate("Task", {
                requestId: data.item.id,
                title: params.title,
              }) }}>
              <CardItem style={styles.container} >  
                  <Body style={{flex: 0.8}}>
                      <Text style={{fontSize: 14}}>{data.item.label}</Text>
                  </Body>
                  <Right style={{flex:0.2}}>
                      <Ionicons name='ios-arrow-forward' size={25}/>
                  </Right>
            </CardItem>
        </TouchableOpacity>
        );
    }

    return (
      <Container>
        <Content> 
          {this.props.requestTypes ? <Card transparent dataArray={this.props.requestTypes} 
            renderRow={(data) =>
                mapListItems(data)}>
            </Card> : null 
          }
        </Content>
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
 
function mapStateToProps(state) {
  console.log("REQUEST SCREEN STATE >>>>>> ", state);
  return {
    requestTypes: state.requestTypes.data,
    user: state.user,
    asset: state.asset,
    assetDetails: state.assetDetails
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
