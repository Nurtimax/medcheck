import { styled, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import Button from '../UI/Button'

import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { putApplicationsRequest } from '../../redux/slices/profileSlice'
import Alert from '../UI/Alert'
import { validateSchemaChangePassword } from '../../utils/constants/validateSchema'
import AuthInput from '../UI/AuthInput'
import { useState } from 'react'

const ChangePassword = () => {
   const dispatch = useDispatch()

   const [open, setOpen] = useState(false)
   const [customError, setCustomError] = useState(null)

   const { id } = useParams()

   const formik = useFormik({
      initialValues: {
         oldPassword: '',
         newPassword: '',
         confirmPassword: '',
         id,
      },
      validationSchema: validateSchemaChangePassword,

      onSubmit: (values) => {
         dispatch(putApplicationsRequest(values)).then((res) => {
            if (
               res?.payload?.message === 'Request failed with status code 400'
            ) {
               return setCustomError('Пароль введен неправильно!')
            } else {
               resetForm()
               setOpen(true)
            }

            return setCustomError()
         })
      },
   })

   const { resetForm, values, handleChange, handleSubmit, touched, errors } =
      formik

   const navigate = useNavigate()

   const backHandle = () => {
      navigate('/user_profile/personal_data')
   }
   const closeAlert = () => {
      setOpen(false)
   }

   return (
      <Container onSubmit={handleSubmit}>
         {open && (
            <Alert
               open={open}
               onClose={closeAlert}
               title={'ваш пароль был успешно изменен.'}
            />
         )}
         <h4>Смена пароля</h4>

         <div className="passwordsContainer">
            <p className="passwords">Старый пароль</p>
            <AuthInput
               placeholder={'Введите ваш пароль'}
               name="oldPassword"
               className="inputs"
               value={values.oldPassword}
               onChange={handleChange}
               errors={errors.oldPassword}
               touched={touched.oldPassword}
            />
         </div>
         {customError && (
            <Typography variant="body2" className="errorMessage">
               {customError}
            </Typography>
         )}
         <div className="passwordsContainer">
            <Typography className="passwords">Новый пароль</Typography>
            <AuthInput
               className="inputs"
               placeholder={'Введите новый пароль'}
               name="newPassword"
               value={values.newPassword}
               onChange={handleChange}
               errors={errors.newPassword}
               touched={touched.newPassword}
            />
         </div>
         <div className="passwordsContainer">
            <Typography className="passwords">
               Подтвердить новый пароль
            </Typography>
            <AuthInput
               className="inputs"
               placeholder={'Подтвердите пароль'}
               name="confirmPassword"
               value={values.confirmPassword}
               onChange={handleChange}
               errors={errors.confirmPassword}
               touched={touched.confirmPassword}
            />

            <div className="buttonsContainer">
               <Button className="backButton" onClick={backHandle}>
                  назад
               </Button>
               <Button type="submit" className="confirmButton">
                  подтвердить
               </Button>
            </div>
         </div>
      </Container>
   )
}

export default ChangePassword

const Container = styled('form')(() => ({
   width: '1440px',
   margin: '0 auto',
   marginTop: '50px',

   '& .passwords': {
      color: '#464444',
      fontSize: '14px',
      margin: '3px',
   },

   '& .css-12751e6-MuiInputBase-root': {
      margin: '0',
   },

   '& .inputs': {
      width: '420px',
   },

   '& .passwordsContainer': {
      marginTop: '20px',
   },

   '& .backButton': {
      width: '203px',
      border: '1px solid #048741',
      color: '#048741',
      borderRadius: '8px',
      fontSize: '14px',
      height: '39px',
   },
   '& .backButton:hover': {
      color: 'white',
   },

   '& .confirmButton': {
      width: '203px',
      border: '1px solid #048741',
      color: '#FFFFFF',
      borderRadius: '8px',
      fontSize: '14px',
      fontFamily: '"Manrope" , sans-serif',
      background: 'linear-gradient(#0CBB6B , #027B44)',
   },

   '& .confirmButton:hover': {
      color: '#FFFFFF',
   },

   '& .buttonsContainer': {
      display: 'flex',
      gap: '18px',
      marginTop: '30px',
   },

   '& .errorMessage': {
      color: 'red',
      fontSize: '12px',
      fontFamily: '"Manrope" , sans-serif',
   },
}))
