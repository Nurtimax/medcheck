import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/Not.Found'
import { ROUTES } from '../utils/constants/data'
import AdminRoutes from './admin-routes/Admin.Routes'
import LoginPage from './.././pages/LoginPage'
import MainLayout from '../layout/Main.Layout'
import LandingPageClient from '../layout/landingPageClient/LandingPageClient'
import AboutClinicPage from '../pages/AboutClinic'
import Contacts from '../contacts/Contacts'
import AdminLayout from '../layout/Admin.Layout'
import PrivateRoute from '././private/Private.Route'
import SignUp from '../pages/SignUp/SingUp'

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPageClient />} />
            <Route path={ROUTES.ABOUT_CLINIC} element={<AboutClinicPage />} />
            <Route path={ROUTES.SERVICES} element={<h1>services</h1>} />
            <Route path={ROUTES.DOCTORS} element={<h1>doctors</h1>} />
            <Route path={ROUTES.PRICE} element={<h1>price</h1>} />
            <Route path={ROUTES.CONTACTS} element={<Contacts />} />
            <Route path={ROUTES.FEEDBACKS} element={<h1>feedbacks</h1>} />
         </Route>

         <Route path="/admin/*" element={<AdminLayout />}>
            <Route
               element={
                  <PrivateRoute roles="ADMIN" element={<AdminRoutes />} />
               }
            />
         </Route>
         <Route path={ROUTES.SIGN_IN} element={<LoginPage />} />
         <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}

export default AppRoutes
