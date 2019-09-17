import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/Login';
import ScanScreen from './src/screens/Scan';

console.disableYellowBox = true;

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      title: `Login`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `Login`
    })
  },
  Scan: {
    screen: ScanScreen,
    navigationOptions: () => ({
      title: `A`,
      headerBackTitle: 'A much too long text for back button from B to A',
      headerTruncatedBackTitle: `to A`
    })
  }
});

const App = createAppContainer(MainNavigator);

export default App;
