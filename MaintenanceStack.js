import { createStackNavigator } from 'react-navigation-stack';
import ScanScreen from './src/screens/ScanScreen';
import RequestTypeScreen from './src/screens/Maintenance/RequestTypeScreen';
import TaskScreen from './src/screens/Maintenance/TaskScreen';
import EquipmentScreen from './src/screens/Maintenance/EquipmentScreen';
import TakePictureScreen from './src/screens/Maintenance/TakePictureScreen';

console.disableYellowBox = true;

const MaintenanceStack = createStackNavigator(
  {
    RequestType: {
      screen: RequestTypeScreen,
      navigationOptions: () => ({
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
        headerTitle: null
      })
    },
    Equipment: {
      screen: EquipmentScreen,
      navigationOptions: () => ({
        headerTitle: null
      })
    },
    TakePicture: {
      screen: TakePictureScreen,
      navigationOptions: () => ({
        headerTitle: null
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

export default MaintenanceStack;
