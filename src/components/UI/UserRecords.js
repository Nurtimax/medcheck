import { styled } from '@mui/material'
import React from 'react'

import { useState } from 'react'

import ModalWindow from './ModalWindow'

import user from '../../assets/icons/users.svg'
import phone from '../../assets/icons/phone.svg'
import next from '../../assets/icons/next.svg'

const UserRecords = () => {
   const [open, setOpen] = useState(true)

   const closeModal = () => {
      setOpen(false)
   }

   return (
      <ModalWindow closeModal={closeModal} open={open}>
         <Request>Оставьте заявку</Request>
         <LeaveNumber>
            Оставьте свой номер и наши специалисты свяжутся с Вами в ближайшее
            время
         </LeaveNumber>

         <UserInfo>
            <div>
               <p>Как к Вам обратиться?</p>
               <StyledUserName>
                  <img src={user} alt="user" />
                  <input type="name" placeholder="Введите имя" />
               </StyledUserName>
            </div>

            <div>
               <p>Номер мобильного телефона</p>
               <StyledUserPhoneNumber>
                  <img src={phone} alt="phonenumber" />
                  <input type="number" placeholder="+996 (___) __-__-__" />
               </StyledUserPhoneNumber>
            </div>
         </UserInfo>

         <SendRequest>
            <p>ОТПРАВИТЬ ЗАЯВКУ</p>

            <div>
               <img src={next} alt="next" />
            </div>
         </SendRequest>
      </ModalWindow>
   )
}

const Request = styled('p')(() => ({
   font: 'Manrope',
   fontSize: '36px',
   textAlign: 'center',
   fontWeight: '500',
   margin: '25px',
   color: '#222222',
}))

const LeaveNumber = styled('p')(() => ({
   margin: '0 auto',
   textAlign: 'center',
   width: '80%',
   fontSize: '16px',
}))

const UserInfo = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '13px',
   marginTop: '30px',

   '& p': {
      fontSize: '12px',
      margin: '3px',
      color: '#4D4E51',
   },
}))

const StyledUserName = styled('div')(() => ({
   width: '200px',
   display: 'flex',

   justifyContent: 'space-around',
   backgroundColor: '#FFFFFF',
   border: '1px solid #048741',
   borderRadius: '2px',
   padding: '10px',

   '& input': {
      width: '87%',
      outline: 'none',
      border: 'none',
   },

   '& img': {
      marginBottom: '3px',
      cursor: 'pointer',
   },
}))

const StyledUserPhoneNumber = styled('div')(() => ({
   width: '200px',
   display: 'flex',

   justifyContent: 'space-around',
   backgroundColor: '#FFFFFF',
   border: '1px solid #048741',
   borderRadius: '2px',
   padding: '10px',

   '& input': {
      width: '87%',
      outline: 'none',
      border: 'none',
   },

   '& img': {
      marginBottom: '3px',
      cursor: 'pointer',
   },
}))

const SendRequest = styled('div')(() => ({
   width: '250px',

   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   borderRadius: '24px',
   color: '#ffffff',
   margin: '0 auto',
   marginTop: '30px',
   cursor: 'pointer',

   '& div': {
      display: 'flex',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#13AF5B',
      textAlign: 'center',
   },

   '& img': {
      width: '15px',
      margin: '0 auto',
   },
}))

export default UserRecords
