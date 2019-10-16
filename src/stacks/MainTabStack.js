import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'; 
import TaskScreen from '../screens/Maintenance/TaskScreen';
import EquipmentScreen from '../screens/Maintenance/EquipmentScreen';
import MaintenanceStack from './MaintenanceStack';
import ScanScreen from '../screens/Maintenance/ScanScreen';

import { Ionicons, FontAwesome, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

console.disableYellowBox = true;

const MainTabStack = createBottomTabNavigator({
  Maintenance: {
    screen: MaintenanceStack,
    navigationOptions: {
      tabBarLabel: 'Maintenance',
      tabBarIcon: () => <FontAwesome name='wrench' size={25} color='red' />
    }
  },
  Services: {
    screen: ScanScreen,
    navigationOptions: {
      tabBarLabel: 'Services',
      tabBarIcon: () => <MaterialCommunityIcons name='settings-outline' size={25} color='red' />
    }
  },
  Journal: {
    screen: TaskScreen,
    navigationOptions: {
      tabBarLabel: 'Journal',
      tabBarIcon: () => <Foundation name='thumbnails' size={25} color='red' />
    }
  },
  Profile: {
    screen: EquipmentScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: () => <FontAwesome name='user' size={25} color='red' />
    }
  }
});

export default MainTabStack;
