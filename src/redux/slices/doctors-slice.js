import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const getDoctorsExperts = createAsyncThunk(
   'doctors/getDoctorsExperts',
   async (params) => {
      try {
         const response = await axiosInstance.get(`expert/getAllAndSearch`, {
            params,
         })

         const result = await response.data

         return result
      } catch (error) {
         return error
      }
   }
)
const getDoctorById = createAsyncThunk(
   'doctors/getDoctorById',
   async (params) => {
      try {
         const response = await axiosInstance.get(`expert/${params}`)

         const result = await response.data

         return result
      } catch (error) {
         return error
      }
   }
)

const doctorsExperts = createSlice({
   name: 'doctors',
   initialState: {
      data: [],
      dataById: {},
   },
   reducers: {},
   extraReducers: (builder) => {
      builder

         .addCase(getDoctorsExperts.fulfilled, (state, action) => {
            state.data = action.payload
         })

         .addCase(getDoctorById.fulfilled, (state, action) => {
            state.dataById = action.payload
         })
   },
})

const ActionDoctors = doctorsExperts.reducer
export { ActionDoctors, doctorsExperts, getDoctorsExperts, getDoctorById }
