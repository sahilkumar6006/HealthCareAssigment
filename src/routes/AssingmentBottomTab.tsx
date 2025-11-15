import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomScreen } from '../modules/HomeScreen/index';
import GetPharama from '../modules/getPhararmacy/view/GetPharama';
import AssingmentHomeScreen from '../modules/HomScreeen/View';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();


const BottomTab = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false, tabBarStyle: {
                    backgroundColor: '#141416',
                    borderTopWidth: 0,
                    height: 80,
                },
            }} >
                <Tab.Screen name="Home" component={AssingmentHomeScreen} />
                <Tab.Screen name='GetPharma' component={GetPharama} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTab