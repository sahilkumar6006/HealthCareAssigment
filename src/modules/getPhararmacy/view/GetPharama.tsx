import { View, Text, StyleSheet, FlatList, Pressable, ImageSourcePropType, Alert, ActivityIndicator, Image } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../../../components/ScreenWrapper'
import { Header } from '../../../components/Header'
import { Label } from '../../../components/Label'
import { PharamText } from '../../../fixtures/GetPharama'
import PharamCard from '../../../components/PharamCard'
import Button from '../../../components/Button'
import { useAppDispatch } from '../../../store/hooks'
import { addUpload } from '../../../store/slices/uploadsSlice'
import { IMAGES } from '../../../constants/image'
import { uploadToCloudinary } from '../../../utils/cloudinary'
import { pick } from '@react-native-documents/picker'
const GetPharama = () => {
    const dispatch = useAppDispatch()
    const [uploading, setUploading] = useState(false)

    const handleFileUpload = async () => {
        try {
        const [pickResult] = await pick()
      } catch (err: unknown) {
      }
    }

    const handleLinkUpload = () => {
        Alert.prompt(
            'Upload Link',
            'Enter prescription URL (e.g., Google Drive, Dropbox, direct image link)',
            async (url: string) => {
                if (!url || !url.startsWith('http')) {
                    Alert.alert('Error', 'Invalid URL format. Must start with http(s).')
                    return
                }

                try {
                    setUploading(true)

                    const uploadResult = await uploadToCloudinary(url)

                    if (uploadResult) {
                        const downloadURL = uploadResult.url
                        const newUpload = {
                            id: Date.now().toString(),
                            type: 'link',
                            name: 'Prescription Link',
                            url: downloadURL,
                            createdAt: Date.now(),
                            mime: undefined,
                            size: undefined,
                        }

                        dispatch(addUpload(newUpload))
                        Alert.alert('Success', 'Link processed and uploaded to Cloudinary!')
                    } else {
                        throw new Error('Cloudinary link upload failed with no URL.')
                    }

                } catch (error: any) {
                    Alert.alert('Error', error.message || 'Failed to process link.')
                } finally {
                    setUploading(false)
                }
            },
            'plain-text'
        )
    }

    return (
        <ScreenWrapper >
            <Header title={'Mohalli'} />
            <Label preset={"header"} style={{ marginTop: 45 }}>Pharmacy Nearby</Label>
            <View style={{ height: 250 }}>
                <FlatList
                    data={PharamText}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 20, height: 180 }}
                    keyExtractor={(item: { id: number }) => item.id.toString()}
                    renderItem={({ item }: { item: { id: number; name: string; image: ImageSourcePropType; distance: string; Rating: number; Reviews: number } }) => {
                        return <PharamCard item={item} />
                    }}
                />
            </View>
            <Label preset={'largeHeader'} >Upload Prescription</Label>

            <Label preset={'labelPreset'} style={{ marginTop: 16 }}>We will show the pharmacy that fits as per your prescription.</Label>

            <View style={{
                marginTop: 16,
                borderWidth: 1,
                borderColor: '#E0E0E0',
                borderRadius: 12,
                paddingVertical: 24,
                paddingHorizontal: 20,
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
                    {/* Link Upload Button - FIX APPLIED HERE */}
                    <Pressable
                        style={{ flex: 1, alignItems: 'center' }}
                        onPress={handleLinkUpload}
                        disabled={uploading}
                    >
                        {uploading ? (
                            <ActivityIndicator size="small" color="#000" />
                        ) : (
                            <Image source={IMAGES.FileIcon} style={{ width: 74, height: 74 }} />
                        )}
                        <Label preset={'small'} style={{ marginTop: 8 }}>Upload Link</Label>
                    </Pressable>

                    <View style={{ width: 1, height: 56, backgroundColor: '#E0E0E0' }} />

                    {/* File Upload Button (Logic is correct) */}
                    <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={handleFileUpload} disabled={uploading}>
                        {uploading ? (
                            <ActivityIndicator size="small" color="#000" />
                        ) : (
                            <Image source={IMAGES.UploadIcon} style={{ width: 74, height: 74 }} />
                        )}
                        <Label preset={'small'} style={{ marginTop: 8 }}>Upload File</Label>
                    </Pressable>
                </View>
            </View>
            <Button title={'Continue'} onPress={() => { /* Navigate to pharmacy list */ }} preset='preset2' style={{ marginTop: 16, width: '99%' }} />
        </ScreenWrapper>
    )
}

export default GetPharama