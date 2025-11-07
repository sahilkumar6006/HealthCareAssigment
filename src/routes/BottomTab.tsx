import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomScreen } from '../modules/HomeScreen/index';



const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomScreen} />
            <Tab.Screen name="Profile" component={HomScreen} />
        </Tab.Navigator>
    )
}

export default BottomTab