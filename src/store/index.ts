import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import uploadsReducer from './slices/uploadsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    uploads: uploadsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['auth/setUser'],
        ignoredPaths: ['auth.user'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
