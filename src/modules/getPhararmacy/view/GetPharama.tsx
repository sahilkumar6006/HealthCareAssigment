import { View, Text, StyleSheet, FlatList, Pressable, ImageSourcePropType, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import ScreenWrapper from '../../../components/ScreenWrapper'
import { Header } from '../../../components/Header'
import { Label } from '../../../components/Label'
import { PharamText } from '../../../fixtures/GetPharama'
import PharamCard from '../../../components/PharamCard'
import Button from '../../../components/Button'
import UploadIcon from '../../../assets/svg/Upload'
import DownloadIcon from '../../../assets/svg/Download'
import { useAppDispatch } from '../../../store/hooks'
import { addUpload } from '../../../store/slices/uploadsSlice'
import { uploadFileToStorage, savePrescriptionToFirestore } from '../../../services/uploadService'

const GetPharama = () => {
    const dispatch = useAppDispatch()
    const [uploading, setUploading] = useState(false)

    const handleFileUpload = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images, DocumentPicker.types.pdf],
            })
            const file = res[0]
            if (!file.uri || !file.name) return

            setUploading(true)
            const downloadURL = await uploadFileToStorage(file.uri, file.name)
            const id = await savePrescriptionToFirestore({
                type: 'file',
                name: file.name,
                url: downloadURL,
                mime: file.type || undefined,
                size: file.size || undefined,
                createdAt: Date.now(),
            })
            dispatch(addUpload({
                id,
                type: 'file',
                name: file.name,
                url: downloadURL,
                mime: file.type || undefined,
                size: file.size || undefined,
                createdAt: Date.now(),
            }))
            Alert.alert('Success', 'Prescription uploaded!')
        } catch (error: any) {
            if (!DocumentPicker.isCancel(error)) {
                Alert.alert('Error', error.message || 'Upload failed')
            }
        } finally {
            setUploading(false)
        }
    }

    const handleLinkUpload = () => {
        Alert.prompt(
            'Upload Link',
            'Enter prescription URL',
            async (url: string) => {
                if (!url || !url.startsWith('http')) {
                    Alert.alert('Error', 'Invalid URL')
                    return
                }
                try {
                    setUploading(true)
                    const id = await savePrescriptionToFirestore({
                        type: 'link',
                        name: 'Prescription Link',
                        url,
                        createdAt: Date.now(),
                    })
                    dispatch(addUpload({
                        id,
                        type: 'link',
                        name: 'Prescription Link',
                        url,
                        createdAt: Date.now(),
                    }))
                    Alert.alert('Success', 'Link saved!')
                } catch (error: any) {
                    Alert.alert('Error', error.message || 'Failed to save link')
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

            <Label preset={'largeHeader'} >Upload Prescription</Label>

            <Label preset={'labelPreset'}>We will show the pharmacy that fits as per your prescription.</Label>

            <View style={{
                marginTop: 16,
                borderWidth: 1,
                borderColor: '#E0E0E0',
                borderRadius: 12,
                paddingVertical: 24,
                paddingHorizontal: 20,
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={handleLinkUpload} disabled={uploading}>
                        <UploadIcon width={36} height={36} />
                        <Label preset={'small'} style={{ marginTop: 8 }}>Upload Link</Label>
                    </Pressable>
                    <View style={{ width: 1, height: 56, backgroundColor: '#E0E0E0' }} />
                    <Pressable style={{ flex: 1, alignItems: 'center' }} onPress={handleFileUpload} disabled={uploading}>
                        {uploading ? (
                            <ActivityIndicator size="small" color="#000" />
                        ) : (
                            <DownloadIcon width={36} height={36} />
                        )}
                        <Label preset={'small'} style={{ marginTop: 8 }}>Upload File</Label>
                    </Pressable>
                </View>
            </View>
            <Button title={'Continue'} onPress={() => { }} preset='preset2' />
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({

})


export default GetPharama