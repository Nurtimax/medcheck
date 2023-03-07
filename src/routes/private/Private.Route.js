import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ element, roles }) {
   const { user } = useSelector((state) => state.auth.role)

   const isUserHasRole = user && roles.includes(user)

   if (!isUserHasRole) return <Navigate to="/" replace />
   return element
}
