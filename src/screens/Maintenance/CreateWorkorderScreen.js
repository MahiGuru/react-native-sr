import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
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
  CardItem,
  DeckSwiper,
  CardSwiper,
  Left,
  Thumbnail
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";


class CreateWorkorderScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return { 
      header: null
    }
  };

  constructor(props){
    super(props);
    const {state} = this.props.navigation;
   
  }
 
  componentDidMount(){
  }
  componentWillUnmount(){
    console.log("COMPONENT UNMOUNT");
  }
  render() {
    const { params } = this.props.navigation.state;
     
    return (
      <Container> 
       
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
const mapStateToProps = (state) => {
  console.log('Create Workorder Screen >>> ', state)
  let imagesArr = [];
  Object.keys(state.pictures).forEach(function(key) {
    console.log(key, state.pictures[key]);
    imagesArr.push(state.pictures[key]);
  });
  console.log("IMAGES ARRRRRR", imagesArr);
  
  return {
    pictures: imagesArr,
    workorder: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
    },
    dispatch
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkorderScreen);
