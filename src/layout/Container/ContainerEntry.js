import React from 'react'
import { styled } from '@mui/material'
import { Container, Box } from '@mui/material'

function ContainerEntry({ children }) {
   return (
      <Box>
         <MainContainer>{children}</MainContainer>
      </Box>
   )
}

export default ContainerEntry

const MainContainer = styled(Container)(() => ({
   background: '#FFFFFF',
   boxShadow: '0 0 20px black',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
