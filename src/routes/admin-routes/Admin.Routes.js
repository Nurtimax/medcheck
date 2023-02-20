import React from 'react'
import { Route, Routes } from 'react-router'
// import AdminLayout from '../../layout/Admin.Layout'
import { ADMIN_ROUTES } from '../../utils/constants/data'

const AdminRoutes = () => {
   return (
      <Routes>
         <Route
            path={ADMIN_ROUTES.ONLINE_ENTRY}
            element={<p>ONLINE_ENTRY</p>}
         />
         <Route path={ADMIN_ROUTES.APPLICATION} element={<p>APPLICATION</p>} />
      </Routes>
   )
}

export default AdminRoutes
