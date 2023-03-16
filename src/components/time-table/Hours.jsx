import { Box, styled } from '@mui/material'
import React from 'react'

const Hours = (props) => {
   return <StyledHours>{props[props.columnId]}</StyledHours>
}

export default Hours

const StyledHours = styled(Box)(() => ({}))
