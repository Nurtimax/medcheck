import { CircularProgress, Stack, styled } from '@mui/material'
import React from 'react'

const LoadingSpinner = () => {
   return (
      <StackStyled spacing={2} direction="row">
         <CircularStyled></CircularStyled>
      </StackStyled>
   )
}

export default LoadingSpinner

const StackStyled = styled(Stack)(() => ({
   color: 'grey.500',
   width: '100vw',
   height: '100vh',
   background: 'rgba(0,0,0,0.3)',
   position: 'absolute',
   top: '0',
   left: '0',
   zIndex: '20',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const CircularStyled = styled(CircularProgress)(() => ({
   position: 'relative',
   zIndex: '16',
   color: 'chartreuse	',
}))
