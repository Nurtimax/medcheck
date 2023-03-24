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
         return rejectWithValue(error)
      }
   }
)

const signInWithGooglePopup = () => {
   const provider = new GoogleAuthProvider()
   return signInWithPopup(auth, provider)
}

export const signInWithGoogle = createAsyncThunk(
   'auth/authWithGoogle',
   async (_, { dispatch, rejectWithValue }) => {
      try {
         const result = await signInWithGooglePopup()

         const response = await axiosInstance.post(
            `auth/auth/google?tokenFront=${result.user.accessToken}`
         )

         const userPhoto = result.user.photoURL
         localStorage.setItem('USER_PHOTO', userPhoto)
         const { email, token, roleName } = response.data
         const userData = { email: token, roleName, token: email }
         localStorage.setItem(JWT_TOKEN, JSON.stringify(email))
         dispatch(postSignUp(userData))
         return userData
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

const initialState = {
   roleName: null,
   data: null,
   isAuth: false,
   isError: null,
   userToken: null,
   isLoading: false,
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
      removeAdmin(state) {
         localStorage.removeItem('MED_CHECK_JWT_TOKEN')
         state.data = null
         state.isAuth = false
         state.userToken = null
         state.roleName = null
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
         state.isLoading = false
         if (action.payload.token) {
            state.isAuth = true
         }
      })
      builder.addCase(postSignIn.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postSignIn.rejected, (state, action) => {
         state.isError = action.error.message
      })

      // ///////////////////////////////////////// REGISTER

      builder.addCase(postSignUp.fulfilled, (state, action) => {
         state.data = action.payload
         state.isAuth = true
         state.roleName = action.payload.roleName
         state.isLoading = false
      })
      builder.addCase(postSignUp.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(postSignUp.rejected, (state, action) => {
         state.isError = action.error.message
      })

      // ///////////////////////////////////////// auth with google

      builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
         state.data = action.payload
         state.isAuth = true
         state.roleName = action.payload.roleName
         state.isLoading = false
      })
      builder.addCase(signInWithGoogle.pending, (state) => {
         state.isLoading = true
      })
      builder.addCase(signInWithGoogle.rejected, (state, action) => {
         state.isError = action.error.message
      })
   },
})

export const { removeUser, setUser, autoLoginByLocalStorage, removeAdmin } =
   authSlice.actions

export default authSlice
