import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Container, Content, Card, CardItem, H3, Textarea } from 'native-base';
import CameraView from '../../components/CameraView';
import { withNavigationFocus } from 'react-navigation';
import Photocard from '../../components/Photo-card.component'; 
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PrimaryButton from '../../utils/Button';
import { view_picture_action_creator, detail_picture_action_creator } from '../../actions/takepicture.actions';

class TakePictureScreen extends Component {
  static navigationOptions = ({ navigation }) => {
      const {params} = navigation.state;
      return {
          header: navigation.state.params ? navigation.state.params.header : undefined,
          title: (params && params.title) ? params.title : ''
      }
  };
  componentDidMount(){
    console.log("MYVOCAB >>>> ", this.props.vocabulary);
  }
  constructor(props) {
    super(props);
    this.handlePicture = this.handlePicture.bind(this);
    // this.handleDetail = this.handleDetailView.bind(this);
    this.closeCamera = this.closeCamera.bind(this);
    this.cameraTriggered = this.cameraTriggered.bind(this);
    this.removeImageTriggered = this.removeImageTriggered.bind(this);
    this.state = {
      buttonType: 'view',
      isCameraOpen: false,
      viewImageSrc: null,
      detailImageSrc: null,
      imageType: null
    };
  }
  handlePicture(data) {
    console.log('handleThumbView ', data);
    if(data){
        if(this.state.imageType === 'View'){
          this.setState({ isCameraOpen: false, viewImageSrc: 'data:image/jpeg;base64,'+data.base64 });
          this.props.view_picture_action('data:image/jpeg;base64,'+data.base64);
        }else{
          this.setState({ isCameraOpen: false, detailImageSrc: 'data:image/jpeg;base64,'+data.base64 });
          this.props.detail_picture_action('data:image/jpeg;base64,'+data.base64);
        }
    }
  } 
  closeCamera(val) {
    console.log("close Camera");
    this.setState({ isCameraOpen: false});
  }
  cameraTriggered(type, val){
    console.log(val);
    this.setState({ imageType: type, isCameraOpen: true});
  }
  removeImageTriggered(type, val){
    console.log("removeImageTriggered", type, val);
    if(type === "View"){
      this.setState({ viewImageSrc: val });
    }else{
      this.setState({ detailImageSrc: val });
    }
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
                        type = 'View'    
                        cameraTriggered={this.cameraTriggered}
                        removeImageTriggered = {this.removeImageTriggered}
                        previewSrc = {this.state.viewImageSrc}
                        title={this.props.vocabulary['vueDetaille']}
                    ></Photocard>
                </View>
                <View style={{ height: 180,flex:1}} >
                    <Photocard style={{flex: 1, height: 180, borderRadius: 10, padding:30}}
                        type = 'Detail'
                        cameraTriggered={this.cameraTriggered}
                        removeImageTriggered = {this.removeImageTriggered}
                        previewSrc = {this.state.detailImageSrc}
                        title={this.props.vocabulary['vuedEnsemble']}
                    ></Photocard>
                </View> 
            </View> 
            <View style={{flex: 1, flexDirection: 'column', marginHorizontal:20}}>
                <Textarea rowSpan={5} bordered placeholder="Textarea" />
            </View>
            <View style={{flex: 1, justifyContent:'flex-end', margin:20}}>
                <PrimaryButton
                    title="Suveneir"
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
            </Container> 
        )}
      </Container>
    );
  }
}
 

function mapStateToProps(state) {
  console.log("TAKE PICTURE SCREEN STATE >>>>>> ", state);
  return {
    vocabulary: state.vocabulary
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      view_picture_action : view_picture_action_creator,
      detail_picture_action : detail_picture_action_creator
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigationFocus(TakePictureScreen));
