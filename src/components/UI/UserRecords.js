import { styled } from '@mui/material'
import React from 'react'

import { useState } from 'react'

import Modal from './Modal'

import user from '../../assets/icons/users.svg'
import phone from '../../assets/icons/phone.svg'
import next from '../../assets/icons/next.svg'

const UserRecords = () => {
   const [open, setOpen] = useState(true)

   const closeModal = () => {
      setOpen(false)
   }

   return (
      <Modal closeModal={closeModal} open={open}>
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
      </Modal>
   )
}

const Request = styled('p')(() => ({
   fontSize: '36px',
   textAlign: 'center',
   fontWeight: '500',
   margin: '25px',
   color: '#222222',
   fontFamily: 'Manrope',
}))

const LeaveNumber = styled('p')(() => ({
   margin: '0 auto',
   textAlign: 'center',
   width: '72%',
   fontSize: '16px',
   fontFamily: 'Manrope',
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
      fontFamily: 'Manrope',
   },
}))

const StyledUserName = styled('div')(() => ({
   width: '190px',
   display: 'flex',

   justifyContent: 'space-around',
   backgroundColor: '#FFFFFF',
   border: '1px solid #048741',
   borderRadius: '2px',
   padding: '10px',

   '& input': {
      width: '86%',
      outline: 'none',
      border: 'none',

      '&::placeholder': {
         color: '#959595',
         fontSize: '16px',
         fontWeight: '400',
         fontFamily: 'Manrope',
      },
   },

   '& img': {
      marginBottom: '3px',
      cursor: 'pointer',
   },
}))

const StyledUserPhoneNumber = styled('div')(() => ({
   width: '190px',
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

      '&::placeholder': {
         color: '#959595',
         fontSize: '16px',
         fontWeight: '400',
         fontFamily: 'Manrope',
      },
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
   justifyContent: 'center',
   gap: '16px',
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   borderRadius: '24px',
   color: '#ffffff',
   margin: '0 auto',
   marginTop: '30px',
   cursor: 'pointer',
   fontFamily: 'Manrope',

   '& div': {
      display: 'flex',
      width: '25px',
      height: '25px',
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
