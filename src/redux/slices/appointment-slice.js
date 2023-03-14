import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   data: [],
   status: null,
   error: null,
}
export const fetchUsers = createAsyncThunk(
   'appointment/fetchUsers',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/onlineEntry/myAppointments')
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

export const appoinmentActions = appointmentSlice.actions
export default appointmentSlice
