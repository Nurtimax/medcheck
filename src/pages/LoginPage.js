import { InputAdornment, styled } from '@mui/material'
import React, { useRef, useState } from 'react'
import Login from '../components/UI/Input'
import Button from '../components/UI/Button'
import Password from '../components/UI/Input'
import signIn from '../assets/icons/signIn.svg'

const LoginPage = () => {
   const nameInputRef = useRef()
   const [login, setLogin] = useState('')
   const [password, setPassword] = useState('')
   const [nameIsValid, setNameIsValid] = useState(true)

   const [show, setShow] = useState(true)

   const [error, setError] = useState(false)

   const handleChange = (e) => {
      setLogin(e.target.value)
   }
   const handleChange1 = (e) => {
      setPassword(e.target.value)
   }

   const handleShowhide = () => {
      setShow(!show)
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      setLogin('')

      if (login.trim() === '') {
         setNameIsValid(false)
         setError(true)
         return
      }

      setNameIsValid(true)
   }

   const nameInputClasses = nameIsValid ? 'form-control ' : 'invalid'

   return (
      <StyledContainer>
         <SignIn onSubmit={handleSubmit} className={nameInputClasses}>
            <h1>Войти</h1>
            <FormContainer>
               <Login
                  error={error}
                  placeholder="Логин"
                  onChange={handleChange}
                  value={login}
                  ref={nameInputRef}
               />

               {error ? (
                  <>
                     <Password
                        error={error}
                        type={show ? 'password' : 'text'}
                        onChange={handleChange1}
                        value={password}
                        placeholder="Пароль"
                        ref={nameInputRef}
                        endAdornment={
                           <InputAdornment
                              onClick={handleShowhide}
                              position="end"
                           >
                              {password.length > 8 && (
                                 <img src={signIn} alt="signIn" />
                              )}
                           </InputAdornment>
                        }
                     />

                     <p>Неправильно указан Email и/или пароль</p>
                  </>
               ) : (
                  <Password
                     type={show ? 'password' : 'text'}
                     onChange={handleChange1}
                     value={password}
                     placeholder="Пароль"
                     ref={nameInputRef}
                     endAdornment={
                        <InputAdornment onClick={handleShowhide} position="end">
                           {password.length > 8 && (
                              <img src={signIn} alt="signIn" />
                           )}
                        </InputAdornment>
                     }
                  />
               )}
            </FormContainer>
            <Button type="submit" variant="contained">
               Войти
            </Button>
         </SignIn>
      </StyledContainer>
   )
}
export default LoginPage

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
   '& button': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '19px',
      textTransform: 'uppercase',
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
