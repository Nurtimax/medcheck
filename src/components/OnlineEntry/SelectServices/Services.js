import React, { useState } from 'react'

import Modal from '../../UI/Modal'

const Services = ({ clinicServiceName }) => {
   const [open, setOpen] = useState(!null)

   const closeModal = () => {
      setOpen(!open)
   }

   return (
      <Modal open={open} closeModal={closeModal}>
         <p>{clinicServiceName}</p>
      </Modal>
   )
}

export default Services
