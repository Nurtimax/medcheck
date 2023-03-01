import { configureStore } from '@reduxjs/toolkit'
import profileUserSlice from './store/slices/profileUserSlice'
import authSlice from './store/slices/authSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      profCrudUser: profileUserSlice.reducer,
   },
})

export default store
