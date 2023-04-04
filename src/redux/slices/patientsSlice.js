import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   allPatients: [],
   error: null,
   isLoading: false,
}

export const getAllPatients = createAsyncThunk(
   'allPatients/getAllPatients',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('user/users')
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const removePatientRequest = createAsyncThunk(
   'removePatient/removePatientRequest',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.delete(`user/${id}`)
         dispatch(getAllPatients())
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const patientSlice = createSlice({
   name: 'experts',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
      builder

         .addCase(getAllPatients.fulfilled, (state, action) => {
            state.allPatients = action.payload
            state.isLoading = false
         })
         .addCase(getAllPatients.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAllPatients.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         }),
})

export const patientSliceAction = patientSlice.actions

export default patientSlice
