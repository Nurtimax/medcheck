import { styled } from '@mui/material'
import React, { useState } from 'react'
import Modal from '../../UI/Modal'
import FreeDoctor from '../../../assets/icons/stuffFreeDoctor.svg'

const Specialist = () => {
   const [open, setOpen] = useState(true)
   const closeModal = () => {
      setOpen(false)
   }

   return (
      <Modal open={open} closeModal={closeModal}>
         <ChoiceServicesStyled>
            <img src={FreeDoctor} alt="FreeDoctor" />
            <p>Выбрать услуги</p>
         </ChoiceServicesStyled>
      </Modal>
   )
}

const ChoiceServicesStyled = styled('div')(() => ({
   height: '72px',
   display: 'flex',
   alignItems: 'center',
   background: 'white',
   margin: '6px',
   borderRadius: '16px',
   padding: '0 10px',
   cursor: 'pointer',
   gap: '10px',
}))

export default Specialist
