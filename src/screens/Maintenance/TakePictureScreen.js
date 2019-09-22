import React, { Component } from 'react';
import { View, Text, Container } from 'native-base';
import CameraView from '../../components/CameraView';
import PrimaryButton from '../../utils/Button';
class TakePictureScreen extends Component {
  constructor(props) {
    super(props);
    this.handleThumb = this.handleThumbView.bind(this);
    this.handleDetail = this.handleDetailView.bind(this);
    this.state = {
      isCameraOpen: false
    };
  }
  handleThumbView(filterValue) {
    console.log('handleThumbView ', filterValue);
    this.setState({ isCameraOpen: false });
  }
  handleDetailView(filterValue) {
    console.log('handleDetailView', filterValue);
    this.setState({ isCameraOpen: false });
  }
  render() {
    return (
      <Container>
        {this.state.isCameraOpen ? (
          <CameraView change={this.handleDetail}></CameraView>
        ) : (
          <Container style={{ flex: 1, flexDirection: 'row' }}>
            <PrimaryButton
              title="Camera 1"
              change={this.handleThumb}
              onPress={() => {
                this.setState({ isCameraOpen: true });
              }}
              style={{
                flex: 1,
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
            <PrimaryButton
              title="Camera 2"
              change={this.handleDetail}
              onPress={() => {}}
              style={{
                flex: 1,
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
          </Container>
        )}
      </Container>
    );
  }
}

export default TakePictureScreen;
