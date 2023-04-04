import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

export const fetchUsers = createAsyncThunk(
   'appointmentSlice/getAppointments',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('onlineEntry/myAppointments')
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

   async (id) => {
      try {
         const response = await axiosInstance.get('onlineEntry/', {
            params: {
               id,
            },
         })
         return response.data
      } catch (error) {
         return error
      }
   }
)
export const fetchClearAll = createAsyncThunk(
   'appointmentSlice/deleteAppointments',
   async (_, { dispatch }) => {
      try {
         const response = await axiosInstance.delete('onlineEntry/clear')
         dispatch(fetchUsers())
         return response.data
      } catch (error) {
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
      builder.addCase(fetchUsersId.fulfilled, (state, action) => {
         state.data = action.payload
      })
      builder.addCase(fetchUsersId.pending, (state) => {
         state.errorMessage = false
         state.isLoading = true
      })
      builder.addCase(fetchUsersId.rejected, (state, action) => {
         state.errorMessage = action.payload
         state.isLoading = false
      })
   },
})

export const appointmentActions = appointmentSlice.actions
export default appointmentSlice
