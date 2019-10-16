import { createStackNavigator } from 'react-navigation-stack'; 
import RequestTypeScreen from '../screens/Maintenance/RequestTypeScreen';
import TaskScreen from '../screens/Maintenance/TaskScreen';
import EquipmentScreen from '../screens/Maintenance/EquipmentScreen';
import TakePictureScreen from '../screens/Maintenance/TakePictureScreen';
import ScanScreen from '../screens/Maintenance/ScanScreen';

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
    initialRouteName: 'RequestType',
    headerMode: 'screen',
    mode: 'modal',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default MaintenanceStack;
