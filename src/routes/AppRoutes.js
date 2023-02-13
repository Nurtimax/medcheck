import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Modal from '../components/UI/Modal'
import Contacts from '../contacts/Contacts'
import AdminHeader from '../layout/header/AdminHeader'
import LandingPageClient from '../layout/landingPageClient/LandingPageClient'
import LoginPage from '../pages/LoginPage'
import { PATHS_IN_ROUTES } from '../utils/constants/data'
import PrivateRole from './PrivateRoute'

const AppRoutes = () => {
   return (
      <Routes>
         <Route
            path={PATHS_IN_ROUTES.admin}
            element={
               <PrivateRole
                  RouteComponent={<AdminHeader />}
                  roles={['admin']}
                  fallbackPath="admin"
               />
            }
         ></Route>
         <Route path={PATHS_IN_ROUTES.main} element={<LandingPageClient />} />
         <Route
            path={PATHS_IN_ROUTES.aboutClinic}
            element={<h1>About clinic</h1>}
         />
         <Route path={PATHS_IN_ROUTES.services} element={<h1>services</h1>} />
         <Route path={PATHS_IN_ROUTES.doctors} element={<h1>doctors</h1>} />
         <Route path={PATHS_IN_ROUTES.price} element={<h1>price</h1>} />
         <Route path={PATHS_IN_ROUTES.contacts} element={<Contacts />} />
         <Route path={PATHS_IN_ROUTES.feedbacks} element={<h1>feedbacks</h1>} />
         <Route path={PATHS_IN_ROUTES.signIn} element={<LoginPage />} />
         <Route path={PATHS_IN_ROUTES.signUp} element={<Modal />} />
         <Route path={PATHS_IN_ROUTES.notFound} element={<h1>notFound</h1>} />
      </Routes>
   )
}

export default AppRoutes
