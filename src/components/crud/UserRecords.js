import { styled } from '@mui/material'
import React, { useState } from 'react'

import Modal from '../UI/Modal'

import user from '../../assets/icons/users.svg'
import phone from '../../assets/icons/phone.svg'
import next from '../../assets/icons/next.svg'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { postApplicationsRequest } from '../../redux/slices/crudSlice'

const UserRecords = () => {
   const [open, setOpen] = useState(true)

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const closeModal = () => {
      setOpen(navigate('/'))
   }

   const formik = useFormik({
      initialValues: {
         firstName: '',
         phoneNumber: '',
      },

      onSubmit: (data) => {
         dispatch(postApplicationsRequest(data))
         resetForm()
      },
   })

   const { handleChange, handleSubmit, values, resetForm } = formik

   return (
      <Modal open={open} closeModal={closeModal}>
         <form onSubmit={handleSubmit}>
            <Request>Оставьте заявку</Request>
            <LeaveNumber>
               Оставьте свой номер и наши специалисты свяжутся с Вами в
               ближайшее время
            </LeaveNumber>

            <UserInfo>
               <div>
                  <p>Как к Вам обратиться?</p>
                  <StyledUserName>
                     <img src={user} alt="user" />
                     <input
                        name="firstName"
                        type="text"
                        placeholder="Введите имя"
                        value={values.firstName}
                        onChange={handleChange}
                     />
                  </StyledUserName>
               </div>

               <div>
                  <p>Номер мобильного телефона</p>
                  <StyledUserPhoneNumber>
                     <img src={phone} alt="phonenumber" />
                     <input
                        name="phoneNumber"
                        placeholder="+996 (___) __-__-__"
                        value={values.phoneNumber}
                        onChange={handleChange}
                     />
                  </StyledUserPhoneNumber>
               </div>
            </UserInfo>

            <SendRequest type="submit" variant="text">
               <p>ОТПРАВИТЬ ЗАЯВКУ</p>

               <div>
                  <img src={next} alt="next" />
               </div>
            </SendRequest>
         </form>
      </Modal>
   )
}

const Request = styled('p')(() => ({
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
   fontSize: '17px',
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
      },
   },

   '& img': {
      marginBottom: '3px',
      cursor: 'pointer',
   },
}))

const SendRequest = styled(Button)(() => ({
   width: '240px',
   height: '51px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '20px',
   margin: '0 auto',
   marginTop: '30px',
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   borderRadius: '24px',
   color: '#FFFFFF',

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
