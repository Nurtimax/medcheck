import { styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import AdminHeader from '././header/AdminHeader'

const AdminLayout = ({ children }) => {
   return (
      <>
         <AdminHeader />
         <Main>
            <Container>
               {children} <Outlet />
            </Container>
         </Main>
      </>
   )
}

export default AdminLayout

const Main = styled('main')(() => ({}))

const Container = styled('div')(() => ({
   paddingTop: '100px ',
}))
