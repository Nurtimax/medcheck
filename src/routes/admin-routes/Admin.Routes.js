import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ADMIN_ROUTES } from '../../utils/constants/data'

import LazyLoading from '../../components/UI/LodaingSpinner'
import ExpertsCrud from '../../components/experts/Expert.Crud'
import EditData from '../../components/experts/EditData'
import AddExpert from '../../components/experts/Add.Expert'
import Patients from '../../components/patients/Patients'
import ApplicationsTable from '../../components/crud/ApplicationTable'
import OnePatient from '../../components/patients/OnePatient'

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
                     <EditData />
                  </Suspense>
               }
            />

            <Route
               path={ADMIN_ROUTES.PATIENTS}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <Patients />
                  </Suspense>
               }
            />
            <Route
               path={ADMIN_ROUTES.ONE_PATIENT}
               element={
                  <Suspense fallback={<LazyLoading />}>
                     <OnePatient />
                  </Suspense>
               }
            />
         </Route>
      </Routes>
   )
}

export default AdminRoutes
