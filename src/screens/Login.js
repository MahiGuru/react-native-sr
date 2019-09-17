import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 1, height: 100, backgroundColor: 'powderblue' }}>
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Scan', { name: 'Jane' })}
          />
        </View>
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
