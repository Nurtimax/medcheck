import { configureStore } from '@reduxjs/toolkit'
import applicationSlice from './slices/crudSlice'
import authSlice from './store/slices/authSlice'
import appointmentSlice from './slices/appointment-slice'
const store = configureStore({
   reducer: {
      auth: authSlice.reducer,
      [applicationSlice.name]: applicationSlice.reducer,
      appointment: appointmentSlice,
   },
})

export default store
