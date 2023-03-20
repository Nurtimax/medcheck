import React from 'react'
import { IconButton, InputAdornment, styled } from '@mui/material'

import Input from './Input'

import { ReactComponent as ViewPassword } from '../../assets/icons/signIn.svg'
import { ReactComponent as ClosePassword } from '../../assets/icons/viewPassword.svg'

const PasswordInput = ({
   placeholder,
   value,
   onChange,
   name,
   error,
   className,
}) => {
   const [showPassword, setShowPassword] = React.useState(false)
   const handleClickShowPassword = () => setShowPassword((show) => !show)
   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }
   return (
      <StyledPassword
         className={className}
         placeholder={placeholder}
         value={value}
         onChange={onChange}
         type={showPassword ? 'text' : 'password'}
         name={name}
         error={error}
         endAdornment={
            <InputAdornment position="start">
               <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
               >
                  {showPassword ? <ViewPassword /> : <ClosePassword />}
               </IconButton>
            </InputAdornment>
         }
      />
   )
}
export default PasswordInput

const StyledPassword = styled(Input)(({ error }) => ({
   border: `1px solid ${error ? 'red' : '#d9d9d9'}`,
}))
