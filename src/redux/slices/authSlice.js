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

export const postSignIn = createAsyncThunk(
   'auth/postSignIn',
   async (params, { rejectWithValue }) => {
      const { email, password } = params

      try {
         const { data } = await axiosInstance.post('auth/login', {
            email,
            password,
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
      setUser(state, action) {
         state.data = action.payload
      },
   },
   extraReducers: (builder) => {
      ///////////////////////////////////////////////////// LOGIN

      builder.addCase(postSignIn.fulfilled, (state, action) => {
         state.data = action.payload
         state.userToken = action.payload.token
         state.role =
            action.payload.roleName === 'ADMIN'
               ? ({ ...state.role.admin } = action.payload.roleName)
               : ({ ...state.role.user } = action.payload.roleName)
         state.isAuth = true
      })
      builder.addCase(postSignIn.pending, (state) => {
         state.isAuth = true
         state.isError = null
      })
      builder.addCase(postSignIn.rejected, (state, action) => {
         state.isError = action.payload
      })

      // ///////////////////////////////////////// REGISTER

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

export const { removeUser, setUser } = authSlice.actions

export default authSlice
