import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'
const initialState = {
   data: {
      applications: [],
   },
   isLoading: false,
   errorMessage: null,
   status: null,
   error: null,
}
export const getApplicationsRequest = createAsyncThunk(
   'applicationSlice/getApplicationsRequest',
   async ({ rejectWithValue }) => {
      try {
         const response = await axiosInstance('/application/get')
         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)
export const updateApplicationRequest = createAsyncThunk(
   'applicationSlice/updateApplicationRequest',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.put(`/application/${id}`)
         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)

export const removeApplicationRequest = createAsyncThunk(
   'applicationSlice/removeApplicationRequest',
   async ({ id }, { dispatch, rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(`/application/${id}`)

         dispatch(getApplicationsRequest())

         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)

const applicationSlice = createSlice({
   name: 'applications',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getApplicationsRequest.fulfilled, (state, action) => {
         state.data.items = action.payload
      })
      builder.addCase(getApplicationsRequest.pending, (state) => {
         state.errorMessage = false
         state.isLoading = true
      })
      builder.addCase(getApplicationsRequest.rejected, (state, action) => {
         state.errorMessage = action.payload
         state.isLoading = false
      })
   },
})
export const crudSliceAction = applicationSlice.actions
export default applicationSlice
