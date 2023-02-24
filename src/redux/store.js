import { configureStore } from '@reduxjs/toolkit'
import crudSlice from './slices/crudSlice'
const store = configureStore({
   reducer: {
      crudSlice: crudSlice.reducer,
   },
})
export default store
