import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomScreen from '../modules/HomeScreen/view/HomScreen';




const Stack = createNativeStackNavigator();



export const RootStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomScreen} />
        </Stack.Navigator>
    );
}

