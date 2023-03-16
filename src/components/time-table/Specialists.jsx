import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const Specialists = ({ name, type }) => {
   return (
      <StyledSpecialists>
         <img src="" alt="" />
         <Typography>{name}</Typography>
         <Typography>{type}</Typography>
      </StyledSpecialists>
   )
}

export default Specialists

const StyledSpecialists = styled(Box)(() => ({
   padding: '30px',
}))
