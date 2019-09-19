import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

import { Container, Header, Tab, Tabs, TabHeading, Icon, ScrollableTab } from 'native-base';
import { red } from 'ansi-colors';

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    hasCameraPermission: null,
    scanned: false,
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
          margin:0, 
          flex:1,
          border: '1px solid red', backgroundColor: '#000'
        }}>
        <BarCodeScanner barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={[styles.cameraContainer, StyleSheet.absoluteFill]}
        />

        {scanned && (
          <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
        )}
      </Container> 
          <Container> 
                <Tabs tabBarPosition={'bottom'} locked tabBarUnderlineStyle={{backgroundColor:'transparent',
                height: 5}} style={{height:140}}>
                    <Tab style={styles.tabHeading} heading={ 
                      <TabHeading style={{ flex:1, flexDirection:'column'}}>
                          <Icon name="camera"  />
                          <Text style={{color: 'white'}}>Maintenance</Text></TabHeading>
                      }>
                        <Text>Hello - 1 </Text>
                    </Tab>
                    <Tab heading="Tab2"   style={styles.tabHeading} activeTabStyle={{backgroundColor:'red'}}  heading={ 
                      <TabHeading style={{ flex:1, flexDirection:'column'}}>
                          <Icon name="services"  />
                          <Text style={{color: 'white'}}>Services</Text></TabHeading>
                      }>
                      <Text>Hello - 2</Text>
                    </Tab>
                    <Tab heading="Tab3"  style={styles.tabHeading} heading={ 
                      <TabHeading style={{ flex:1, flexDirection:'column'}}>
                          <Icon name="camera"  />
                          <Text style={{color: 'white'}}>Journal</Text></TabHeading>
                      }>
                      <Text>Hello - 3</Text>
                    </Tab>
                </Tabs>
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
      marginHorizontal: 0, marginLeft: 0, marginStart: 0,
      paddingHorizontal: 0, paddingLeft: 0, paddingStart: 0, 
      padding: 0
  },
  tabHeading: {
    backgroundColor: 'white',
    height:80
},
tabBarUnderline: {
    backgroundColor: '#29B6F6',
    height: 3
}
});
export default ScanScreen;
