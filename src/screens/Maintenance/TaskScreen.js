import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import { task_action_creator } from "../../actions/task.actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Content,
  Text,
  Right,
  Body,
  Card,
  CardItem
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
class TaskScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const { params } = navigation.state;
    this.requestTypeId = navigation.getParam('requestId');
    return { 
      title: params ? params.title: ''
    }
  };

  constructor(props){
    super(props);
    const {state} = this.props.navigation;
    this.requestId = state.params ? state.params.requestId : null;
  }
 
  componentDidMount(){
    this.props.getTasks(this.requestId);
  }
  componentWillUnmount(){
    console.log("COMPONENT UNMOUNT");
    this.props.tasks = null;
  }
  render() {
    const { params } = this.props.navigation.state;
    const mapListItems = (data) => {
          return ( 
            <TouchableOpacity  onPress={() => {
              console.log("CLICKED ", data);
                this.props.navigation.navigate("Equipment", {
                  domainId: data.item.domainId,
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
          {this.props.tasks ? <Card transparent dataArray={this.props.tasks} 
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
