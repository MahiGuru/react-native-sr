import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ScanScreen from './src/screens/ScanScreen';
import RequestTypeScreen from './src/screens/Maintenance/RequestTypeScreen';
import TaskScreen from './src/screens/Maintenance/TaskScreen';
import EquipmentScreen from './src/screens/Maintenance/EquipmentScreen';
import MaintenanceStack from './MaintenanceStack';

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
