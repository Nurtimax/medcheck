import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

export const fetchProfile = createAsyncThunk(
   'profile/fetchProfile',
   async (profileData) => {
      const { data } = await axiosInstance.get('user', { ...profileData })
      return data
   }
)

export const updateProfile = createAsyncThunk(
   'profile/updateProfile',
   async (profileData, userId) => {
      const { data } = await axiosInstance.put(`user/${userId}`, profileData)
      return data
   }
)

const initialState = {
   profile: null,
   status: '',
   error: null,
}

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      deleteProfile: (state) => {
         state.profile = null
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchProfile.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(fetchProfile.fulfilled, (state, action) => {
            state.status = 'success'
            state.profile = action.payload
         })
         .addCase(fetchProfile.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
         .addCase(updateProfile.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(updateProfile.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.profile = action.payload
         })
         .addCase(updateProfile.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export const { deleteProfile } = profileSlice.actions

export default profileSlice
