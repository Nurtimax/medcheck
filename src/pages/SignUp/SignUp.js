import { styled } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button'
import Modal from '../../components/UI/Modal'
import AuthWithGoogle from '../AuthWithGoogle/AuthWithGoogle'
import { validationSchemaSignUp } from '../../utils/constants/validateSchema'
import { useDispatch } from 'react-redux'
import { postSignUp } from '../../redux/slices/authSlice'
import AuthInput from '../../components/UI/AuthInput'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import axiosInstance from '../../api/axiosInstance'
import { auth } from '../../services/firebase'
import { JWT_TOKEN } from '../../utils/constants/data'

const SignUp = () => {
   const [open, setOpen] = useState(true)

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const closeModal = () => {
      setOpen(navigate('/'))
   }

   const formik = useFormik({
      initialValues: {
         firstname: '',
         lastname: '',
         phoneNumber: '',
         email: '',
         password: '',
         repeatPassword: '',
      },

      validationSchema: validationSchemaSignUp,

      onSubmit: (values) => {
         dispatch(postSignUp({ ...values }))
         navigate('/')
         resetForm()
      },
   })

   const { handleChange, errors, values, handleSubmit, resetForm, touched } =
      formik

   const provider = new GoogleAuthProvider()

   const signInWithGoogle = () => {
      signInWithPopup(auth, provider)
         .then((result) => {
            const success = (data) => {
               dispatch(postSignUp(data))
               localStorage.setItem(JWT_TOKEN, JSON.stringify(data))
               navigate('/')
               return data
            }
            axiosInstance
               .post(`/auth/auth/google?tokenFront=${result.user.accessToken}`)
               .then(({ data }) => success(data))
         })
         .catch((error) => console.log(error))
   }

   return (
      <Modal marginTop="80px" open={open} closeModal={closeModal}>
         <Registration>Регистрация</Registration>

         <FormContainer onSubmit={handleSubmit}>
            <AuthInput
               name="firstname"
               value={values.firstname}
               placeholder="Имя"
               onChange={handleChange}
               type="text"
               className="input"
               errors={errors.firstname}
               touched={touched.firstname}
            />

            <AuthInput
               type="text"
               name="lastname"
               className="input"
               placeholder="Фамилия"
               errors={errors.lastname}
               value={values.lastname}
               onChange={handleChange}
               touched={touched.lastname}
            />

            <AuthInput
               name="phoneNumber"
               className="input"
               placeholder="+996 (_ _ _) _ _  _ _  _ _ "
               type="number"
               errors={errors.phoneNumber}
               value={values.phoneNumber}
               onChange={handleChange}
               touched={touched.phoneNumber}
            />

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
               autoComplete="password"
               name="password"
               className="input"
               placeholder="Введите пароль"
               errors={errors.password}
               value={values.password}
               onChange={handleChange}
               touched={touched.password}
            />
            <AuthInput
               autoComplete="repeatPassword"
               name="repeatPassword"
               className="input"
               placeholder="Повторите пароль"
               value={values.repeatPassword}
               errors={errors.repeatPassword}
               onChange={handleChange}
               touched={touched.repeatPassword}
            />

            <Button type="submit" className="button">
               создать аккаунт
            </Button>

            <div className="variants">
               <div className="variantBorder"></div>
               <span className="spanColor">или</span>
               <div className="variantBorder"></div>
            </div>

            <AuthWithGoogle handleClick={signInWithGoogle} />

            <div className="existAccount">
               <p>У вас уже есть аккаунт?</p>
               <Link to="/sign_in" className="signIn">
                  Войти
               </Link>
            </div>
         </FormContainer>
      </Modal>
   )
}

export default SignUp

const FormContainer = styled('form')(() => ({
   width: '100%',
   display: 'flex',
   flexDirection: 'column',

   '& .input': {
      width: '414px',
      height: '42px',
      marginTop: '15px',
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

   '& .signIn': {
      color: '#3772FF',
      cursor: 'pointer',
      textDecoration: 'none',
   },

   '& .existAccount': {
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: '3px',
   },
}))

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
