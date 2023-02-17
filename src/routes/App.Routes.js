import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Modal from '../components/UI/Modal'
import Contacts from '../contacts/Contacts'
import LandingPageClient from '../layout/landingPageClient/LandingPageClient'
import AboutClinicPage from '../pages/AboutClinic'
import LoginPage from '../pages/LoginPage'
import { PATHS_IN_ROUTES } from '../utils/constants/data'
import AdminRoutes from './Admin.Routes'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path={PATHS_IN_ROUTES.ADMIN} element={<AdminRoutes />}></Route>
         <Route path={PATHS_IN_ROUTES.MAIN} element={<LandingPageClient />} />
         <Route
            path={PATHS_IN_ROUTES.ABOUT_CLINIC}
            element={<AboutClinicPage />}
         />
         <Route path={PATHS_IN_ROUTES.SERVICES} element={<h1>services</h1>} />
         <Route path={PATHS_IN_ROUTES.DOCTORS} element={<h1>doctors</h1>} />
         <Route path={PATHS_IN_ROUTES.PRICE} element={<h1>price</h1>} />
         <Route path={PATHS_IN_ROUTES.CONTACTS} element={<Contacts />} />
         <Route path={PATHS_IN_ROUTES.FEEDBACKS} element={<h1>feedbacks</h1>} />
         <Route path={PATHS_IN_ROUTES.SIGN_IN} element={<LoginPage />} />
         <Route path={PATHS_IN_ROUTES.SIGN_UP} element={<Modal />} />
         <Route path={PATHS_IN_ROUTES.NOT_FOUND} element={<h1>notFound</h1>} />
      </Routes>
   )
}

export default AppRoutes
