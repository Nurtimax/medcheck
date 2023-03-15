import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ element, roles }) {
   const { admin } = useSelector((state) => state.auth.role)

   const isAdminHasRole = admin && roles.includes(admin)

   if (!isAdminHasRole) return <Navigate to="/" replace />
   return element
}
