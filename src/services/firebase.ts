import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

export { auth, firestore, storage }

export const getCurrentUser = () => auth().currentUser

export const signIn = async (email: string, password: string) => {
  return await auth().signInWithEmailAndPassword(email, password)
}

export const signUp = async (email: string, password: string) => {
  return await auth().createUserWithEmailAndPassword(email, password)
}

export const signOut = async () => {
  return await auth().signOut()
}
