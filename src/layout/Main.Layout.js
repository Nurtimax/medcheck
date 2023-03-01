import { styled } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import Footer from './footer/Footer'
import Header from './header/Header'

const MainLayout = () => {
   return (
      <>
         <Header />
         <main>
            <Container>
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
