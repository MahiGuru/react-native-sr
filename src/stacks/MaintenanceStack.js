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
      screen: RequestTypeScreen
    },
    Scan: {
      screen: ScanScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Task: {
      screen: TaskScreen 
    },
    Equipment: {
      screen: EquipmentScreen 
    },
    TakePicture: {
      screen: TakePictureScreen,
      navigationOptions: () => ({
      })
    }
  },
  {
    initialRouteName: 'TakePicture',
    headerMode: 'screen',
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#004796',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      gesturesEnabled: false
    }
  }
);

export default MaintenanceStack;
