import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import RequestTypeScreen from '../screens/Maintenance/RequestTypeScreen';
import TaskScreen from '../screens/Maintenance/TaskScreen';
import EquipmentScreen from '../screens/Maintenance/EquipmentScreen';
import MaintenanceStack from './MaintenanceStack';
import ScanScreen from '../screens/Maintenance/ScanScreen';

console.disableYellowBox = true;

const MainTabStack = createBottomTabNavigator({
  Maintenance: {
    screen: MaintenanceStack,
    navigationOptions: {
      tabBarLabel: 'Maintenance'
    }
  },
  Services: {
    screen: ScanScreen,
    navigationOptions: {
      tabBarLabel: 'Services'
    }
  },
  Journal: {
    screen: TaskScreen,
    navigationOptions: {
      tabBarLabel: 'Journal'
    }
  },
  Profile: {
    screen: EquipmentScreen,
    navigationOptions: {
      tabBarLabel: 'Profile'
    }
  }
});

export default MainTabStack;
