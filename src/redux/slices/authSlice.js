import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'
import { JWT_TOKEN } from '../../utils/constants/data'

export const postSignUp = createAsyncThunk(
   'auth/postSignUp',
   async (params, { rejectWithValue }) => {
      const { phoneNumber } = params

      try {
         const response = await axiosInstance.post('auth/register', {
            ...params,
            phoneNumber: `+${phoneNumber}`,
         })
         const result = response.data
         localStorage.setItem(JWT_TOKEN, JSON.stringify(result))
         return result
      } catch (error) {
         if (rejectWithValue) {
            return rejectWithValue(error)
         }
         throw new Error()
      }
   }
)

const initialState = {
   role: {
      user: null,
      admin: null,
   },
   data: null,
   isAuth: false,
   isError: null,
   userToken: null,
}

const authSlice = createSlice({
   name: 'register',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder.addCase(postSignUp.fulfilled, (state, action) => {
         state.data = action.payload
         state.isAuth = true
         state.role = action.payload
      })
      builder.addCase(postSignUp.pending, (state) => {
         state.isAuth = false
      })
      builder.addCase(postSignUp.rejected, (state, action) => {
         state.isError = action.payload
      })
   },
})

export default authSlice
