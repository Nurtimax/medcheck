import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   data: null,
   loading: false,
   errorMessage: null,
}

export const emailSendler = createAsyncThunk(
   'forgotPassword/emailSendler',

   async (userEmail, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('auth/forgot', {
            ...userEmail,
         })

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const forgotPasswordSlice = createSlice({
   name: 'forgotPassword',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      // //////////////////////////// forgot password

      builder.addCase(emailSendler.fulfilled, (state, action) => {
         state.data = action.payload
         state.loading = false
      })
      builder.addCase(emailSendler.pending, (state) => {
         state.loading = true
      })
      builder.addCase(emailSendler.rejected, (state, action) => {
         state.errorMessage = action.error.message
         state.loading = false
      })
   },
})

export default forgotPasswordSlice
