import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import ScanScreen from './src/screens/ScanScreen';
import CameraScreen from './src/screens/CameraScreen';
import { createAppContainer } from 'react-navigation';

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerTransparent: true,
        headerBackTitle: null
      })
    },
    Scan: {
      screen: ScanScreen,
      navigationOptions: () => ({
        title: `Scan`,
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: `to A`
      })
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: () => ({
        title: `CameraScreen`,
        headerBackTitle: 'A much too long text for back button from B to A',
        headerTruncatedBackTitle: `to A`
      })
    }
  },
  {
    headerMode: 'screen',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default AppNavigator;
