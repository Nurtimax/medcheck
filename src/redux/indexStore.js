import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from './slices/crudSlice'
import authSlice from './slices/authSlice'
import profileSlice from './slices/profileSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
      profCrudUser: profileSlice.reducer,
   },
})

export default store
