import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UploadItem = {
  id: string
  type: 'file' | 'link'
  name: string
  url: string
  mime?: string
  size?: number
  createdAt: number
}

export type UploadsState = {
  items: UploadItem[]
  loading: boolean
  error: string | null
}

const initialState: UploadsState = {
  items: [],
  loading: false,
  error: null,
}

const uploadsSlice = createSlice({
  name: 'uploads',
  initialState,
  reducers: {
    setUploads(state: UploadsState, action: PayloadAction<UploadItem[]>) {
      state.items = action.payload
    },
    addUpload(state: UploadsState, action: PayloadAction<UploadItem>) {
      state.items.unshift(action.payload)
    },
    removeUpload(state: UploadsState, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    setLoading(state: UploadsState, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    setError(state: UploadsState, action: PayloadAction<string | null>) {
      state.error = action.payload
    },
  },
})

export const { setUploads, addUpload, removeUpload, setLoading, setError } = uploadsSlice.actions
export default uploadsSlice.reducer
