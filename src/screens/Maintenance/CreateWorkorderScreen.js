import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { Ionicons } from '@expo/vector-icons';
import {
  Container,
  Content,
  H3,
  Text,
  Card,
  CardItem,
  Body,
  Textarea,
  Header,
  Left,
  Button
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import DeckSwiperExample from "../../components/ImageSwiper";
import PrimaryButton from "../../utils/Button";


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
      <Content>
        <Content style={{height:300, width:'100%', backgroundColor:'red', marginBottom:-50}}>
          {this.props.pictures ? 
            <DeckSwiperExample source={this.props.pictures}></DeckSwiperExample>
            : null }
        </Content>
        <Content padder>
          <View style={{marginHorizontal:8}}>
            <Card>
              <CardItem>
                <Body>
                    <H3 style={{marginVertical: 10, color:'#0564A4'}}>Header Two</H3> 
                    <Text style={{marginVertical: 10}}>Header Two</Text> 
                </Body>
              </CardItem>
            </Card>
          </View> 
          <Content padder>
            {
              this.props.comments ? 
              ( 
                <View>
                  <H3>Commentaire</H3>
                  <Text>Lorem ipsum dummy content here Lorem ipsum dummy content here Lorem ipsum dummy content here</Text>
                </View>
              ) : null
            }
               
          </Content>
        </Content>
        <View style={{flex: 1, justifyContent:'flex-end', marginBottom: 20}}>
                <PrimaryButton
                    title="Valider"
                    onPress={() => this.props.navigation.navigate('CreateWorkorder')}
                    style={{
                      marginHorizontal: 15,
                      paddingVertical: 30,
                      marginTop: 20
                    }}
                    textStyle={
                      {
                        /* styles for button title */
                      }
                    }
                  />
              </View>
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
  },
  border: {
    borderStyle:'solid', borderColor:'red', borderWidth: 1
  },
  shadow: {  
        borderColor:'#333333', // if you need 
        borderWidth:1,
        overflow: 'hidden',
        shadowColor: '#333333',
        shadowRadius: 10,
        shadowOpacity: 1,
    }
}); 
const mapStateToProps = ({pictures, tasks, assetDetails, vocabulary, user}) => {
  let imagesArr = [];
  if(pictures && pictures.images) {
    Object.keys(pictures.images).forEach(function(key) {
      console.log(key, pictures.images[key]);
      imagesArr.push({image: pictures.images[key]});
    });
  }
  console.log("IMAGES ARRRRRR", imagesArr);
  
  return {
    pictures: imagesArr,
    tasks, assetDetails, vocabulary, user
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
