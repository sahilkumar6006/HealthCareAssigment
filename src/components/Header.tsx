import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Label } from './Label';
import { Colors } from '../constants/theme';
import LoaderSvg from '../assets/svg/Loader';


export const Header = ({ title, loading }: { title: string; loading?: boolean }) => {
    return (
        <View style={styles.header}>
            <Label text={title} />
            {loading ? (
                <View style={styles.loaderOverlay}>
                    <LoaderSvg />
                </View>
            ) : null}
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
    loaderOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
    },
});