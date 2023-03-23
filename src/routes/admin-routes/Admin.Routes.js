import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ADMIN_ROUTES } from '../../utils/constants/data'

import LazyLoading from '../../components/UI/LodaingSpinner'
import ApplicationsTable from '../../components/crud/CrudTable'

const AdminLayout = React.lazy(() => import('../../layout/Admin.Layout'))
const TimeTable = React.lazy(() => import('../../pages/time-table/TimeTable'))
const OnlineEntry = React.lazy(() => {
   return import('../../pages/online-entry/OnlineEntry')
})

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
            <Route path={ADMIN_ROUTES.ONLINE_ENTRY} element={<OnlineEntry />}>
               <Route index element={<Navigate to="online" />} />
               <Route path="online" element={<h1>Online</h1>} />
               <Route
                  path="schedule"
                  element={
                     <Suspense fallback={<LazyLoading />}>
                        <TimeTable />
                     </Suspense>
                  }
               />
            </Route>
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
