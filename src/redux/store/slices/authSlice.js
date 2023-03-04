import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: {
      role: null,
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE2Nzc5MTQ3NzIsImV4cCI6MTY3NzkxNjIxMn0.UhlGjgRrEgvYaGz2PdMdxW8-D2VhMMqenrqT_k5hFJQ',
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
