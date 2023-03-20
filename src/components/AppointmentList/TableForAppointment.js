import {
   Container,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/slices/appointment-slice'
import { tableData } from '../../utils/constants/data'
import CustomLink from '../UI/Custom.Link'
const TableForAppointment = () => {
   const colors = {
      ['Подтверждён']: '#346EFB',
      ['Завершён']: '#07AB53',
      ['Отменён']: '#F91515',
   }

   const { applications } = useSelector((state) => state.applications)

   console.log(applications)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(fetchUsers())
   }, [])

   return (
      <Container>
         <TableContainerStyle>
            <Table>
               <TableHead>
                  <TableRow>
                     {tableData.map((title) => (
                        <TableCellTitle key={title.id}>
                           {title.userInfo.head}
                        </TableCellTitle>
                     ))}
                  </TableRow>
               </TableHead>
               <TableBody>
                  {applications.map((data) => (
                     <TableRow key={data.id}>
                        <TableCell>
                           <div>
                              <div>{data.userInfo.photo}</div>
                              <CustomLink to={`/user/${data.id}`}>
                                 <div className="name">
                                    {data.userInfo.name}
                                 </div>
                              </CustomLink>

                              <div className="speciality">
                                 {data.userInfo.speciality}
                              </div>
                           </div>
                        </TableCell>
                        <TableCell>
                           <div>
                              <div className="date">{data.timetable}</div>
                              <div className="time">{}</div>
                           </div>
                        </TableCell>
                        <TableCell>
                           <div>
                              <StatusText color={colors[data.status]}>
                                 {data.status}
                              </StatusText>
                           </div>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainerStyle>
      </Container>
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
