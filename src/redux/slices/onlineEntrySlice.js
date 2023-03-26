import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   services: [],
   isError: null,
   loading: false,
}

export const getAllClinicServices = createAsyncThunk(
   'onlineEntrySlice/getAllClinicServices',
   async (_, { rejectwithValue }) => {
      try {
         const { data } = await axiosInstance.get('onlineEntry/services')
         return data
      } catch (error) {
         return rejectwithValue(error)
      }
   }
)

const onlineEntrySlice = createSlice({
   name: 'onlineEntry',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllClinicServices.fulfilled, (state, action) => {
            state.services = action.payload
            state.loading = false
         })
         .addCase(getAllClinicServices.pending, (state) => {
            state.loading = true
         })
         .addCase(getAllClinicServices.rejected, (state, action) => {
            state.isError = action.error.message
         })
   },
})

export default onlineEntrySlice
