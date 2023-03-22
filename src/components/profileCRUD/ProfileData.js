import { styled, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../../redux/slices/profileSlice'
import Alert from '../UI/Alert'
import AuthInput from '../UI/AuthInput'

import Button from '../UI/Button'

const ProfileData = ({
   userFirstName,
   userLastName,
   userEmail,
   userPhoneNumber,
   id,
}) => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const { status } = useSelector((state) => state.profCrudUser)
   const [open, setOpen] = useState(false)

   const formik = useFormik({
      initialValues: {
         userFirstName,
         userLastName,
         userEmail,
         userPhoneNumber,
         id,
      },

      onSubmit: (values) => {
         dispatch(updateProfile({ ...values }))
         if (status === 'success') {
            setOpen(true)
         }
      },
   })
   const { handleChange, handleSubmit, values } = formik

   const backHandle = () => {
      navigate('/')
   }
   const closeAlert = () => {
      setOpen(false)
   }

   return (
      <UserData key={id} onSubmit={handleSubmit}>
         {open && (
            <Alert
               open={open}
               onClose={closeAlert}
               title="ваш профиль был успешно изменен."
            />
         )}
         <FirstRow>
            <div>
               <Typography className="personData">Имя</Typography>
               <AuthInput
                  type="text"
                  name="userFirstName"
                  className="inputs"
                  value={values.userFirstName}
                  onChange={handleChange}
               />
            </div>
            <div>
               <Typography className="personData">Фамилия</Typography>
               <AuthInput
                  type="text"
                  name="userLastName"
                  className="inputs"
                  value={values.userLastName}
                  onChange={handleChange}
               />
            </div>
         </FirstRow>
         <SecondRow>
            <div>
               <Typography className="personData">E-mail</Typography>
               <AuthInput
                  name="userEmail"
                  type="email"
                  className="inputs"
                  value={values.userEmail}
                  onChange={handleChange}
               />
            </div>
            <div>
               <Typography className="personData">Телефон</Typography>
               <AuthInput
                  type="text"
                  name="userPhoneNumber"
                  className="inputs"
                  value={values.userPhoneNumber}
                  onChange={handleChange}
               />
               <div className="buttonsContainer">
                  <Button onClick={backHandle} className="backButton">
                     назад
                  </Button>
                  <Button type="submit" className="editButton">
                     Редактировать
                  </Button>
               </div>
            </div>
         </SecondRow>
      </UserData>
   )
}

export default ProfileData

const UserData = styled('form')(() => ({
   '& .personData': {
      color: '#464444',
      fontSize: '14px',
      margin: '3px',
   },

   '& .inputs': {
      width: '490px',
      color: 'black',
   },

   '& .css-bdlmo4-MuiButtonBase-root-MuiButton-root.MuiButton-contained': {
      width: '230px',
   },
   '& .buttonsContainer': {
      display: 'flex',
      gap: '17px',
      marginTop: '30px',
   },
   '& .backButton': {
      width: '230px',
      border: '1px solid #048741',
      color: '#048741',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Manrope" , sans-serif',
   },
   '& .backButton:hover': {
      color: '#FFFFFF',
   },

   '& .editButton': {
      width: '230px',
      border: '1px solid #048741',
      color: '#FFFFFF',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Manrope" , sans-serif',
      background: 'linear-gradient(#0CBB6B , #027B44)',
   },

   '& .editButton:hover': {
      color: '#FFFFFF',
   },
}))

const FirstRow = styled('div')(() => ({
   display: 'flex',
   gap: '38px',
}))
const SecondRow = styled('div')(() => ({
   display: 'flex',
   gap: '38px',
}))
