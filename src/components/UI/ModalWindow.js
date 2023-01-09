import React from 'react'

import Box from '@mui/material/Box'

import Button from '@mui/material/Button'

import Modal from '@mui/material/Modal'

import { styled } from '@mui/material'

import { Close } from '@mui/icons-material'

const ModalWindow = ({ children, openModal, closeModal, open }) => {
   return (
      <div>
         <Button onClick={openModal}>Open modal</Button>
         <Modal open={open}>
            <Container>
               {children}
               <OnClose onClick={closeModal}>
                  <Closed />
               </OnClose>
            </Container>
         </Modal>
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
   width: '40%',
   height: '45%',
}))

const OnClose = styled('div')(() => ({
   position: 'absolute',
   top: '5px',
   right: '5px',
   cursor: 'pointer',
}))

const Closed = styled(Close)(() => ({
   width: '20px',
   color: 'grey',
}))

export default ModalWindow
