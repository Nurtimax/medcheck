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
   async (profileData) => {
      const { data } = await axiosInstance.put(`user/${profileData.id}`, {
         ...profileData,
      })
      return data
   }
)

export const putApplicationsRequest = createAsyncThunk(
   'changePasswordSlice/putApplicationsRequest',
   async (params) => {
      try {
         const { data } = await axiosInstance.put(
            `user/password/${params.id}`,
            {
               ...params,
            }
         )
         return data
      } catch (error) {
         return error
      }
   }
)

const initialState = {
   profile: [],
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

         // //////////// get users

         .addCase(fetchProfile.fulfilled, (state, action) => {
            state.status = 'success'
            state.profile = [action.payload]
         })
         .addCase(fetchProfile.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(fetchProfile.rejected, (state, action) => {
            state.error = action.error.message
         })

         // ////////// put user data

         .addCase(updateProfile.fulfilled, (state, action) => {
            state.profile = [action.payload]
            state.status = 'success'
         })
         .addCase(updateProfile.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(updateProfile.rejected, (state, action) => {
            state.error = action.error.message
         })

         // /////////// change password

         .addCase(putApplicationsRequest.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
         })
         .addCase(putApplicationsRequest.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(putApplicationsRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'filed'
         })
   },
})

export const { deleteProfile } = profileSlice.actions

export default profileSlice
