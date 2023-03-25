import { Box, styled } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import Breadcrumbs from './breadcrumbs'
import Footer from './footer/Footer'
import Header from './header/Header'

const MainLayout = () => {
   return (
      <>
         <Header />
         <main>
            <Container>
               <Box sx={{ width: '85%', margin: '0 auto' }}>
                  <Breadcrumbs />
               </Box>
               <Outlet />
            </Container>
         </main>
         <Footer />
      </>
   )
}

export default MainLayout

const Container = styled('main')(() => ({
   paddingTop: '250px',
}))
