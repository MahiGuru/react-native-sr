import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Container } from 'native-base';
import CameraView from '../../components/CameraView';
import PrimaryButton from '../../utils/Button'; 
import styles from './button.styles';

class TakePictureScreen extends Component {
  constructor(props) {
    super(props);
    this.handleThumb = this.handleThumbView.bind(this);
    this.handleDetail = this.handleDetailView.bind(this);
    this.state = {
      buttonType: 'view',
      isCameraOpen: false,
      thumbImageSrc: null,
      detailImageSrc: null
    };
  }
  handleThumbView(data) {
    console.log('handleThumbView ', data);
    if(data){
      this.setState({ isCameraOpen: false, thumbImageSrc: 'data:image/jpeg;base64,'+data.base64 });
    }
  }
  handleDetailView(data) {
    console.log('handleDetailView', data);
    this.setState({ isCameraOpen: false, detailImageSrc: 'data:image/jpeg;base64,'+data.base64 });
  }
  render() {
    return (
      <Container>
        {this.state.isCameraOpen ? ( 
          <CameraView cameraPictureUpdate={this.state.buttonType == 'view' ? this.handleThumb : this.handleDetail}></CameraView> 
        ) : (
          <Container style={{ flex: 1, flexDirection: 'column' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <PrimaryButton
                  title="Camera 1"
                  onPress={() => {
                    this.setState({ isCameraOpen: true, buttonType: 'view' });
                  }}
                  style={styles.primaryButton} 
                />
                <PrimaryButton
                  title="Camera 2"
                  onPress={() => {
                    this.setState({ isCameraOpen: true, buttonType: 'detail' });
                  }}
                  style={styles.primaryButton}
                  textStyle={
                    {
                      /* styles for button title */
                    }
                  }
                />
              
            </View>
            <View style={{padding:20,flex:1, flexDirection:'row'}}>
              <Image
                style={{flex:1}}
                source={{uri: this.state.detailImageSrc}}
              />
              <Image
                style={{flex:1}}
                source={{uri: this.state.thumbImageSrc}}
              />
              </View>
          </Container>
        )}
      </Container>
    );
  }
}
 

export default TakePictureScreen;
