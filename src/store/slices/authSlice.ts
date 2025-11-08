import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { FirebaseAuthTypes } from '@react-native-firebase/auth'

export type AuthState = {
  user: FirebaseAuthTypes.User | null
  status: 'idle' | 'loading' | 'authenticated'
}

const initialState: AuthState = {
  user: null,
  status: 'idle',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state: AuthState, action: PayloadAction<FirebaseAuthTypes.User | null>) {
      state.user = action.payload
      state.status = action.payload ? 'authenticated' : 'idle'
    },
    setStatus(state: AuthState, action: PayloadAction<AuthState['status']>) {
      state.status = action.payload
    },
  },
})

export const { setUser, setStatus } = authSlice.actions
export default authSlice.reducer
