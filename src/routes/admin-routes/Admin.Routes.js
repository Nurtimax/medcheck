import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ADMIN_ROUTES } from '../../utils/constants/data'

import LazyLoading from '../../components/UI/LodaingSpinner'
import ApplicationsTable from '../../components/crud/CrudTable'
import ExpertsCrud from '../../components/crud/Expert.Crud'
import AddExpert from '../../components/crud/Add.Expert'
import EditCrud from '../../components/crud/EditCrud'

const AdminLayout = React.lazy(() => import('../../layout/Admin.Layout'))

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

            <Route
               path={ADMIN_ROUTES.SPECIALITY}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <ExpertsCrud />
                  </Suspense>
               }
            />
            <Route
               path={ADMIN_ROUTES.ADD_EXPERT}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <AddExpert />
                  </Suspense>
               }
            />
            <Route
               path={ADMIN_ROUTES.EDIT_EXPERT}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <EditCrud />
                  </Suspense>
               }
            />

            <Route path={ADMIN_ROUTES.PATIENTS} element={<p>PATIENTS</p>} />
         </Route>
      </Routes>
   )
}

export default AdminRoutes
