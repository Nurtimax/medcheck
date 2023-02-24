import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ element, roles }) {
   const { role } = useSelector((state) => state.auth.user)

   const isUserHasRole = role && roles.includes(role)

   if (!isUserHasRole) return <Navigate to="/" replace />
   return element
}
