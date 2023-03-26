import { Box, styled, Typography } from '@mui/material'

const Hours = (props) => {
   return (
      <StyledHours>
         <Typography variant="subtitle1">{props?.startTime}</Typography>
         <Typography variant="subtitle1">{props?.finishTime}</Typography>
      </StyledHours>
   )
}

export default Hours

const StyledHours = styled(Box)(() => ({
   display: 'flex',
   flexWrap: 'wrap',
}))
