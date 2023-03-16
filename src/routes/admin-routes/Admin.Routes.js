import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ADMIN_ROUTES } from '../../utils/constants/data'

const AdminLayout = React.lazy(() => import('../../layout/Admin.Layout'))
const ApplicationsTable = React.lazy(() =>
   import('../../components/crud/CrudTable').then((module) => ({
      default: module.ApplicationsTable,
   }))
)
const LazyLoading = React.lazy(() =>
   import('../../components/UI/LodaingSpinner').then((module) => ({
      default: module.LazyLoading,
   }))
)

const AdminRoutes = () => {
   return (
      <Routes>
         <Route
            path=""
            element={
               <Suspense fallback={<LazyLoading />}>
                  <AdminLayout />
               </Suspense>
            }
         >
            <Route
               index
               element={<Navigate to={ADMIN_ROUTES.ONLINE_ENTRY} />}
            />
            <Route
               path={ADMIN_ROUTES.ONLINE_ENTRY}
               element={<p>ONLINE_ENTRY</p>}
            />
            <Route
               path={ADMIN_ROUTES.APPLICATION}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <ApplicationsTable />
                  </Suspense>
               }
            />
            <Route path={ADMIN_ROUTES.SPECIALITY} element={<p>SPECIALITY</p>} />
            <Route path={ADMIN_ROUTES.PATIENTS} element={<p>PATIENTS</p>} />
         </Route>
      </Routes>
   )
}

export default AdminRoutes
