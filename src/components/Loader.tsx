import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoaderSvg from '../assets/svg/Loader'

const Loader = () => {
    return (
        <View style={styles.container}>
            <LoaderSvg />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    }

})
export default Loader