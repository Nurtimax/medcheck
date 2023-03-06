import React from 'react'
import ContinueAppointment from './containers/ContinueAppointment'
import TableForAppointment from './layout/AppointmentList/TableForAppointment'

function App() {
   return (
      <div>
         <TableForAppointment />
         <ContinueAppointment />
      </div>
   )
}

export default App
