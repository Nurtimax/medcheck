import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   applications: [],
   error: null,
   status: null,
}

export const postApplicationsRequest = createAsyncThunk(
   'applicationSlice/postApplicationsRequest',
   async (userData, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('application', userData)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getApplicationsRequest = createAsyncThunk(
   'applicationSlice/getApplicationsRequest',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('application/')
         return response.data
      } catch (error) {
         if (rejectWithValue) {
            return error
         }
         return error
      }
   }
)

export const checkedApplicationRequest = createAsyncThunk(
   'application/switchApplicationRequest',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.put(`application/?id=${id}`)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const applicationSlice = createSlice({
   name: 'applications',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder

         // ///////////////// get user requests

         .addCase(getApplicationsRequest.fulfilled, (state, action) => {
            state.applications = action.payload
         })
         .addCase(getApplicationsRequest.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(getApplicationsRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         // ////////////////// post user requests

         .addCase(postApplicationsRequest.fulfilled, (state, action) => {
            state.applications = action.payload
         })
         .addCase(postApplicationsRequest.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(postApplicationsRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })
   },
})
export const applicationSliceAction = applicationSlice.actions
export default applicationSlice
