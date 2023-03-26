import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ Component, role = [], fallbackPath = '/admin' }) => {
   const { isAuth, roleName } = useSelector((state) => state.auth)

   const checkRole = useMemo(() => {
      return role.join().toLowerCase().split().includes(roleName?.toLowerCase())
   }, [roleName, role])

   if (!isAuth) {
      return <Navigate to="/" replace />
   }

   if (isAuth && !checkRole) {
      return <Navigate to={fallbackPath} replace />
   }

   return Component
}

export default PrivateRoute
