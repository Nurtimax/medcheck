import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomLink from '../../components/UI/Custom.Link'

const OnlineEntry = () => {
   return (
      <StyledOnlineEntry>
         <Container>
            <Typography variant="h5">Онлайн-запись</Typography>
            <Record>
               <AdminLinkStyle to="/admin/online_entry/online">
                  Онлайн-запись
               </AdminLinkStyle>
               <AdminLinkStyle to="/admin/online_entry/schedule">
                  Расписание
               </AdminLinkStyle>
            </Record>
            <Box className="content">
               <Outlet />
            </Box>
         </Container>
      </StyledOnlineEntry>
   )
}

export default OnlineEntry

const StyledOnlineEntry = styled(Box)(() => ({
   '& .content': {
      padding: '2rem 0',
   },
}))

const Container = styled('main')(() => ({
   padding: '30px 0',
   maxWidth: '85%',
   margin: '0 auto',
}))

const AdminLinkStyle = styled(CustomLink)(() => ({
   color: ' #707070',
   cursor: 'pointer',
   textDecoration: 'none',

   '&:hover': {
      color: '#222222',
   },
}))

const Record = styled('div')(() => ({
   marginTop: '30px',
   height: '50px',
   display: 'flex',
   gap: '76px',
}))
