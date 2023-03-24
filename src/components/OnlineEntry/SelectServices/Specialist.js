import React, { useState } from 'react'
import Modal from '../../UI/Modal'

const Specialist = () => {
   const [open, setOpen] = useState(true)
   const closeModal = () => {
      setOpen(false)
   }

   return (
      <Modal open={open} closeModal={closeModal}>
         hello specialist
      </Modal>
   )
}

export default Specialist
