import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import { HeaderTexts } from '../../../fixtures/HomScreen'
import { Header } from '../../../components/Header'
import { Label } from '../../../components/Label'
import { Colors } from '../../../constants/theme'
import { ServiceHighlightCard } from './ServiceHilight'
import { IMAGES } from '../../../constants/image'
import { useAuth } from '../../../auth/AuthContext'
import { OfferCard } from '../../../components/OfferCard'
import Button from '../../../components/Button'

export const HomScreen = () => {
    return (
        <View style={styles.container}>
            <Header appIcon />
            <View style={styles.rowContainer}>
                {
                    HeaderTexts.map((v, i) => {
                        console.log(v)
                        return (
                            <View key={i} style={styles.itemWrapper}>
                                <View style={styles.itemContent}>
                                    <Label preset={'Header'}>{v.name}</Label>
                                    <Image source={v.icon} style={{ width: 24, height: 24, marginStart: 10 }} />
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
                <Label style={{ textAlign: 'center', width: 123 }}>Flat 25% OFF ON MEDICINES</Label>
                <Button title={'ORDER NOW'} onPress={() => { }} style={{ marginEnd: 20 }} />
            </View>

            <View style={{ marginTop: 20 }} />

            <ServiceHighlightCard
                title="Get the Best Medical Service"
                description="Rem illum facere quo corporis Quia in saepe itaque ut quos pariatur."
                imageSource={IMAGES.doctor}
            />

            <View style={{ marginTop: 20 }} />

            <OfferCard
                upToText="UPTO"
                offerPercentage="80%"
                offerDescription="On Health Products"
                imageSource={IMAGES.VitaminBC}
                onPressShopNow={() => { }}
                backgroundColor="#F0E6FF"
            />

        </View>
    )
}

