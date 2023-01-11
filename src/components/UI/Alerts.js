import { Alert, Snackbar, styled, Typography } from '@mui/material'

function Alerts({
   open,
   onClose,
   hideDuration,
   errorMessage,
   vertical = 'top',
   horizontal = 'right',
   title,
   ...props
}) {
   return (
      <Snackbar
         vertical="top"
         horizontal="right"
         anchorOrigin={{ vertical, horizontal }}
         autoHideDuration={hideDuration}
         {...props}
         open={open}
         onClose={onClose}
         key={vertical + horizontal}
      >
         <StyledAlert
            severity={errorMessage ? 'error' : 'success'}
            icon={false}
         >
            <Typography>{errorMessage}</Typography>
            <Typography>{title}</Typography>
         </StyledAlert>
      </Snackbar>
   )
}
const StyledAlert = styled(Alert)(() => ({
   width: '387px',
   height: '90px',
   color: '#4D4E51',
   display: 'flex',
   alignItems: 'center',
   fontWeight: '400',
   fontSize: '14px',
}))

export default Alerts
