import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/Not.Found'
import { autoLoginByLocalStorage } from '../redux/slices/authSlice'
import { JWT_TOKEN } from '../utils/constants/data'
import MainRoutes from './main-routes/MainRoutes'
import AdminRoutes from './admin-routes/Admin.Routes'

// const LazyLoading = React.lazy(() => import('../components/UI/LodaingSpinner'))

const authUser = JSON.parse(localStorage.getItem(JWT_TOKEN))

const AppRoutes = () => {
   const dispatch = useDispatch()

   useEffect(() => {
      if (authUser?.token) {
         dispatch(autoLoginByLocalStorage(authUser))
      }
   }, [])

   return (
      <>
         <Routes>
            <Route path="/*" element={<MainRoutes />} />

            <Route path="admin/*" element={<AdminRoutes />} />

            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   )
}

export default AppRoutes
