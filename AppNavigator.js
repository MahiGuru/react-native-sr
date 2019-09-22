import {
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginScreen';
import { createAppContainer } from 'react-navigation';
import MainTabStack from './MainTabStack';

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
    Layout: {
      screen: MainTabStack,
      navigationOptions: () => ({
        header: null
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
