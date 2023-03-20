import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import axiosInstance from '../../api/axiosInstance'
import { auth } from '../../services/firebase'
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

const signInWithGooglePopup = () => {
   const provider = new GoogleAuthProvider()
   return signInWithPopup(auth, provider)
}

export const signInWithGoogle = createAsyncThunk(
   'auth/signInWithGoogle',
   async (_, { dispatch }) => {
      try {
         const result = await signInWithGooglePopup()
         const response = await axiosInstance.post(
            `/auth/auth/google?tokenFront=${result.user.accessToken}`
         )
         const userPhoto = result.user.photoURL
         localStorage.setItem('USER_PHOTO', userPhoto)
         const { email, token, roleName } = response.data
         const userData = { email: token, roleName, token: email }
         localStorage.setItem(JWT_TOKEN, JSON.stringify(email))
         dispatch(postSignUp(userData))
         return userData
      } catch (error) {
         throw new Error()
      }
   }
)

const initialState = {
   roleName: null,
   data: null,
   isAuth: false,
   isError: null,
   userToken: null,
   isGoogleAuth: false,
}

const authSlice = createSlice({
   name: 'register',
   initialState,
   reducers: {
      removeUser(state) {
         localStorage.removeItem('MED_CHECK_JWT_TOKEN')
         localStorage.removeItem('USER_PHOTO')
         state.data = null
         state.isAuth = false
         state.userToken = null
         state.roleName = null
      },
      setUser(state, action) {
         state.data = action.payload
      },
      autoLoginByLocalStorage: (state, action) => {
         state.roleName = action.payload.roleName
         state.userToken = action.payload.token
         state.isAuth = true
      },
      autoLoginData: (state, action) => {
         state.userToken = action.payload.token
      },
   },
   extraReducers: (builder) => {
      ///////////////////////////////////////////////////// LOGIN

      builder.addCase(postSignIn.fulfilled, (state, action) => {
         state.data = action.payload
         state.userToken = action.payload.token
         state.roleName = action.payload.roleName
         if (action.payload.token) {
            state.isAuth = true
         }
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
         state.roleName = action.payload.roleName
      })
      builder.addCase(postSignUp.pending, (state) => {
         state.isAuth = true
      })
      builder.addCase(postSignUp.rejected, (state, action) => {
         state.isError = action.payload
      })

      // ///////////////////////////////////////// auth with google

      builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
         state.data = action.payload
         state.isGoogleAuth = true
         state.roleName = action.payload.roleName
      })
      builder.addCase(signInWithGoogle.pending, (state) => {
         state.isAuth = true
      })
      builder.addCase(signInWithGoogle.rejected, (state, action) => {
         state.isError = action.payload
      })
   },
})

export const { setUser, autoLoginByLocalStorage, autoLoginData } =
   authSlice.actions

export default authSlice
