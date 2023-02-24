import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
   data: {
      items: [],
   },
   status: null,
   error: null,
}
export const fetchCrudGet = createAsyncThunk(
   'crudSlice/fetchCrudGet',
   async (params, { rejectWithValue }) => {
      try {
         const res = await axios.get(
            `http://ec2-3-69-31-51.eu-central-1.compute.amazonaws.com/api/application/get`,
            {
               params,
               headers: {
                  Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJudXJzdWx0YW4xOTk3QGdtYWlsLmNvbSIsImlhdCI6MTY3Njk3NzUwNCwiZXhwIjoxNjc2OTc4OTQ0fQ.7TrgYZUldHrfiOtQd3iXLgqDBLIRxD8ecDpHf8ILkuo`,
               },
            }
         )
         // console.log(res)
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
         const response = await axios.put(
            `http://ec2-3-69-31-51.eu-central-1.compute.amazonaws.com/api/application/save`,
            params
         )
         const data = response.data
         return data
      } catch (error) {
         if (rejectWithValue) {
            return error
         }
         return error
      }
   }
)

const crudSlice = createSlice({
   name: 'crud',
   initialState,
   extraReducers: {
      [fetchCrudGet.fulfilled]: (state, action) => {
         // console.log(action)
         state.data.items = action.payload
      },
   },
})
export default crudSlice
