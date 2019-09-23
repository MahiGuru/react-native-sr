import React, { Component } from 'react';
import { View, Text, Container } from 'native-base';
import PrimaryButton from '../../utils/Button';

class RequestTypeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text>RequestTypeScreen!</Text>
        <Container
          style={{
            flex: 1
          }}
        >
          <PrimaryButton
            title="GO TO Task"
            onPress={() => this.props.navigation.navigate('Task')}
            style={{
              marginHorizontal: 15,
              paddingVertical: 30,
              marginTop: 20
            }}
          />
        </Container>
      </View>
    );
  }
}

export default RequestTypeScreen;
