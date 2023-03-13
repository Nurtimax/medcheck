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
         <Main>
            <Container>
               <Outlet />
            </Container>
         </Main>
      </ProtectedRoute>
   )
}

export default AdminLayout

const Main = styled('main')(() => ({}))

const Container = styled('div')(() => ({
   paddingTop: '100px ',
}))
