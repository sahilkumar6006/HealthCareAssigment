import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { useAuth } from '../../../auth/AuthContext';
import { styles } from './style';


const SplashScreen = ({ navigation }: any) => {
    const scaleAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 1500,
            easing: Easing.elastic(1),
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                navigation.replace('LoginScreen');
            }, 3000);
        });
    }, [scaleAnim, navigation]);

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.circle,
                    {
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                <Text style={styles.logoText}>Healthcare</Text>
            </Animated.View>
        </View>
    );
};



export default SplashScreen;