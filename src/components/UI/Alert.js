import { Snackbar, styled } from '@mui/material'

import { Alert as Alerts } from '@mui/material'
import { useEffect } from 'react'

function Alert({
   open,
   onClose,
   autoHideDuration,
   variant,
   vertical = 'top',
   horizontal = 'right',
   title,
   ...props
}) {
   useEffect(() => {
      const timer = setTimeout(() => {
         onClose()
      }, 3000)

      return () => clearTimeout(timer)
   }, [onClose])
   return (
      <Snackbar
         vertical
         horizontal
         anchorOrigin={{ vertical, horizontal }}
         autoHideDuration={autoHideDuration}
         {...props}
         open={open}
         onClose={onClose}
         key={vertical + horizontal}
      >
         <StyledAlert severity={title ? 'success' : 'error'} icon={false}>
            <MessageTyps className={title ? 'title' : 'variant'}></MessageTyps>
            <Variant>{variant}</Variant>
            <Title>{title}</Title>
         </StyledAlert>
      </Snackbar>
   )
}

const StyledAlert = styled(Alerts)(() => ({
   width: '387px',

   color: '#4D4E51',

   display: 'flex',

   alignItems: 'center',

   '& .title': {
      background: 'green',
   },

   '& .variant': {
      background: 'red',
   },
}))

const MessageTyps = styled('p')(() => ({
   position: 'absolute',
   top: '0',
   left: '0',
   width: '10px',
   height: '100%',
   margin: '0',
}))

const Title = styled('div')(() => ({
   color: '#494949',
   marginLeft: '15px',
}))
const Variant = styled('div')(() => ({
   color: '#494949',
   marginLeft: '15px',
}))

export default Alert
