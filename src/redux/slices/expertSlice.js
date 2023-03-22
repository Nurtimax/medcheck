import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   data: [],
   experts: [],
   oneExpert: [],
   allExpert: [],
   putExpert: [],
   error: null,
   status: '',
}

export const getExpertRequest = createAsyncThunk(
   'expertSlice/getExpertRequest',
   async (values, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            'onlineEntry/services',
            values
         )
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const postExpertRequest = createAsyncThunk(
   'addExpertSlice/postExpertRequest',
   async (body, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.post('expert/', body)
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const editExpertRequest = createAsyncThunk(
   'editExpert/editExpertRequest',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`expert/${id}`, id)

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const putExpertRequest = createAsyncThunk(
   'putExpert/putExpertRequest',
   async (params, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.put(
            `expert/update/${params.id}`,
            {
               ...params,
            }
         )
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const removeExpertRequest = createAsyncThunk(
   'removeExpert/removeExpertRequest',
   async (id, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.delete(`expert/${id}`)
         dispatch(getAllExpert())
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAllExpert = createAsyncThunk(
   'allExpert/getAllExpert',
   async (params, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            'expert/getAllAndSearch',
            params
         )
         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const expertSlice = createSlice({
   name: 'experts',
   initialState,
   reducers: {},
   extraReducers: (builder) =>
      builder

         .addCase(getAllExpert.fulfilled, (state, action) => {
            state.allExpert = action.payload
         })
         .addCase(getAllExpert.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(getAllExpert.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         .addCase(getExpertRequest.fulfilled, (state, action) => {
            state.experts = action.payload
         })
         .addCase(getExpertRequest.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(getExpertRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         .addCase(editExpertRequest.fulfilled, (state, action) => {
            state.oneExpert = [action.payload]
         })
         .addCase(editExpertRequest.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(editExpertRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         .addCase(putExpertRequest.fulfilled, (state, action) => {
            state.putExpert = action.payload
         })
         .addCase(putExpertRequest.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(putExpertRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         .addCase(postExpertRequest.fulfilled, (state, action) => {
            state.data = action.payload
         })
         .addCase(postExpertRequest.pending, (state) => {
            state.status = 'loading'
         })
         .addCase(postExpertRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         }),
})
export const expertSliceAction = expertSlice.actions
export default expertSlice
