import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { tableNameDoctors, tableTitleDoctors } from '../../utils/constants/data'

const TableForAppointment = () => {
   const colors = {
      ['Подтверждён']: '#346EFB',
      ['Завершён']: '#07AB53',
      ['Отменён']: '#F91515',
   }

   return (
      <TableContainerStyle>
         <Table>
            <TableHead>
               <TableRow>
                  {tableTitleDoctors.map((title) => (
                     <TableCellTitle key={title.id}>{title}</TableCellTitle>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {tableNameDoctors.map((data) => (
                  <TableRow key={data.id}>
                     <TableCell>
                        <div>
                           <div>{data.doctorInfo.photo}</div>
                           <div className="name">{data.doctorInfo.name}</div>
                           <div className="speciality">
                              {data.doctorInfo.speciality}
                           </div>
                        </div>
                     </TableCell>
                     <TableCell>
                        <div>
                           <div className="date">{data.info.date}</div>
                           <div className="time">{data.info.time}</div>
                        </div>
                     </TableCell>
                     <TableCell>
                        <div>
                           <StatusText color={colors[data.statusInfo]}>
                              {data.statusInfo}
                           </StatusText>
                        </div>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainerStyle>
   )
}
export default TableForAppointment
const TableContainerStyle = styled(TableContainer)(() => ({
   '& .name': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '22px',
      color: '#222222',
   },
   '& .speciality': {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#959595',
   },
   '& .date': {
      color: '#222222',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
   },
   '& .time': {
      color: '#4D4E51',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
   },
}))

const TableCellTitle = styled(TableCell)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '19px',
   whiteSpace: 'nowrap',
   color: '#222222',
}))

const StatusText = styled('p')`
   color: ${(props) => props.color};
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 22px;
`
