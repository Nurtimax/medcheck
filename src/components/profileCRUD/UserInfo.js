import * as React from 'react'
import { styled } from '@mui/material'
import { useSelector } from 'react-redux'
import CustomLink from '../UI/Custom.Link'

function ProfileCrudContainer() {
   const { profile } = useSelector((state) => state.profCrudUser)

   return (
      <Container>
         <h2>Профиль</h2>

         <div className="linkControl">
            <CustomLink className="link" to={'/user_profile/personal_data'}>
               личные данные
            </CustomLink>

            {profile.map((item) => {
               return (
                  <CustomLink
                     className="link"
                     key={item.id}
                     to={`/user_profile/change_password/${item.id}`}
                  >
                     Сменить пароль
                  </CustomLink>
               )
            })}
         </div>
      </Container>
   )
}

const Container = styled('div')(() => ({
   width: '1440px',
   margin: '0 auto',

   '& .data': {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: '#048741',
      fontSize: '14px',
   },

   '& .link': {
      textDecoration: 'none',
      color: '#959595',
   },

   '& .linkControl': {
      display: 'flex',
      gap: '20px',
      textTransform: 'uppercase',
      fontSize: '14px',
   },
}))

export default ProfileCrudContainer
