import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   data: [],
   experts: [],
   error: null,
   status: '',
}
export const postExpertRequest = createAsyncThunk(
   'addExpertSlice/postExpertRequest',
   async (params) => {
      try {
         const { data } = await axiosInstance.post('expert', params)
         return data
      } catch (error) {
         throw new Error(error)
      }
   }
)
export const getExpertRequest = createAsyncThunk(
   'expertSlice/getExpertRequest',
   async (data, { rejectWithValue }) => {
      try {
         const res = await axiosInstance.get(`onlineEntry/services`)
         const result = res.data
         return result
      } catch (error) {
         if (rejectWithValue) {
            return error
         }
         return error
      }
   }
)
const expertSlice = createSlice({
   name: 'expert',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
      builder
         .addCase(getExpertRequest.fulfilled, (state, action) => {
            state.experts = action.payload
         })
         .addCase(postExpertRequest.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'success'
         })
         .addCase(postExpertRequest.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(postExpertRequest.rejected, (state, action) => {
            ;(state.status = 'failed'), (state.error = action.error.message)
         }),
})
export const expertSliceAction = expertSlice.actions
export default expertSlice
