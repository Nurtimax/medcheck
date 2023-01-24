import React from 'react'

import Box from '@mui/material/Box'

import { Modal as Modalka } from '@mui/material'

import { styled } from '@mui/material'

import close from '../../assets/icons/close.svg'

const Modal = ({ children, open, closeModal }) => {
   return (
      <div>
         <Modalka open={open}>
            <Container>
               {children}
               <OnClose onClick={closeModal}>
                  <Closed src={close} alt="close" />
               </OnClose>
            </Container>
         </Modalka>
      </div>
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
   padding: '0 0 40px 0',
   outline: 'none',
   fontFamily: '"Manrope" , sans-serif',
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
