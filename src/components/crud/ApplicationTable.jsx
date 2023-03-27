import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import ContainerEntry from '../UI/ContainerEntry'
import { getApplicationsRequest } from '../../redux/slices/crudSlice'
import { styled } from '@mui/material'
import TableItem from './TableItem'

const ApplicationsTable = () => {
   const { applications } = useSelector((state) => state.applications)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getApplicationsRequest())
   }, [])

   return (
      <Div>
         <ExpertCrudStyled>
            <Nav>
               <Speciality>Заявки</Speciality>
            </Nav>

            <ContainerEntry>
               <TableContainerStyled component={Paper}>
                  <Table className="header">
                     <TableHead>
                        <TableRow className="title">
                           <TableCell>№</TableCell>
                           <TableCell>Имя</TableCell>
                           <TableCell>Дата</TableCell>
                           <TableCell>Номер телефона</TableCell>
                           <TableCell sx={{ textAlign: 'center' }}>
                              Обработан
                           </TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {applications?.map((application, index) => (
                           <TableItem
                              index={index}
                              key={application.id}
                              application={application}
                           />
                        ))}
                     </TableBody>
                  </Table>
               </TableContainerStyled>
            </ContainerEntry>
         </ExpertCrudStyled>
      </Div>
   )
}
export default ApplicationsTable

const Nav = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   paddingBottom: '40px',
   paddingTop: '20px',
}))

const ExpertCrudStyled = styled('div')(() => ({
   width: '1200px',
   margin: '0 auto',
}))

const Speciality = styled('div')(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '22px',
   lineHeight: '30px',
   color: '#222222',
   cursor: 'pointer',
}))

const TableContainerStyled = styled(TableContainer)(() => ({
   cursor: 'pointer',
   width: '100%',
   '& .header': {
      minWidth: '600',
      ariaLabel: 'simple table',
   },
   '& .title': {
      color: '#222222',
   },
   '& input': {
      color: '#959595 ',
   },
}))
const Div = styled('div')(() => ({
   background: '#E0E0E0',
   height: '100%',
   minHeight: '1000px',
}))
