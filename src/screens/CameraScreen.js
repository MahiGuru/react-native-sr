import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  ScrollableTab
} from 'native-base';
import { red } from 'ansi-colors';

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.snap = this.snap.bind(this);
  }
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };
  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
    }
  };
  render() {
    const { hasCameraPermission, scanned } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Camera
            ref={cam => {
              this.camera = cam;
            }}
            style={{ flex: 1 }}
            type={this.state.type}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row'
              }}
            >
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center'
                  }}
                  onPress={() => {
                    this.setState({
                      type:
                        this.state.type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                    });
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
                  >
                    Flip
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center'
                  }}
                  onPress={async () => {
                    if (this.camera) {
                      console.log('inside camera');
                      let photo = await this.camera.takePictureAsync({
                        quality: 0.3,
                        base64: true,
                        onPictureSaved: img => {
                          console.log('ÏMGGGGG', img);
                          return img;
                        }
                      });
                      console.log('THIS PGOTO', photo);
                    }
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
                  >
                    TAKE PICTURE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Camera>
        </View>
        <View style={{ flex: 1 }}>
          <Text>HELLOOO</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cameraContainer: {
    marginHorizontal: 0,
    marginLeft: 0,
    marginStart: 0,
    paddingHorizontal: 0,
    paddingLeft: 0,
    paddingStart: 0,
    padding: 0
  },
  tabHeading: {
    backgroundColor: 'white',
    height: 80
  },
  tabBarUnderline: {
    backgroundColor: '#29B6F6',
    height: 3
  }
});
export default ScanScreen;
