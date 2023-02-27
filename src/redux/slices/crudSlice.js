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
   async () => {
      try {
         const response = await axiosInstance('/application/get')
         console.log(response)
         return response.data
      } catch (error) {
         return console.log(error)
      }
   }
)
export const fetchCrudPut = createAsyncThunk(
   'crudSlice/fetchCrudPut',
   async () => {
      try {
         const response = await axiosInstance.put('/application/6')

         return response.data
      } catch (error) {
         return console.log(error)
      }
   }
)

export const fetchCrudDelete = createAsyncThunk(
   'crudSlice/fetchCrudDelete',
   async ({ id }, { dispatch }) => {
      try {
         const response = await axiosInstance.delete(`/application/${id}`)

         dispatch(fetchCrudGet())

         return response.data
      } catch (error) {
         throw new Error()
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
