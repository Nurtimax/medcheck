import React from 'react'
import { styled } from '@mui/material'

function Container() {
   return (
      <MainContainer>
         <div>Айназик Бакытова</div>
      </MainContainer>
   )
}

export default Container

const MainContainer = styled('div')(() => ({
   background: '#F5F5F5;',
   boxShadow: '0 0 20px black',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   height: '100vh',

   '& div': {
      width: '90%',
      height: '100',
      background: '#FFFFFF',
      color: '#222222',
      borderRadius: '6px',
   },
}))
