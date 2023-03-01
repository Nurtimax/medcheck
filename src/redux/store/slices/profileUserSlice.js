import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axiosInstance from '../../../api/axiosInstance'

const initialState = {
   data: [],
}

export const getUserProfData = createAsyncThunk(
   'profileUserSlice/getUserProfData',

   async ({ rejectWithValue }) => {
      try {
         const response = await axiosInstance('/user')
         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)

export const profileUserSlice = createSlice({
   name: 'profileUserSlice',
   initialState,
   reducers: {},
   extraReducers: (datas) => {
      datas.addCase(getUserProfData.fulfilled, (state, action) => {
         state.data = action.payload
         state.isLoading = true
      })
      datas.addCase(getUserProfData.pending, (state) => {
         state.errorMessage = false
         state.isLoading = true
      })

      datas.addCase(getUserProfData.rejected, (state, action) => {
         state.errorMessage = action.payload
         state.isLoading = false
      })
   },
})

export const profCridSliceAction = getUserProfData.action

export default profileUserSlice
