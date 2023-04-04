import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

export const getAllScheduleThunk = createAsyncThunk(
   'getAllScheduleThunk/',
   async () => {
      try {
         const response = await axiosInstance.get('schedules/')
         console.log(response)
         return response.data
      } catch (error) {
         return error
      }
   }
)

const initialState = {
   data: {},
}

const scheduleSlice = createSlice({
   name: 'schedule',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(getAllScheduleThunk.fulfilled, (state, action) => {
         state.data = action.payload
      })
   },
})

export const actionScheduleSlice = scheduleSlice.actions
export default scheduleSlice
