import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

export const fetchUsers = createAsyncThunk(
   'appointmentSlice/getAppointments',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('onlineEntry/myAppointments')
         console.log(response)
         return response.data
      } catch (error) {
         if (rejectWithValue) {
            return error
         }
         return error
      }
   }
)

export const fetchUsersId = createAsyncThunk(
   'appointmentSlice/getIdAppointments',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('api/onlineEntry')
         console.log(response)
         return response.data
      } catch (error) {
         if (rejectWithValue) {
            return error
         }
         return error
      }
   }
)
const initialState = {
   data: [],
   applications: [],
   status: null,
   error: null,
}
const appointmentSlice = createSlice({
   name: 'appointment',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
         state.applications = action.payload
      })
      builder.addCase(fetchUsers.pending, (state) => {
         state.errorMessage = false
         state.isLoading = true
      })
      builder.addCase(fetchUsers.rejected, (state, action) => {
         state.errorMessage = action.payload
         state.isLoading = false
      })
   },
})

export const appointmentActions = appointmentSlice.actions
export default appointmentSlice
