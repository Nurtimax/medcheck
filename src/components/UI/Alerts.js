import { Alert, Snackbar, styled } from '@mui/material'

function Alerts({
   open,
   vertical,
   horizontal,
   onClose,
   defaultValue,
   hideDuration,
   errorMessage,
   title,
   ...props
}) {
   return (
      <Snackbar
         autoHideDuration={hideDuration}
         {...props}
         open={open}
         anchorOrigin={{ vertical, horizontal }}
         onClose={onClose}
         key={vertical + horizontal}
      >
         <StyledAlert icon={false}>
            <div>{defaultValue}</div>
            <b>{errorMessage}</b>
            <p>{title}</p>
         </StyledAlert>
      </Snackbar>
   )
}
const StyledAlert = styled(Alert)(() => ({
   background: '#F6FBFF',
   width: '387px',
   height: '90px',
   color: '#4D4E51',
   display: 'flex',
   alignItems: 'center',
   fontWeight: '400',
   fontSize: '14px',

   '& b': {
      color: 'red',
   },

   '& p': {
      color: 'green',
   },
}))

export default Alerts
