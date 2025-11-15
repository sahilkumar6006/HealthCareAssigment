import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';


const HeaderAssignment = () => {
    return (
        <View style={styles.Container}>
            <Image source={require('../assets/png/HamBurger.png')} style={{ height: 26, resizeMode: 'contain', width: 26 }} />
            <Text style={styles.text}>Stylinx</Text>
            <Image source={require('../assets/png/Bell_pin.png')} style={{ height: 26, resizeMode: 'contain', width: 26 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: '700',
    }
})

export default HeaderAssignment