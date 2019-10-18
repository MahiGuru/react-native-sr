import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity
} from "react-native";
import * as Permissions from "expo-permissions";

import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

import { Container } from "native-base";
import PrimaryButton from "../../utils/Button";

import BarcodeMask from 'react-native-barcode-mask';
import { asset_action_creator } from "../../actions/asset.actions";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withNavigationFocus } from "react-navigation";

class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    type: Camera.Constants.Type.back,
    hasCameraPermission: null,
    scanned: false
  };
  async componentDidMount() {
    this.getPermissionsAsync();
  }
  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { isFocused } = this.props
    const { hasCameraPermission, scanned } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <Container style={{ flex: 1, flexDirection: "column" }}>
        <Container
          style={{
            margin: 0,
            flex: 1,
            border: "1px solid red",
            backgroundColor: "#000"
          }}
        >

        { isFocused && <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          >
              <BarcodeMask width={'70%'} height={'70%'}  edgeColor={'#0564A4'} animatedLineColor={'green'}  
                    transparency={0.8} lineAnimationDuration={5000} animatedLineHeight={1}  />
          </Camera>}
        {scanned ? <Button
          title={"Tap to Scan Again"}
          onPress={() => this.setState({ scanned: false })}
        /> :  
          null
        } 
        </Container>
        <Container> 
          <PrimaryButton
            title="GO TO REQUEST TYPES"
            onPress={() => this.props.navigation.navigate("RequestType")}
            style={{ marginHorizontal: 15, paddingVertical: 30, marginTop: 20 }} 
          />
        </Container>
      </Container>
    );
  }
  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });    
    this.props.assetAction(data);
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

const mapStateToProps = ({asset}) => {
  console.log('asset', asset)
  return {
    assets: asset
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      assetAction: asset_action_creator
    },
    dispatch
  );
};


export default connect(mapStateToProps, mapDispatchToProps)(withNavigationFocus(ScanScreen));
