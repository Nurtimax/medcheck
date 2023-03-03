import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: {
      role: null,
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2Nzc4NDg3ODcsImV4cCI6MTY3Nzg1MDIyN30.JcOj-sSVTDuNBN2a-RMKvvO_GAEiQ6375a8g-HeyThs',
   },
}
export const authSlice = createSlice({
   name: 'authSlice',
   initialState,
   reducers: {
      logout(state, action) {
         const user = action.payload
         state.user.role = user.role
      },
   },
})

export const { logout } = authSlice.actions
export default authSlice
