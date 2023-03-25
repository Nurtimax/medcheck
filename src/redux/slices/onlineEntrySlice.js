import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   services: [],
   isError: null,
   loading: false,
}

export const getAllClinicServices = createAsyncThunk(
   'onlineEntrySlice/getAllClinicServices',
   async (params, { rejectwithValue }) => {
      try {
         const { data } = await axiosInstance.get('onlineEntry/services', {
            ...params,
         })
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
            state.loading = false
         })
   },
})

export default onlineEntrySlice
