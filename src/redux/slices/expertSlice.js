import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'

const initialState = {
   data: [],
   experts: [],
   oneExpert: [],
   allExpert: [],
   putExpert: [],
   error: null,
   isLoading: false,
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
   async (body, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.post('expert/', body)
         dispatch(getAllExpert())
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
   async ({ id, values }, { rejectWithValue, dispatch }) => {
      try {
         const { data } = await axiosInstance.put(
            `expert/update/${id}`,

            { ...values }
         )
         dispatch(getAllExpert())
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
export const switchExpertRequest = createAsyncThunk(
   'уxpert/switchExpertRequest',
   async (id, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.put(`expert/?id=${id}`)
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
            state.isLoading = false
         })
         .addCase(getAllExpert.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getAllExpert.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         .addCase(getExpertRequest.fulfilled, (state, action) => {
            state.experts = action.payload
            state.isLoading = false
         })
         .addCase(getExpertRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getExpertRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         .addCase(editExpertRequest.fulfilled, (state, action) => {
            state.oneExpert = [action.payload]
            state.isLoading = false
         })
         .addCase(editExpertRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(editExpertRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         .addCase(putExpertRequest.fulfilled, (state, action) => {
            state.putExpert = action.payload
            state.isLoading = false
         })
         .addCase(putExpertRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(putExpertRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         })

         .addCase(postExpertRequest.fulfilled, (state, action) => {
            state.data = action.payload
            state.isLoading = false
         })
         .addCase(postExpertRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(postExpertRequest.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'error'
         }),
})
export const expertSliceAction = expertSlice.actions
export default expertSlice
