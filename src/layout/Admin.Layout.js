import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AdminHeader from '././header/AdminHeader'

const AdminLayout = () => {
   return (
      <>
         <AdminHeader />
         <main>
            <Container>
               <Outlet />
            </Container>
         </main>
      </>
   )
}

export default AdminLayout

const Container = styled('div')(() => ({
   paddingTop: '100px ',
}))
