import { configureStore } from '@reduxjs/toolkit'
import crudSlice from './slices/crudSlice'
export const store = configureStore({
   reducer: {
      crudSlice: crudSlice.reducer,
   },
})
