import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import HeaderAssignment from '../../../components/HeaderAssignment'
import { Tags } from '../../../fixtures/TagsFilter'
import { IMAGES } from '../../../constants/image'
import { PharamText } from '../../../fixtures/GetPharama'

const AssingmentHomeScreen = () => {
    const selectedTag = Tags[0];

    return (
        <View style={styles.container}>
            <HeaderAssignment />

            <View style={styles.rowContainer}>
                {Tags.map((item) => (
                    <View key={item.id} style={styles.tagItem}>
                        <View style={styles.tagCircle} />
                        <Image
                            source={item.icon}
                            style={styles.tagIcon}
                        />
                        <Text style={styles.tagText}>{item.name}</Text>
                    </View>
                ))}
            </View>
            <View style={{ marginTop: 100 }}>
                <Image
                    source={IMAGES.BackgroundImage}
                    style={styles.backgroundImage}
                    resizeMode="contain"
                />
            </View>

            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35 }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#FFFFFF' }}>Feature Products</Text>
                    <Text style={{ fontSize: 20, fontWeight: '700', color: '#FFFFFF' }}>Show all</Text>

                </View>
            </View>

            <FlatList
                data={PharamText}
                horizontal
                renderItem={(item) => {
                    return (
                        <View style={{ marginEnd: 20 }}>
                            <Image source={item.item.image} style={{ width: 126, height: 172, marginTop: 20, borderRadius: 8 }} />
                            <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500', marginTop: 10 }}>{item.item.name}</Text>
                            <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '700', marginTop: 10 }}>{item.item.price}</Text>
                        </View>
                    )
                }}

            />


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        backgroundColor: '#2A2F37',
        paddingTop: 63,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    tagScroll: {
        marginTop: 40,
        height: 30,
    },
    tagItem: {
        margin: 20,
        alignItems: 'center',
    },
    tagCircle: {
        height: 36,
        width: 36,
        backgroundColor: '#23262F',
        borderRadius: 18,
    },
    tagIcon: {
        height: 20,
        width: 20,
        position: 'absolute',
        top: 8,
        left: 10,
        resizeMode: 'contain',
    },
    tagText: {
        color: '#FFFFFF',
        marginTop: 20,
        fontSize: 10,
    },
    backgroundImage: {
        width: 312,
        height: 168,
        marginTop: -100,
    },
    ProductContainer: {
        height: 300,

    }
});

export default AssingmentHomeScreen
