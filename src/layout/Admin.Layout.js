import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AdminHeader from '././header/AdminHeader'
import ProtectedRoute from '../routes/private/Private.Route'
import { useSelector } from 'react-redux'

const AdminLayout = () => {
   const { admin } = useSelector((state) => state.auth.role)
   return (
      <ProtectedRoute roles={admin}>
         <AdminHeader />
         <main>
            <Container>
               <Outlet />
            </Container>
         </main>
      </ProtectedRoute>
   )
}

export default AdminLayout

const Container = styled('div')(() => ({
   paddingTop: '100px ',
}))
