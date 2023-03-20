import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/Not.Found'
import { ROUTES } from '../utils/constants/data'
import AdminRoutes from './admin-routes/Admin.Routes'
import LoginPage from './.././pages/LoginPage'
import MainLayout from '../layout/Main.Layout'
// import LandingPageClient from '../layout/landingPageClient/LandingPageClient'
import AboutClinicPage from '../pages/AboutClinic'
import Contacts from '../contacts/Contacts'
import AdminLayout from '../layout/Admin.Layout'
import PrivateRoute from '././private/Private.Route'
import ApplicationsTable from '../components/crud/CrudTable'
import TableForAppointment from '../components/AppointmentList/TableForAppointment'
import ContinueAppointment from '../containers/ContinueAppointment'
import LandingPageClient from './../layout/landing/LandingPage'
import SignUp from '../pages/SignUp/SignUp'

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
            <Route path={ROUTES.USER} element={<TableForAppointment />} />
            <Route
               path={`${ROUTES.USER}/:details`}
               element={<ContinueAppointment />}
            />
         </Route>

         <Route element={<AdminLayout />}>
            <Route
               path="/admin/*"
               element={
                  <PrivateRoute roles="ADMIN" element={<AdminRoutes />} />
               }
            />
            <Route path="/application" element={<ApplicationsTable />} />
         </Route>
         <Route path={ROUTES.SIGN_IN} element={<LoginPage />} />
         <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
   )
}

export default AppRoutes
