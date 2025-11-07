import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'
import { HeaderTexts } from '../../../fixtures/HomScreen'
import { Header } from '../../../components/Header'
import { Label } from '../../../components/Label'

export const HomScreen = () => {
    return (
        <View style={styles.container}>
            <Header title={'hello'} />
            <View style={styles.rowContainer}>
                {
                    HeaderTexts.map((v, i) => {
                        return (
                            <View key={i} style={styles.itemWrapper}>
                                <View style={styles.itemContent}>
                                    <Label preset={'Header'}>{v.name}</Label>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <Label preset={'Header'}>UPLOAD PRESCRIPTION</Label>

        </View>
    )
}

