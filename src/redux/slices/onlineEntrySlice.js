import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   allEntry: [],
   error: null,
   isLoading: false,
}

export const getAllEntry = createAsyncThunk(
   'allEntry/getAllEntry',
   async (params, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            'onlineEntry/Appointments',
            params
         )
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const onlineEntrySlice = createSlice({
   name: 'experts',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
      builder

         .addCase(getAllEntry.fulfilled, (state, action) => {
            state.allEntry = action.payload
            state.isLoading = false
         })
         .addCase(getAllEntry.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAllEntry.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         }),
})
export const onlineEntrySliceAction = onlineEntrySlice.actions
export default onlineEntrySlice
