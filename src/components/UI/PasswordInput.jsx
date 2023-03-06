import React from 'react'
import { IconButton, InputAdornment, styled } from '@mui/material'
import Input from './Input'

const PasswordInput = ({ placeholder, value, onChange, name, error }) => {
   const [showPassword, setShowPassword] = React.useState(false)
   const handleClickShowPassword = () => setShowPassword((show) => !show)
   const handleMouseDownPassword = (event) => {
      event.preventDefault()
   }
   return (
      <StyledPassword
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
               ></IconButton>
            </InputAdornment>
         }
      />
   )
}
export default PasswordInput
const StyledPassword = styled(Input)(({ error }) => ({
   height: '41px',
   '& .MuiInputBase-input': {
      height: '4px',
   },
   borderRadius: '8px',
   background: '#FFFFFF',
   color: 'black',
   padding: '0px 4px 0px 18px',
   border: `1px solid ${error ? 'red' : 'grey'}`,
   '&:focus': {
      border: '1px solid #0079BF',
      color: '#919191',
   },
   '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
   },
   '&:hover': {
      border: '1px solid #0079BF',
   },
}))
