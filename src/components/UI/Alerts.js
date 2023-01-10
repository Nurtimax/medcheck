import { Alert, Snackbar, styled } from '@mui/material'

function Alerts({
   open,
   onClose,
   hideDuration,
   errorMessage,
   title,
   ...props
}) {
   const vertical = 'top'

   const horizontal = 'right'

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
         <StyledAlert icon={false}>
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
      color: '#F91515',
   },

   '& p': {
      color: 'green',
   },
}))

export default Alerts
