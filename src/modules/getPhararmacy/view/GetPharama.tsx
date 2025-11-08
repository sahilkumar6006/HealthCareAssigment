import { View, Text, StyleSheet, FlatList, Pressable, ImageSourcePropType, Alert, ActivityIndicator, Image, Animated } from 'react-native'
import React, { use, useEffect, useRef, useState } from 'react'
import ScreenWrapper from '../../../components/ScreenWrapper'
import { Header } from '../../../components/Header'
import { Label } from '../../../components/Label'
import { PharamText } from '../../../fixtures/GetPharama'
import PharamCard from '../../../components/PharamCard'
import Button from '../../../components/Button'
import { useAppDispatch } from '../../../store/hooks'
import type { UploadItem } from '../../../store/slices/uploadsSlice'
import { addUpload } from '../../../store/slices/uploadsSlice'
import { IMAGES } from '../../../constants/image'
import { pick, PredefinedFileTypes } from '@react-native-documents/picker'
import { uploadToCloudinary } from '../../../utils/Cloudinary'

const GetPharama = () => {
    const dispatch = useAppDispatch()
    const [uploading, setUploading] = useState(false)
    const scaleAnimLink = useRef(new Animated.Value(1)).current
    const scaleAnimFile = useRef(new Animated.Value(1)).current


    const handlePressIn = (scaleAnim: Animated.Value) => {
        Animated.timing(scaleAnim, {
            toValue: 0.95,
            duration: 150,
            useNativeDriver: true,
        }).start()
    }

    const handlePressOut = (scaleAnim: Animated.Value, callback?: () => void) => {
        Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 4,
            tension: 40,
            useNativeDriver: true,
        }).start(() => {
            if (callback) callback();
        })
    }

    const handleFileUpload = async () => {
        try {
            const resArray = await pick()

            const file = resArray[0]

            if (!file || !file.uri || !file.name || !file.type) return

            setUploading(true)

            const uploadResult = await uploadToCloudinary(file.uri)

            if (uploadResult) {
                const downloadURL = uploadResult.url

                const newUpload: UploadItem = {
                    id: Date.now().toString(),
                    type: 'file',
                    name: file.name,
                    url: downloadURL,
                    mime: file.type,
                    size: file.size || undefined,
                    createdAt: Date.now(),
                }

                dispatch(addUpload(newUpload))
                Alert.alert('Success', 'Prescription uploaded to Cloudinary!')
            } else {
                throw new Error('Cloudinary upload failed with no URL.')
            }

        } catch (error: any) {
            if (error?.message !== 'User cancelled the pick operation') {
                Alert.alert('Error', error.message || 'File upload failed.')
            } else {
                console.log('User cancelled document picker.')
            }
        } finally {
            setUploading(false)
        }
    }

    const handleLinkUpload = () => {
        Alert.prompt(
            'Upload Link',
            'Enter the url of the image you want to upload',
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
                        const newUpload: UploadItem = {
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
                    <Animated.View
                        style={[
                            {
                                flex: 1,
                                marginTop: -30,
                            },
                            { transform: [{ scale: scaleAnimLink }] }

                        ]}
                    >
                        <Pressable
                            onPressIn={() => handlePressIn(scaleAnimLink)}
                            onPressOut={() => handlePressOut(scaleAnimLink, handleLinkUpload)}
                            disabled={uploading}
                            style={{ flex: 1, alignItems: 'center' }}
                        >
                            {uploading ? (
                                <ActivityIndicator size="small" color="#000" />
                            ) : (
                                <Image source={IMAGES.FileIcon} style={{ width: 74, height: 74 }} />
                            )}
                            <Label preset={'small'} style={{ marginTop: 8 }}>Upload Link</Label>
                        </Pressable>
                    </Animated.View>

                    <View style={{ width: 1, height: 56, backgroundColor: '#E0E0E0' }} />

                    <Animated.View
                        style={[
                            { flex: 1, marginTop: -30, },
                            { transform: [{ scale: scaleAnimFile }] }
                        ]}
                    >
                        <Pressable
                            onPressIn={() => handlePressIn(scaleAnimFile)}
                            onPressOut={() => handlePressOut(scaleAnimFile, handleFileUpload)}
                            disabled={uploading}
                            style={{ flex: 1, alignItems: 'center' }}
                        >
                            {uploading ? (
                                <ActivityIndicator size="small" color="#000" />
                            ) : (
                                <Image source={IMAGES.UploadIcon} style={{ width: 74, height: 74 }} />
                            )}
                            <Label preset={'small'} style={{ marginTop: 8 }}>Upload File</Label>
                        </Pressable>
                    </Animated.View>
                </View>
            </View>
            <Button title={'Continue'} onPress={() => { }} preset='preset2' style={{ marginTop: 16, width: '99%' }} />
        </ScreenWrapper >
    )
}

export default GetPharama