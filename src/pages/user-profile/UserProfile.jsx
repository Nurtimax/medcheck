import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileCrudContainer from '../../components/profileCRUD/UserInfo'

const UserProfile = () => {
   return (
      <div>
         <ProfileCrudContainer />
         <Outlet />
      </div>
   )
}

export default UserProfile
