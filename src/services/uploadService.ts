import { storage, firestore, getCurrentUser } from './firebase'
import type { UploadItem } from '../store/slices/uploadsSlice'

export const uploadFileToStorage = async (uri: string, fileName: string): Promise<string> => {
  const user = getCurrentUser()
  if (!user) throw new Error('User not authenticated')

  const timestamp = Date.now()
  const path = `prescriptions/${user.uid}/${timestamp}_${fileName}`
  const reference = storage().ref(path)

  await reference.putFile(uri)
  const downloadURL = await reference.getDownloadURL()
  return downloadURL
}

export const savePrescriptionToFirestore = async (item: Omit<UploadItem, 'id'>): Promise<string> => {
  const user = getCurrentUser()
  if (!user) throw new Error('User not authenticated')

  const docRef = await firestore()
    .collection('prescriptions')
    .doc(user.uid)
    .collection('items')
    .add({
      ...item,
      createdAt: firestore.FieldValue.serverTimestamp(),
    })

  return docRef.id
}

export const fetchPrescriptions = async (): Promise<UploadItem[]> => {
  const user = getCurrentUser()
  if (!user) return []

  const snapshot = await firestore()
    .collection('prescriptions')
    .doc(user.uid)
    .collection('items')
    .orderBy('createdAt', 'desc')
    .get()

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toMillis() || Date.now(),
  })) as UploadItem[]
}

export const deletePrescription = async (id: string): Promise<void> => {
  const user = getCurrentUser()
  if (!user) throw new Error('User not authenticated')

  await firestore()
    .collection('prescriptions')
    .doc(user.uid)
    .collection('items')
    .doc(id)
    .delete()
}
