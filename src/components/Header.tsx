import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Label } from './Label';
import { Colors } from '../constants/theme';


export const Header = ({ title }: { title: string }) => {
    return (
        <View style={styles.header}>
            {/* <Icon name="menu-outline" size={24} color="#FFF" style={styles.icon} /> */}
            <Label text={title} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 60,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 4,
            },
        }),
    },
    icon: {
        position: 'absolute',
        left: 15,
    },
    title: {
        color: Colors.cardBackground,
        fontSize: 20,
        fontWeight: '600',
    },
});