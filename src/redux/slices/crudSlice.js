import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'
const initialState = {
   data: {
      items: [],
   },
   isLoading: false,
   errorMessage: null,
   status: null,
   error: null,
}
export const fetchCrudGet = createAsyncThunk(
   'crudSlice/fetchCrudGet',
   async ({ rejectWithValue }) => {
      try {
         const response = await axiosInstance('/application/get')
         return response.data
      } catch (error) {
         return rejectWithValue
      }
   }
)
export const fetchCrudPut = createAsyncThunk(
   'crudSlice/fetchCrudPut',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.put(`/application/${id}`)
         return response.data
      } catch (error) {
         if (rejectWithValue) {
            return error
         }
         return error
      }
   }
)

export const fetchCrudDelete = createAsyncThunk(
   'crudSlice/fetchCrudDelete',
   async ({ id }, { dispatch, rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(`/application/${id}`)

         dispatch(fetchCrudGet())

         return response.data
      } catch (error) {
         if (rejectWithValue) {
            return error
         }
         return error
      }
   }
)

const applicationSlice = createSlice({
   name: 'crudSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(fetchCrudGet.fulfilled, (state, action) => {
         state.data.items = action.payload
      })
      builder.addCase(fetchCrudGet.pending, (state) => {
         state.errorMessage = false
         state.isLoading = true
      })
      builder.addCase(fetchCrudGet.rejected, (state, action) => {
         state.errorMessage = action.payload
         state.isLoading = false
      })
   },
})
export const crudSliceAction = fetchCrudGet.action
export default applicationSlice
