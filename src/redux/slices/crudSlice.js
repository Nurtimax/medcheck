import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
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
   async (params, { rejectWithValue }) => {
      try {
         const res = await axiosInstance.get('application/get', {
            params,
         })
         console.log(res)
         return res.data
      } catch (error) {
         return rejectWithValue
      }
   }
)

export const fetchCrudPost = createAsyncThunk(
   'crudSlice/fetchCrudPost',
   async (params, { rejectWithValue }) => {
      try {
         const response = await axios.put(axiosInstance('application'), {
            // `http://ec2-3-69-31-51.eu-central-1.compute.amazonaws.com/api/application/save`,
            params,
         })
         console.log(response)
         const data = response.data
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const crudSlice = createSlice({
   name: 'crud',
   initialState,
   extraReducers: {
      [fetchCrudGet.fulfilled]: (state, action) => {
         console.log(action, 'albina')
         state.data.items = action.payload.data
      },
      [fetchCrudGet.pending]: (state) => {
         state.erorMessage = false
         state.isLoading = true
      },
      [fetchCrudGet.rejected]: (state, action) => {
         state.errorMessage = action.payload
         state.isLoading = false
         // console.log(action.payload)
      },
   },
})
export const crudSliceAction = fetchCrudGet.action
export default crudSlice
