import { combineReducers, configureStore } from '@reduxjs/toolkit'
import applicationSlice from './slices/crudSlice'
import authSlice from './slices/authSlice'

import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import expertSlice from './slices/expertSlice'

import { doctorsExperts } from './slices/doctors-slice'
import profileSlice from './slices/profileSlice'
import appointmentSlice from './slices/appointment-slice'
import patientSlice from './slices/patientsSlice'
import scheduleSlice from './slices/schedule-slice'
import onlineEntrySlice from './slices/onlineEntrySlice'
import forgotPasswordSlice from './slices/forgot-password-slice'

const rootReducer = combineReducers({
   auth: authSlice.reducer,
   applications: applicationSlice.reducer,
   addExpert: expertSlice.reducer,
   patients: patientSlice.reducer,
   online_entry: onlineEntrySlice.reducer,
   profCrudUser: profileSlice.reducer,
   appointment: appointmentSlice.reducer,
   onlineEntry: onlineEntrySlice.reducer,
   doctors: doctorsExperts.reducer,
   forgotPassword: forgotPasswordSlice.reducer,
   [applicationSlice.name]: applicationSlice.reducer,
   schedule: scheduleSlice.reducer,
})

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
})

export const persistor = persistStore(store)

export default store
