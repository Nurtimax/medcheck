import { styled } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProfile } from '../../redux/slices/profileSlice'

import ProfileData from './ProfileData'
import { Outlet } from 'react-router-dom'

const ProfileCrud = () => {
   const dispatch = useDispatch()
   const { profile } = useSelector((state) => state.profCrudUser)

   useEffect(() => {
      dispatch(fetchProfile())
   }, [dispatch])

   return (
      <Container>
         <h4>Ваши личные данные</h4>

         {profile.map((item) => {
            return <ProfileData key={item.id} {...item} />
         })}
         <Outlet />
      </Container>
   )
}

export default ProfileCrud

const Container = styled('div')(() => ({
   width: '1200px',
   margin: '0 auto',
   marginBottom: '100px',
   paddingLeft: '100px',
}))
