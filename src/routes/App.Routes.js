import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from '../components/Not.Found'
import { ROUTES } from '../utils/constants/data'

const AdminRoutes = React.lazy(() => import('./admin-routes/Admin.Routes'))
const LoginPage = React.lazy(() => import('../pages/LoginPage'))
const MainLayout = React.lazy(() => import('../layout/Main.Layout'))
const AboutClinic = React.lazy(() => import('../pages/AboutClinic'))
const Contacts = React.lazy(() => import('../contacts/Contacts'))
const AdminLayout = React.lazy(() => import('../layout/Admin.Layout'))
const SignUp = React.lazy(() => import('../pages/SignUp/SignUp'))
const LazyLoading = React.lazy(() => import('../components/UI/LodaingSpinner'))
const LandingPage = React.lazy(() => import('../layout/landing/LandingPage'))
const ForgotPassword = React.lazy(() => import('../pages/ForgotPassword'))

const AppRoutes = () => {
   return (
      <Suspense fallback={<LazyLoading />}>
         <Routes>
            <Route
               path="/"
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
                  path={ROUTES.ABOUT_CLINIC}
                  element={
                     <Suspense fallback={<LazyLoading />}>
                        <AboutClinic />
                     </Suspense>
                  }
               />
               <Route path={ROUTES.SERVICES} element={<h1>services</h1>} />
               <Route path={ROUTES.DOCTORS} element={<h1>doctors</h1>} />
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
            </Route>

            <Route
               path="/admin/*"
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <AdminLayout />
                  </Suspense>
               }
            >
               <Route
                  element={
                     <Suspense fallback={<LazyLoading />}>
                        <AdminRoutes />
                     </Suspense>
                  }
               />
            </Route>
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

            <Route path="*" element={<NotFound />} />
         </Routes>
      </Suspense>
   )
}

export default AppRoutes
