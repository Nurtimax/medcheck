import { useEffect } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoLoginData } from './redux/slices/authSlice'
import { Navigate } from 'react-router-dom'
import AdminLayout from './layout/Admin.Layout'
import AppRoutes from './routes/App.Routes'
import { JWT_TOKEN } from './utils/constants/data'

function App() {
   const { role } = useSelector((state) => state.auth)

   const dispatch = useDispatch()

   const autoLogin = useCallback(() => {
      const authUser = JSON.parse(localStorage.getItem(JWT_TOKEN))

      if (authUser?.token) {
         dispatch(autoLoginData(authUser))
      }
   }, [dispatch])

   useEffect(() => {
      autoLogin()
   }, [])

   if (role === 'user') return <Navigate to="/" />
   if (role === 'admin') return <AdminLayout />

   return (
      <div>
         <AppRoutes />
      </div>
   )
}

export default App
