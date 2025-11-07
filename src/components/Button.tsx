import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Label } from './Label'

const Button = (
    {
        title,
        onPress,
    }: {
        title: string,
        onPress: () => void,
    }
) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Label>{title}</Label>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Button