import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import Doctors from '../../containers/doctors/Doctors'
import DoctorsItem from '../../containers/doctors/DoctorsItem'
import ChangePassword from '../../components/profileCRUD/ChangePassword'
import { ROUTES } from '../../utils/constants/data'
import ProfileCrud from '../../components/profileCRUD/ProfileCrud'
import UserProfile from '../../pages/user-profile/UserProfile'
import ContinueAppointment from '../../containers/ContinueAppointment'
import TableForAppointment from '../../components/AppointmentList/TableForAppointment'

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

const UserRecords = React.lazy(() => {
   return import('../../components/UI/UserRecords')
})

const MainRoutes = () => {
   const { roleName } = useSelector((store) => store.auth)

   if (roleName?.toLowerCase() === 'admin') {
      return <Navigate to="/admin" />
   }

   return (
      <>
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
               <Route path={ROUTES.SERVICES} element={<h1>services</h1>} />
               <Route path={ROUTES.DOCTORS} element={<Doctors />} />

               <Route
                  path={`${ROUTES.DOCTORS}/:expertId`}
                  element={<DoctorsItem />}
               />

               <Route path={ROUTES.PRICE} element={<h1>price</h1>} />

               <Route
                  path={ROUTES.CONTACTS}
                  element={
                     <Suspense fallback={<LazyLoading />}>
                        <Contacts />
                     </Suspense>
                  }
               />
               <Route path={ROUTES.FEEDBACKS} element={<h1>feedbacks</h1>} />
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
                  <Route
                     path="personal_data"
                     element={
                        <Suspense fallback={<LazyLoading />}>
                           <ProfileCrud />
                        </Suspense>
                     }
                  />
                  <Route
                     path="change_password/:id"
                     element={<ChangePassword />}
                  />
               </Route>
            </Route>
         </Routes>
      </>
   )
}

export default MainRoutes
