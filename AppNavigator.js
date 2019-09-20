import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import ScanScreen from './src/screens/ScanScreen';
import CameraScreen from './src/screens/CameraScreen';
import { createAppContainer } from 'react-navigation';
import MaintenanceNavigator from './MaintenanceNavigator';
import MaintenanceScreen from './src/screens/Maintenance/MaintenanceScreen';

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
    Maintenance: {
      screen: MaintenanceScreen,
      navigationOptions: () => ({
        headerTransparent: true,
        headerBackTitle: null
      })
    },
    Camera: {
      screen: CameraScreen,
      navigationOptions: () => ({
        title: `CameraScreen`,
        headerBackTitle: 'A much too long text for back button  to A',
        headerTruncatedBackTitle: `to A`
      })
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'screen',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default AppNavigator;
