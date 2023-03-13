import React from 'react'
import { Route, Routes } from 'react-router'
import ApplicationsTable from '../../components/crud/CrudTable'
import { ADMIN_ROUTES } from '../../utils/constants/data'

const AdminRoutes = () => {
   return (
      <Routes>
         <Route
            path={ADMIN_ROUTES.ONLINE_ENTRY}
            element={<p>ONLINE_ENTRY</p>}
         />
         <Route
            path={ADMIN_ROUTES.APPLICATION}
            element={<ApplicationsTable />}
         />
         <Route path={ADMIN_ROUTES.SPECIALITY} element={<p>SPECIALITY</p>} />
         <Route path={ADMIN_ROUTES.PATIENTS} element={<p>PATIENTS</p>} />
      </Routes>
   )
}

export default AdminRoutes
