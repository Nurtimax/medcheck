import { Snackbar, styled } from '@mui/material'

import { Alert as Alerts } from '@mui/material'

function Alert({
   open,
   onClose,
   hideDuration,
   variant,
   vertical = 'top',
   horizontal = 'right',
   title,
   ...props
}) {
   return (
      <Snackbar
         vertical
         horizontal
         anchorOrigin={{ vertical, horizontal }}
         autoHideDuration={hideDuration}
         {...props}
         open={open}
         onClose={onClose}
         key={vertical + horizontal}
      >
         <StyledAlert
            style={{
               background: variant ? '#FFF9F8' : '#F6FBFF',
               height: title ? '54px' : '73px',
            }}
            icon={false}
         >
            <p style={{ background: variant ? '#F91515' : '#048741' }}></p>
            <div>{variant}</div>
            <div>{title}</div>
         </StyledAlert>
      </Snackbar>
   )
}

const StyledAlert = styled(Alerts)(() => ({
   width: '387px',

   color: '#4D4E51',

   display: 'flex',

   alignItems: 'center',

   '& p': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '10px',
      height: '100%',

      marginLeft: '10px',
      margin: '0',
   },

   '& div': {
      color: '#494949',
      marginLeft: '15px',
   },
}))

export default Alert
