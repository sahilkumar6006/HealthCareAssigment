import { View, Text, Button } from 'react-native'
import React from 'react'
import { styles } from './style'
import { HeaderTexts } from '../../../fixtures/HomScreen'
import { Header } from '../../../components/Header'
import { Label } from '../../../components/Label'
import { Colors } from '../../../constants/theme'
import { ServiceHighlightCard } from './ServiceHilight'
import { IMAGES } from '../../../constants/image'
import { useAuth } from '../../../auth/AuthContext'

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
            <Label preset={'header'} style={{ marginTop: 20 }} >UPLOAD PRESCRIPTION</Label>
            <Label style={{ marginTop: 10 }}>Upload a Prescription and Tell Us What  you Need. We do the Rest. !</Label>

            <View style={{ marginTop: 20 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Label>Flat 25% OFF ON MEDICINES</Label>
                <Button title={'ORDER NOW'} onPress={() => { }} />
            </View>

            <ServiceHighlightCard
                title="Get the Best Medical Service"
                description="Rem illum facere quo corporis Quia in saepe itaque ut quos pariatur."
                imageSource={IMAGES.doctor}
            />

        </View>
    )
}

