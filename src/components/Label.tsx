import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Colors, FontSizes } from '../constants/theme';

export const Label = ({ text, onPress, linkText }: {
    text?: string,
    onPress?: () => {}
    linkText?: string
}) => {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.text}>
                {text}
                {linkText && <Text style={styles.linkText}> {linkText}</Text>}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: FontSizes.medium,
        color: Colors.textSecondary,
        textAlign: 'center',
    },
    linkText: {
        color: Colors.textLink,
        fontWeight: '600',
    },
});