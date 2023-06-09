import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   applications: [],
   error: null,
   isLoading: false,
   isSend: false,
}

export const postApplicationsRequest = createAsyncThunk(
   'applicationSlice/postApplicationsRequest',
   async (userData, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('application/', userData)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

// export const putApplicationsRequest = createAsyncThunk(
//    'applicationSlice/postApplicationsRequest',
//    async (userData, { rejectWithValue }) => {
//       try {
//          const { data } = await axiosInstance.put('application/', userData)
//          return data
//       } catch (error) {
//          return rejectWithValue(error)
//       }
//    }
// )

export const getApplicationsRequest = createAsyncThunk(
   'applicationSlice/getApplicationsRequest',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('application/')
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const removeApplicationRequest = createAsyncThunk(
   'applicationSlice/removeApplicationRequest',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.delete('application/', id)
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
            state.isLoading = false
         })
         .addCase(getApplicationsRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getApplicationsRequest.rejected, (state, action) => {
            state.error = action.error.message
         })

         // ////////////////// post user requests
         .addCase(postApplicationsRequest.fulfilled, (state, action) => {
            state.applications = action.payload
            state.isLoading = false
            state.isSend = true
         })
         .addCase(postApplicationsRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(postApplicationsRequest.rejected, (state, action) => {
            state.error = action.error.message
         })
   },
})

export const { applicationSliceAction, removeUsers } = applicationSlice.actions

export default applicationSlice
