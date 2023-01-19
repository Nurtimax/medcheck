import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tables = ({ sos }) => {
   //    const removeRecord = (id) => {
   //       const arr = [...sos]
   //       arr.forEach((el, i) => {
   //          if (el.id === id) arr.splice(i, 1)
   //       })
   //    }
   return (
      <Table sx={{ width: '100%' }}>
         <TableHead>
            <TableRow>
               <TableCell>№</TableCell>
               <TableCell>Статус</TableCell>
               <TableCell>Специалист</TableCell>
               <TableCell>Отдедение</TableCell>
               <TableCell>Расписание до</TableCell>
               <TableCell>Действия</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            {sos.map((el) => (
               <TableRow key={el.id}>
                  <TableCell>{el.number}</TableCell>
                  <TableCell>{el.status}</TableCell>
                  <TableCell>{el.speciality}</TableCell>
                  <TableCell>{el.otdelenie}</TableCell>
                  <TableCell>{el.time}</TableCell>
                  <TableCell>
                     {el.action}
                     {/* <IconButton></IconButton> */}
                  </TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   )
}

export default Tables
