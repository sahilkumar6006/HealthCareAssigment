import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Label } from './Label'

interface Item {
    id: number,
    name: string,
    image: ImageSourcePropType,
    distance: string,
    Rating: number,
    Reviews: number
}

interface Props {
    item: Item
}

const PharamCard = ({ item }: Props) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={item.image} style={styles.imageCotainer} />
            <View style={{ alignSelf: 'flex-start', marginLeft: 10, marginTop: 10 }}>
                <Label>{item.name}</Label>
                <Label>{item.distance}</Label>
                <Label>⭐{item.Rating}( {item.Reviews} reviews)</Label>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 190,
        margin: 10,
        width: 190,
        elevation: 4,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    imageCotainer: {
        height: 109,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})

export default PharamCard