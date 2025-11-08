import { View, Text, Pressable, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import React from 'react';
import { Label } from './Label';

type ButtonPreset = 'preset1' | 'preset2' | 'preset3';

interface ButtonProps {
    title: string;
    onPress: () => void;
    preset?: ButtonPreset;
    style?: StyleProp<ViewStyle>;
}

const Button = ({ title, onPress, preset = 'preset1', style }: ButtonProps) => {
    const buttonStyle = [
        styles.baseContainer,
        styles[preset],
        style,
    ];

    const labelStyle: TextStyle = {
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: '600',
    };

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                buttonStyle,
                { opacity: pressed ? 0.8 : 1 }
            ]}
        >
            <Label style={labelStyle}>{title}</Label>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    baseContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    preset1: {
        width: 159,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#1C82DF',
    },

    preset2: {
        width: 390,
        height: 62,
        borderRadius: 15,
        backgroundColor: '#41B592',
    },

    preset3: {
        width: 394,
        height: 66,
        borderRadius: 10,
        backgroundColor: '#5391B4',
    },
});

export default Button;