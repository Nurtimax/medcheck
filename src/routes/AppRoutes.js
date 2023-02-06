import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPageClient from '../layout/landingPageClient/LandingPageClient'
import { paths_in_routes } from '../utils/constants/data'
import PrivateRole from './PrivateRoute'

const AppRoutes = () => {
   return (
      <Routes>
         <Route
            path={paths_in_routes.main}
            element={
               <PrivateRole
                  RouteComponent={<LandingPageClient />}
                  roles={['admin']}
                  fallbackPath="admin"
               />
            }
         ></Route>
         <Route path={paths_in_routes.main} element={<LandingPageClient />} />
         <Route index element={<LandingPageClient />} />
         <Route
            path={paths_in_routes.aboutClinic}
            element={<h1>About clinic</h1>}
         />
         <Route path={paths_in_routes.services} element={<h1>services</h1>} />
         <Route path={paths_in_routes.doctors} element={<h1>doctors</h1>} />
         <Route path={paths_in_routes.price} element={<h1>price</h1>} />
         <Route path={paths_in_routes.contacts} element={<h1>contacts</h1>} />
         <Route path={paths_in_routes.signIn} element={<h1>Sign In</h1>} />
         <Route path={paths_in_routes.signUp} element={<h1>Sign up</h1>} />
         <Route path={paths_in_routes.notFound} element={<h1>notFound</h1>} />
      </Routes>
   )
}

export default AppRoutes
