import { styled } from '@mui/material'
import React from 'react'

import google from '../../assets/icons/google.svg'

const AuthWithGoogle = () => {
   return (
      <AuthGoogleContainer>
         <img src={google} alt="google" />
         <div>Зарегистрироваться с Google</div>
      </AuthGoogleContainer>
   )
}

const AuthGoogleContainer = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '14px',
   width: '414px',
   height: '39px',
   background: '#C0C0C0',
   borderRadius: '8px',
   margin: '0 auto',
   marginTop: '20px',
   cursor: 'pointer',

   '& .div': {
      fontWeight: '600',
   },
}))

export default AuthWithGoogle
