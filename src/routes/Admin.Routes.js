import React from 'react'
import { Route, Routes } from 'react-router'
import AdminHeader from '../layout/header/AdminHeader'
import { PATHS_IN_ROUTES } from '../utils/constants/data'
import PrivateRole from './Private.Route'

const AdminRoutes = () => {
   return (
      <Routes>
         {' '}
         <Route
            path={PATHS_IN_ROUTES.ADMIN}
            element={
               <PrivateRole
                  RouteComponent={<AdminHeader />}
                  roles={['ADMIN']}
                  fallbackPath="ADMIN"
               />
            }
         ></Route>
      </Routes>
   )
}

export default AdminRoutes
