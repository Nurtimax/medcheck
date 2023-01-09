import { Alert, Snackbar, styled } from '@mui/material'

function Alerts({
   open,
   vertical,
   horizontal,
   alertClose,

   closedTamer,
   title,

   ...props
}) {
   return (
      <div>
         <Snackbar
            autoHideDuration={closedTamer}
            {...props}
            open={open}
            anchorOrigin={{ vertical, horizontal }}
            onClose={alertClose}
            key={vertical + horizontal}
         >
            <StyledAlert icon={false}>
               <div>{title}</div>
            </StyledAlert>
         </Snackbar>
      </div>
   )
}
export default Alerts
const StyledAlert = styled(Alert)(() => ({
   background: '#F6FBFF',
   width: '387px',
   height: '73px',

   '& div': {
      color: '#4D4E51',
      fontWeight: '400',
      fontSize: '14px',
   },
}))
