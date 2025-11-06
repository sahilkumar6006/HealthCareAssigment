import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomScreen from '../modules/HomeScreen/view/HomScreen';
import SplashScreen from '../modules/splashScreen/view/SplashScreen';
import LoginScreen from '../modules/Login/View/Login';
import { Routes } from './constants';




const Stack = createNativeStackNavigator();



export const RootStack = () => {
    return (
        <NavigationContainer

        >
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
                <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
                <Stack.Screen name="Home" component={HomScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

