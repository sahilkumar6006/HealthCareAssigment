import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { Label } from './Label';
import { Colors } from '../constants/theme';
import LoaderSvg from '../assets/svg/Loader';
import Hambuger from '../assets/svg/Hambuger';

export const Header = ({ title, loading }: { title: string; loading?: boolean }) => {
    return (
        <View style={styles.header}>
            <Hambuger />
            <Label text={title} style={styles.title}/>
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
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        position: 'absolute',
        left: 15,
    },
    title: {
        color: Colors.black,
        fontSize: 20,
        marginStart: 30,
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