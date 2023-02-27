import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from './slices/crudSlice'
import authSlice from './store/slices/authSlice'

const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      application: applicationSlice.reducer,
   },
})

export default store
