import { styled } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AuthInput from '../components/UI/AuthInput'
import Button from '../components/UI/Button'
import Modal from '../components/UI/Modal'
import { postSignIn } from '../redux/slices/authSlice'
import { validateSchemaSignIn } from '../utils/constants/validateSchema'

const ForgotPassword = () => {
   const [open, setOpen] = useState(true)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const handleClose = () => {
      setOpen(navigate('/sign_in'))
   }
   const formik = useFormik({
      initialValues: {
         email: '',
         link: 'http://localhost:3000/sign_up',
      },

      onSubmit: ({ email, link }) => {
         dispatch(postSignIn(email, link))
      },
      validationSchema: validateSchemaSignIn,
   })

   const { handleChange, handleSubmit, values, errors, touched } = formik

   return (
      <Modal open={open} closeModal={handleClose}>
         <Registration>забыли пароль?</Registration>

         <FormContainer onSubmit={handleSubmit}>
            <p className="linkToUser">
               Вам будет отправлена ссылка для сброса пароля
            </p>

            <AuthInput
               type="email"
               name="email"
               className="input"
               placeholder="Введите ваш Email"
               onChange={handleChange}
               value={values.email}
               errors={errors.email}
               touched={touched.email}
            />

            <Button type="submit" className="button">
               ОТПРАВИТЬ
            </Button>
            <Button type="submit" className="exit">
               ОТМЕНИТЬ
            </Button>
         </FormContainer>
      </Modal>
   )
}

const FormContainer = styled('form')(() => ({
   width: '100%',
   textAlign: 'center',

   '& .input': {
      width: '414px',
      height: '42px',
      color: 'black',
   },

   '& .button': {
      width: '414px',
      height: '47px',
      background: 'linear-gradient(#0CBB6B , #027B44)',
      color: '#FFFFFF',
      margin: '0 auto',
      borderRadius: '8px',
      marginTop: '20px',
   },

   '& .exit': {
      width: '414px',
      height: '47px',
      border: 'none',
      color: '#959595',
      marginTop: '15px',

      '&:hover': {
         color: 'white',
         background: 'rgba(0,0,0,0.2)',
         borderRadius: '8px',
      },
   },

   '& .linkToUser': {
      color: '#959595',
      marginLeft: '-35px',
   },
}))

export default ForgotPassword

const Registration = styled('h1')(() => ({
   color: '#222222',
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '25px',
   textTransform: 'uppercase',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '37px',
}))
