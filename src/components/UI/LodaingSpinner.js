import { styled } from '@mui/material'
import React from 'react'

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const LoadingSpinner = () => {
   return (
      <Container>
         <ClimbingBoxLoader color="#0CBB6B" speedMultiplier={2} />
      </Container>
   )
}

export default LoadingSpinner

const Container = styled('div')(() => ({
   color: 'grey.500',
   width: '100%',
   height: '100%',
   background: 'rgba(0,0,0,0.3SS)',
   position: 'absolute',
   top: '0',
   left: '0',
   zIndex: '50',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
