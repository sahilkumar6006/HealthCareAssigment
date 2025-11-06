// src/screens/SplashScreen.tsx
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';


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
            }, 500);
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#66B2FF',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    logoText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
});

export default SplashScreen;