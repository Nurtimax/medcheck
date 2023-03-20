import { InputAdornment, styled, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'

import * as Yup from 'yup'

import { ReactComponent as ClosePassword } from '../../assets/icons/signIn.svg'
import { ReactComponent as ViewPassword } from '../../assets/icons/viewPassword.svg'

const ChangePassword = () => {
   const [showPassword, setShowPassword] = useState(false)

   const formik = useFormik({
      initialValues: {
         password: '',
      },
      onSubmit: (values, actions) => {
         localStorage.setItem('user', JSON.stringify({ ...values }))
         actions.resetForm()
      },
      validationSchema: Yup.object().shape({
         password: Yup.string()
            .required('Пожалуйста введите ваш пароль')
            .min(7, 'Пароль должен быть не менее 7 символов!'),
      }),
   })

   const handleClickShowPassword = () => setShowPassword((show) => !show)

   return (
      <Container>
         <h4>Смена пароля</h4>

         <div className="passwordsContainer">
            <p className="passwords">Старый пароль</p>
            <StyledPasswordInput
               placeholder={formik.errors.password || 'Введите ваш пароль'}
               error={!!formik.errors.password}
               name="password"
               type={showPassword ? 'text' : 'password'}
               className="inputs"
               endAdornment={
                  <InputAdornment
                     onClick={handleClickShowPassword}
                     position="end"
                  >
                     {showPassword ? <ClosePassword /> : <ViewPassword />}
                  </InputAdornment>
               }
            />
         </div>
         <div className="passwordsContainer">
            <Typography className="passwords">Новый пароль</Typography>
            <StyledPasswordInput
               className="inputs"
               placeholder={formik.errors.password || 'Введите новый пароль'}
               error={!!formik.errors.password}
               name="password"
               type={showPassword ? 'text' : 'password'}
               endAdornment={
                  <InputAdornment
                     onClick={handleClickShowPassword}
                     position="end"
                  >
                     {showPassword ? <ClosePassword /> : <ViewPassword />}
                  </InputAdornment>
               }
            />
         </div>
         <div className="passwordsContainer">
            <Typography className="passwords">
               Подтвердить новый пароль
            </Typography>
            <StyledPasswordInput
               className="inputs"
               placeholder={formik.errors.password || 'Подтвердите пароль'}
               error={!!formik.errors.password}
               name="password"
               type={showPassword ? 'text' : 'password'}
               endAdornment={
                  <InputAdornment
                     onClick={handleClickShowPassword}
                     position="end"
                  >
                     {showPassword ? <ClosePassword /> : <ViewPassword />}
                  </InputAdornment>
               }
            />

            <div className="buttonsContainer">
               <Button className="backButton">назад</Button>
               <Button className="confirmButton">подтвердить</Button>
            </div>
         </div>
      </Container>
   )
}

const Container = styled('div')(() => ({
   marginBottom: '100px',
   '& .passwords': {
      color: '#464444',
      fontSize: '14px',
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
}))

const StyledPasswordInput = styled(Input)(() => ({
   '& ::-ms-reveal': {
      display: 'none !important',
   },
   '& input[type=password]::-ms-reveal, input[type=password]::-ms-clear': {
      display: 'none',
   },
}))

export default ChangePassword
