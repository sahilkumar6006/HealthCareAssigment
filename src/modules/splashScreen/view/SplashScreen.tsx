import { View, Text, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'


const SplashScreen = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }).start(() => {
            setTimeout(() => {
                // navigation.replace("Home");
            }, 1000);
        })
    }, [fadeAnim]);
    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen