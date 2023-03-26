import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const Specialists = ({ expertName, expertPosition, expertImage }) => {
   return (
      <StyledSpecialists>
         <img src={expertImage} width={20} height={20} alt="" />
         <Typography>{expertName}</Typography>
         <Typography>{expertPosition}</Typography>
      </StyledSpecialists>
   )
}

export default Specialists

const StyledSpecialists = styled(Box)(() => ({
   padding: '30px',
}))
