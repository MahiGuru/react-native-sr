import React, { Component } from 'react';
import MaintenanceNavigator from '../../../MaintenanceNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createAppContainer } from 'react-navigation';
import { View } from 'native-base';
import SrTabs from '../../components/Tabs';
import ScanScreen from '../ScanScreen';
import TaskScreen from './TaskScreen';

const MaintenanceContainer = createAppContainer(createBottomTabNavigator({Scan: MaintenanceNavigator}));
class MaintenanceScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View
                    style={{
                        margin: 0,
                        flex: 1,
                        border: '1px solid red',
                        backgroundColor: '#000'
                    }}
                    >
                    <MaintenanceContainer />
                        <SrTabs></SrTabs>
                </View>
                
            </View>
        );
    }
}

export default MaintenanceScreen;