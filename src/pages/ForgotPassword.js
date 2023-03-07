import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/UI/Modal'

const ForgotPassword = () => {
   const [open, setOpen] = useState(false)

   const navigate = useNavigate()

   const handleClose = () => {
      setOpen(navigate())
   }
   return (
      <Modal open={open} closeModal={handleClose}>
         Забыли пароль? gjfaskdjfkasf;akfakl
      </Modal>
   )
}

export default ForgotPassword
