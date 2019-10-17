import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { task_action_creator } from "../../actions/task.actions";
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
class TaskScreen extends Component {


  constructor(props){
    super(props);
    this.requestTypeId; 
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions, navigation.getParam('otherParam'));
    this.requestTypeId = navigation.getParam('requestId');
    return {
      title: navigation.getParam('otherParam', 'TASK Details'),
    };
  };
  componentDidMount(){
    this.props.getTasks();
  }
  render() {
    const mapListItems = (item) => {
      return ( 
        <ListItem style={styles.container} icon onPress={() => { 
          this.props.navigation.navigate("Task", {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }}>
            <Body style={{flex: 0.8, padding:20, boxSizing:'border-box'}}>
                <Text style={{fontSize: 14}}>{this.requestTypeId} - {item.label}</Text>
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
        <Text>{this.requestTypeId}</Text>
          <List style={{marginTop:10, padding:10}}>
            {this.props.tasks ? (<List dataArray={this.props.tasks}
            renderRow={(data) =>
              mapListItems(data)}>
          </List>) : null}
          </List>
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
const mapStateToProps = ({tasks}) => {
  console.log('tasks', tasks)
  return {
    tasks: tasks.data
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTasks: task_action_creator
    },
    dispatch
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(TaskScreen);
