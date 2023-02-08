import React from 'react'
import { styled } from '@mui/material'
import { Container } from '@mui/material'

function ContainerEntry({ children }) {
   return <MainContainer>{children}</MainContainer>
}

export default ContainerEntry

const MainContainer = styled(Container)(() => ({
   background: '#FFFFFF',
   boxShadow: '0 0 20px black',
   borderRadius: '6px',
}))