import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axiosInstance'
import { JWT_TOKEN } from '../../utils/constants/data'

export const postSignUp = createAsyncThunk(
   'auth/postSignUp',
   async (params, { rejectWithValue }) => {
      const { phoneNumber } = params

      try {
         const { data } = await axiosInstance.post('auth/register', {
            ...params,
            phoneNumber: `+${phoneNumber}`,
         })
         localStorage.setItem(JWT_TOKEN, JSON.stringify(data))
         return data
      } catch (error) {
         if (rejectWithValue) {
            return rejectWithValue(error)
         }
         throw new Error(error)
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
   reducers: {
      removeUser(state) {
         localStorage.removeItem('MED_CHECK_JWT_TOKEN')
         state.data = null
         state.isAuth = false
         state.userToken = null
         state.role = null
      },
   },
   extraReducers: (builder) => {
      builder.addCase(postSignUp.fulfilled, (state, action) => {
         state.data = action.payload
         state.isAuth = true
         state.role = action.payload
      })
      builder.addCase(postSignUp.pending, (state) => {
         state.isAuth = true
      })
      builder.addCase(postSignUp.rejected, (state, action) => {
         state.isError = action.payload
      })
   },
})

export const { removeUser } = authSlice.actions

export default authSlice
