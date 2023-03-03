import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'
const initialState = {
   applications: [],
   isLoading: false,
   errorMessage: null,
   status: null,
   error: null,
}
export const getApplicationsRequest = createAsyncThunk(
   'applicationSlice/getApplicationsRequest',
   async () => {
      try {
         const response = await axiosInstance('/application/get')
         return response.data
      } catch (error) {
         return error
      }
   }
)

export const removeApplicationRequest = createAsyncThunk(
   'applicationSlice/removeApplicationRequest',
   async (data) => {
      try {
         const response = await axiosInstance.delete(
            `/applicationSlice/deleteSelected`,
            {
               data: data,
            }
         )

         return response.data
      } catch (error) {
         return error
      }
   }
)

const applicationSlice = createSlice({
   name: 'applications',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getApplicationsRequest.fulfilled, (state, action) => {
         state.applications = action.payload
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
export const applicationSliceAction = applicationSlice.actions
export default applicationSlice
