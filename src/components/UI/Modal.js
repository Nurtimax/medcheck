import React from 'react'

import Box from '@mui/material/Box'

import { Modal as Dialog } from '@mui/material'

import { styled } from '@mui/material'

import close from '../../assets/icons/close.svg'

const Modal = ({ children, open, closeModal, marginTop, ...props }) => {
   return (
      <Dialog open={open}>
         <Container marginTop={marginTop} {...props}>
            {children}
            <OnClose onClick={closeModal}>
               <Closed src={close} alt="close" />
            </OnClose>
         </Container>
      </Dialog>
   )
}

const Container = styled(Box)(() => ({
   backgroundColor: '#EBF2FC',
   borderRadius: '10px',
   position: 'absolute',
   top: '40%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: '530px',
   height: 'auto',
   padding: '0 0 40px 0',
   outline: 'none',
   fontFamily: '"Manrope" , sans-serif',
   marginTop: `${(props) => (props.marginTop ? props.marginTop : '0')}`,
}))

const OnClose = styled('div')(() => ({
   position: 'absolute',
   top: '15px',
   right: '15px',
   cursor: 'pointer',
}))

const Closed = styled('img')(() => ({
   width: '15px',
}))

export default Modal
