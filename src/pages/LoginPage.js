import { styled } from '@mui/material'
import * as Yup from 'yup'
import Login from '../components/UI/Input'
import Button from '../components/UI/Button'
import { useFormik } from 'formik'
import Password from '../components/UI/Input'
import { ReactComponent as Show } from './../assets/icons/signIn.svg'
import InputAdornment from '@mui/material/InputAdornment'
import { useState } from 'react'

const LoginPage = () => {
   const [showPassword, setShowPassword] = useState(false)

   const formik = useFormik({
      initialValues: {
         login: '',
         password: '',
      },
      onSubmit: (values, actions) => {
         // localStorage.setItem('user', JSON.stringify({ ...values }))
         // console.log(values)
         actions.resetForm()
      },
      validationSchema: Yup.object().shape({
         login: Yup.string().required('Please enter email'),
         password: Yup.string()
            .required('')
            .min(7, 'must be at least 8 characters long'),
      }),
   })
   const handleClickShowPassword = () => setShowPassword((show) => !show)

   return (
      <StyledContainer>
         <SignIn onSubmit={formik.handleSubmit}>
            <h1>Войти</h1>
            <FormContainer>
               <Login
                  error={!!formik.errors.login}
                  placeholder="Логин"
                  onChange={formik.handleChange}
                  value={formik.values.login}
                  name="login"
                  type="text"
                  iconVariant="end"
               />
               <StyledPasswordInput
                  placeholder={formik.errors.password || 'Пароль'}
                  error={!!formik.errors.password}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                     <InputAdornment
                        onClick={handleClickShowPassword}
                        position="end"
                     >
                        <Show />
                     </InputAdornment>
                  }
               />
               {formik.errors.login && formik.errors.password ? (
                  <p>Неправильно указан Email и/или пароль</p>
               ) : null}
            </FormContainer>
            <Button type="submit" variant="contained">
               Войти
            </Button>
         </SignIn>
      </StyledContainer>
   )
}
export default LoginPage

const StyledPasswordInput = styled(Password)(() => ({
   '&::-ms-reveal': {
      display: 'none !important',
   },
   '& input[type=password]::-ms-reveal, input[type=password]::-ms-clear': {
      display: 'none',
   },
}))

const StyledContainer = styled('div')(() => ({
   background:
      'radial-gradient(45.8% 45.8% at 50% 54.2%, #99BDDD 0%, #85B7EA 100%)',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100vw',
   height: '100vh',
}))
const SignIn = styled('form')(() => ({
   width: '450px',
   display: 'flex',
   flexDirection: 'column',
   background: '#FFFFFF',
   padding: '50px',
   '& h1': {
      color: '#222222',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '25px',
      textTransform: 'uppercase',
      display: 'flex',
      justifyContent: 'center',
   },
   '& invalid input': {
      borderColor: 'red',
   },
}))
const FormContainer = styled('form')(() => ({
   display: 'grid',
   gap: '10px',
   marginBottom: '25px',
   '& p': {
      color: '#F91515',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '17px',
   },
}))
