import { styled } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router'
import Footer from './footer/Footer'
import Header from './header/Header'

const MainLayout = ({ children }) => {
   return (
      <>
         <Header />
         <Main>
            <Container>
               {children} <Outlet />
            </Container>
         </Main>
         <Footer />
      </>
   )
}

export default MainLayout

const Main = styled('main')(() => ({}))

const Container = styled('main')(() => ({
   paddingTop: '250px',
}))
