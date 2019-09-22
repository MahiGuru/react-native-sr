import React, { Component } from 'react';
import { View, Text } from 'native-base';
import PrimaryButton from '../../utils/Button';

class EquipmentScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <Text>Equipment Page</Text>
        <PrimaryButton
          title="GO TO Equipment"
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
    );
  }
}

export default EquipmentScreen;
