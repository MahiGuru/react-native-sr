import { createStackNavigator } from 'react-navigation-stack';
import ScanScreen from './src/screens/ScanScreen';
import RequestTypeScreen from './src/screens/Maintenance/RequestTypeScreen';
import TaskScreen from './src/screens/Maintenance/TaskScreen';
import EquipmentScreen from './src/screens/Maintenance/EquipmentScreen';

console.disableYellowBox = true;

const MaintenanceNavigator = createStackNavigator(
  {    
    RequestType: {
      screen: RequestTypeScreen,
      navigationOptions: () => ({
        headerTransparent: true,
        headerBackTitle: null
      })
    },
    Scan: {
      screen: ScanScreen,
      navigationOptions: () => ({
       header: null
      })
    },
    Task: {
      screen: TaskScreen,
      navigationOptions: () => ({
        title: `CameraScreen`,
        headerBackTitle: 'A much too long text for back button  to A',
        headerTruncatedBackTitle: `to A`
      })
    } ,
    Equipment: {
      screen: EquipmentScreen,
      navigationOptions: () => ({
        title: `CameraScreen`,
        headerBackTitle: 'A much too long text for back button  to A',
        headerTruncatedBackTitle: `to A`
      })
    }
  },
  {
    initialRouteName: 'Scan',
    headerMode: 'screen',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default MaintenanceNavigator;
