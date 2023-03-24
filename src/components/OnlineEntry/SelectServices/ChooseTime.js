import React, { useState } from 'react'

import Modal from '../../UI/Modal'

const ChooseTime = () => {
   const [open, setOpen] = useState(true)
   const closeModal = () => {
      setOpen(false)
   }

   return (
      <Modal open={open} closeModal={closeModal}>
         hello wtime
      </Modal>
   )
}

export default ChooseTime
