import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: {
      role: null,
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
