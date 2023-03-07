import { styled } from '@mui/material'
import { validateSchemaSignIn } from '../utils/constants/validateSchema'
import Button from '../components/UI/Button'
import { useFormik } from 'formik'
import AuthInput from '../components/UI/AuthInput'
import AuthWithGoogle from './AuthWithGoogle/AuthWithGoogle'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../components/UI/Modal'
import { useState } from 'react'

const LoginPage = () => {
   const [open, setOpen] = useState(true)

   const navigate = useNavigate()

   const closeModal = () => {
      setOpen(navigate('/'))
   }

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: validateSchemaSignIn,
      onSubmit: () => {
         resetForm()
      },
   })

   const { handleChange, errors, values, handleSubmit, resetForm, touched } =
      formik

   return (
      <Modal
         className="modal"
         marginTop="80px"
         open={open}
         closeModal={closeModal}
      >
         <Login>Регистрация</Login>

         <FormContainer onSubmit={handleSubmit}>
            <AuthInput
               name="email"
               className="input"
               placeholder="Email"
               type="email"
               errors={errors.email}
               value={values.email}
               onChange={handleChange}
               touched={touched.email}
            />

            <AuthInput
               autoComplete="current-password"
               aria-invalid="false"
               name="password"
               className="input"
               placeholder="Введите пароль"
               errors={errors.password}
               value={values.password}
               onChange={handleChange}
               touched={touched.password}
            />

            <Link className="forgotPassword" to="forgot-password">
               Забыли пароль?
            </Link>

            <Button type="submit" className="button">
               создать аккаунт
            </Button>

            <div className="variants">
               <div className="variantBorder"></div>
               <span className="spanColor">или</span>
               <div className="variantBorder"></div>
            </div>

            <AuthWithGoogle />

            <div className="register">
               <p>Нет аккаунта?</p>
               <Link to="/sign_up" className="signUp">
                  Зарегистрироваться
               </Link>
            </div>
         </FormContainer>
      </Modal>
   )
}
export default LoginPage

const Login = styled('h1')(() => ({
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

const FormContainer = styled('form')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',

   '& .modal': {
      background: 'white',
   },

   '& .input': {
      width: '414px',
      height: '42px',
      marginTop: '15px',
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

   '& .variants': {
      display: 'flex',
      alignItems: 'center',
      margin: '0 auto',
      gap: '24px',
      marginTop: '20px',

      '& .variantBorder': {
         borderBottom: '1px solid grey',
         width: '170px',
         opacity: '0.3',
      },

      '& .spanColor': {
         color: '#222222',
      },
   },

   '& .signUp': {
      color: '#3772FF',
      cursor: 'pointer',
      textDecoration: 'none',
      fontSize: '14px',
   },

   '& .register': {
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
      fontSize: '14px',
   },

   '& .forgotPassword': {
      margin: '0 auto',
      color: '#3772FF',
      cursor: 'pointer',
      textDecoration: 'none',
      marginTop: '20px',
   },
}))
