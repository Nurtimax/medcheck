import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { ADMIN_ROUTES } from '../../utils/constants/data'

const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="" element={<Navigate to="/admin/online_entry" />} />
         <Route
            path={ADMIN_ROUTES.ONLINE_ENTRY}
            element={<p>ONLINE_ENTRY</p>}
         />
         <Route path={ADMIN_ROUTES.APPLICATION} element={<p>APPLICATION</p>} />
         <Route path={ADMIN_ROUTES.SPECIALITY} element={<p>SPECIALITY</p>} />
         <Route path={ADMIN_ROUTES.PATIENTS} element={<p>PATIENTS</p>} />
      </Routes>
   )
}

export default AdminRoutes
