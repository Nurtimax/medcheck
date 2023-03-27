import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dermatology from '../../components/ServiceZone/Dermatology'

import Services from '../../components/ServiceZone/Services'
import Price from '../../pages/Price'

import { ROUTES } from '../../utils/constants/data'

const Doctors = React.lazy(() => import('../../containers/doctors/Doctors'))
const DoctorsItem = React.lazy(() => {
   return import('../../containers/doctors/DoctorsItem')
})
const TableForAppointment = React.lazy(() => {
   return import('../../components/AppointmentList/TableForAppointment')
})
const ContinueAppointment = React.lazy(() => {
   return import('../../containers/ContinueAppointment')
})
const UserProfile = React.lazy(() => {
   return import('../../pages/user-profile/UserProfile')
})
const ProfileCrud = React.lazy(() => {
   return import('../../components/profileCRUD/ProfileCrud')
})
const ChangePassword = React.lazy(() => {
   return import('../../components/profileCRUD/ChangePassword')
})
const MainLayout = React.lazy(() => import('../../layout/Main.Layout'))
const LoginPage = React.lazy(() => import('../../pages/LoginPage'))
const SignUp = React.lazy(() => import('../../pages/SignUp/SignUp'))
const AboutClinic = React.lazy(() => import('../../pages/AboutClinic'))
const ForgotPassword = React.lazy(() => import('../../pages/ForgotPassword'))
const Contacts = React.lazy(() => import('../../contacts/Contacts'))
const LandingPage = React.lazy(() => import('../../layout/landing/LandingPage'))
const LazyLoading = React.lazy(() => {
   return import('../../components/UI/LodaingSpinner')
})
const ChooseTime = React.lazy(() => {
   return import('../../components/OnlineEntry/SelectServices/ChooseTime')
})
const Specialist = React.lazy(() => {
   return import('../../components/OnlineEntry/SelectServices/Specialist')
})
const ChooseServices = React.lazy(() => {
   return import('../../components/OnlineEntry/SelectServices/ChooseServices')
})

const UserRecords = React.lazy(() => {
   return import('../../components/crud/UserRecords')
})

const MainRoutes = () => {
   const { roleName } = useSelector((store) => store.auth)

   if (roleName?.toLowerCase() === 'admin') {
      return <Navigate to="/admin" />
   }

   return (
      <Routes>
         <Route
            path=""
            element={
               <Suspense fallback={<LazyLoading />}>
                  <MainLayout />
               </Suspense>
            }
         >
            <Route
               index
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <LandingPage />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.USER_RECORDS}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <UserRecords />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.ABOUT_CLINIC}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <AboutClinic />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.SERVICES}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <Services />
                  </Suspense>
               }
            />
            <Route path={`${ROUTES.SERVICES}/:id`} element={<Dermatology />} />
            <Route path={ROUTES.DOCTORS} element={<Doctors />} />
            <Route
               path={`${ROUTES.DOCTORS}/:expertId`}
               element={<DoctorsItem />}
            />
            <Route path={ROUTES.PRICE} element={<Price />} />
            <Route
               path={ROUTES.CONTACTS}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <Contacts />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.SIGN_IN}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <LoginPage />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.FORGOT_PASSWROD}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <ForgotPassword />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.SERVICES_CLINIC}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <ChooseServices />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.SPECIALITY}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <Specialist />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.CHOOSE_TIME}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <ChooseTime />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.SIGN_UP}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <SignUp />
                  </Suspense>
               }
            />
            <Route
               path={ROUTES.USER}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <TableForAppointment />
                  </Suspense>
               }
            />
            <Route
               path={'ROUTES.USER}/:id'}
               element={<ContinueAppointment />}
            />
            <Route path="user_profile" element={<UserProfile />}>
               <Route path="personal_data" element={<ProfileCrud />} />
               <Route path="change_password/:id" element={<ChangePassword />} />
            </Route>
         </Route>
      </Routes>
   )
}

export default MainRoutes
