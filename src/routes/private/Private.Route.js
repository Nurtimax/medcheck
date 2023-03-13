import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ element, roles }) {
   const { admin, user } = useSelector((state) => state.auth.role)

   const isAdminHasRole = admin && roles.includes(admin)
   const isUserHasRole = user && roles.includes(user)

   if (!isAdminHasRole) return <Navigate to="/" replace />
   if (!isUserHasRole) return <Navigate to="/admin" replace />
   return element
}
