import { View, Text, StyleSheet, FlatList, Pressable, Image, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { setUploads, removeUpload, setLoading } from '../../../store/slices/uploadsSlice'
import { fetchPrescriptions, deletePrescription } from '../../../services/uploadService'
import { Label } from '../../../components/Label'
import { Colors } from '../../../constants/theme'
import type { UploadItem } from '../../../store/slices/uploadsSlice'

const Reminders = () => {
  const dispatch = useAppDispatch()
  const { items, loading } = useAppSelector((state) => state.uploads)

  useEffect(() => {
    loadPrescriptions()
  }, [])

  const loadPrescriptions = async () => {
    try {
      dispatch(setLoading(true))
      const data = await fetchPrescriptions()
      dispatch(setUploads(data))
    } catch (error) {
      console.error('Failed to load prescriptions:', error)
    } finally {
      dispatch(setLoading(false))
    }
  }

  const handleDelete = (id: string) => {
    Alert.alert('Delete', 'Remove this prescription?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          try {
            await deletePrescription(id)
            dispatch(removeUpload(id))
          } catch (error) {
            console.error('Failed to delete:', error)
          }
        },
      },
    ])
  }

  const renderItem = ({ item }: { item: UploadItem }) => {
    const isImage = item.mime?.startsWith('image/')
    return (
      <View style={styles.card}>
        {isImage && <Image source={{ uri: item.url }} style={styles.thumbnail} />}
        <View style={styles.info}>
          <Label preset="default" style={styles.name}>{item.name}</Label>
          <Label preset="small" style={styles.date}>
            {new Date(item.createdAt).toLocaleDateString()}
          </Label>
        </View>
        <Pressable onPress={() => handleDelete(item.id)} style={styles.deleteBtn}>
          <Label preset="small" style={{ color: 'red' }}>Delete</Label>
        </Pressable>
      </View>
    )
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <Label>Loading...</Label>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Label preset="largeHeader" style={styles.header}>My Prescriptions</Label>
      {items.length === 0 ? (
        <View style={styles.center}>
          <Label preset="small">No prescriptions uploaded yet.</Label>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    marginBottom: 4,
  },
  date: {
    color: Colors.textSecondary,
  },
  deleteBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Reminders
