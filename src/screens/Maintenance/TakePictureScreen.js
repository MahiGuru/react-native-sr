import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Container, Content, Card, CardItem, H3, Textarea } from 'native-base';
import CameraView from '../../components/CameraView';
import { withNavigationFocus } from 'react-navigation';
import Photocard from '../../components/Photo-card.component'; 

import PrimaryButton from '../../utils/Button';

class TakePictureScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
      header: navigation.state.params ? navigation.state.params.header : undefined
  });
  constructor(props) {
    super(props);
    this.handlePicture = this.handlePicture.bind(this);
    // this.handleDetail = this.handleDetailView.bind(this);
    this.closeCamera = this.closeCamera.bind(this);
    this.cameraTriggered = this.cameraTriggered.bind(this);
    this.state = {
      buttonType: 'view',
      isCameraOpen: false,
      thumbImageSrc: null,
      detailImageSrc: null
    };
  }
  handlePicture(data) {
    console.log('handleThumbView ', data);
    if(data){
      this.setState({ isCameraOpen: false, thumbImageSrc: 'data:image/jpeg;base64,'+data.base64 });
    }
  }
  closeCamera(val) {
    console.log("close Camera");
    this.setState({ isCameraOpen: false});
  }
  cameraTriggered(val){
    console.log(val);
    this.setState({ isCameraOpen: true});
  }
  render() { 
    const { isFocused } = this.props
    return (
      <Container>
        {isFocused && this.state.isCameraOpen ? (           
          <CameraView cameraPictureUpdate={this.handlePicture} closeCamera={this.closeCamera}>
          </CameraView> 
        ) : (
          <Container style={{flex:1, flexDirection:'column', justifyContent:'space-between'}}>
            <Text  style={{color:'#FFFFFF', marginTop:-10, backgroundColor:'#004796', padding:20, minHeight: 150, marginBottom: -80}}>
            Header Three
            </Text>           
            <View style={{flex: 1, flexDirection: 'row', marginHorizontal:20}}>
                <View style={{height: 180, flex:1}}>
                    <Photocard style={{flex: 1, height: 180, borderRadius: 10, padding:30}}
                        cameraTriggered={this.cameraTriggered}
                        previewSrc = {this.state.thumbImageSrc}
                        title={'View'}
                    ></Photocard>
                </View>
                <View style={{ height: 180,flex:1}} >
                    <Photocard style={{flex: 1, height: 180, borderRadius: 10, padding:30}}
                        cameraTriggered={this.cameraTriggered}
                        previewSrc = {this.state.thumbImageSrc}
                        title={'Details'}
                    ></Photocard>
                </View> 
            </View> 
            <View style={{flex: 1, flexDirection: 'column', marginHorizontal:20}}>
                <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </View>
            <View style={{flex: 1, justifyContent:'flex-end', margin:20}}>
                <PrimaryButton
                    title="Suveneir"
                    onPress={() => this.props.navigation.navigate('TakePicture')}
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
            </Container> 
        )}
      </Container>
    );
  }
}
 

export default withNavigationFocus(TakePictureScreen);
// <View style={{padding:20,flex:1, flexDirection:'row'}}>
//               <Image
//                 style={{flex:1}}
//                 source={{uri: this.state.detailImageSrc}}
//               />
//               <Image
//                 style={{flex:1}}
//                 source={{uri: this.state.thumbImageSrc}}
//               />
//               </View>

// <Text  style={{color:'red', marginTop:80, backgroundColor:'#004796', padding:20, minHeight: 200, marginBottom: -120}}>
// Header Three
//                 </Text>

// <Card style={{flex: 1, minHeight: 180, borderRadius: 10 }} > 
//                       <CardItem button  style={{ justifyContent:'center', borderRadius: 10, minHeight:'90%', textAlign: 'center'}} onPress={() => {
//                         this.setState({ isCameraOpen: true, buttonType: 'view' });
//                       }}>
//                            <Text style={{textAlign: 'center'}}>VIEW </Text>
//                       </CardItem>
                      
//                   </Card>


// <Card style={{flex: 1, minHeight: 180, borderRadius: 10 }}> 
//                       <CardItem button  style={{ justifyContent:'center', borderRadius: 10, minHeight:'90%', textAlign: 'center'}} onPress={() => {
//                         this.setState({ isCameraOpen: true, buttonType: 'detail' });
//                       }}>
//                           <Text style={{textAlign: 'center'}}>DETAILS </Text>
//                       </CardItem> 
//                   </Card>