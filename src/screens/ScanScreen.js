import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

import { Container } from 'native-base';
import SrTabs from '../components/Tabs';
import PrimaryButton from '../utils/Button';

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
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
      <Container style={{ flex: 1, flexDirection: 'column' }}>
        <Container
          style={{
            margin: 0,
            flex: 1,
            border: '1px solid red',
            backgroundColor: '#000'
          }}
        >
          <BarCodeScanner
            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
            style={[styles.cameraContainer, StyleSheet.absoluteFill]}
          />

          {scanned && (
            <Button
              title={'Tap to Scan Again'}
              onPress={() => this.setState({ scanned: false })}
            />
          )}
        </Container>
        <Container>
          <PrimaryButton
            title="GO TO REQUEST TYPES"
            onPress={() => this.props.navigation.navigate('TakePicture')}
            style={{ marginHorizontal: 15, paddingVertical: 30, marginTop: 20 }}
            textStyle={
              {
                /* styles for button title */
              }
            }
          />
        </Container>
      </Container>
    );
  }
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
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
  }
});
export default ScanScreen;
