import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'

import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ContainerEntry from '../UI/ContainerEntry'
import { styled } from '@mui/material'
import { getAllPatients } from '../../redux/slices/patientsSlice'
import PatientData from '././PatientData'

const ApplicationsTable = () => {
   const { allPatients } = useSelector((state) => state.patients)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllPatients())
   }, [])

   return (
      <Div>
         <PatientCrudStyled>
            <Nav>
               <Speciality>Пациенты</Speciality>
            </Nav>

            <ContainerEntry>
               <TableContainerStyled component={Paper}>
                  <Table className="header">
                     <TableHead>
                        <TableRow className="title">
                           <TableCell>
                              <EditIcon />
                           </TableCell>
                           <TableCell>№</TableCell>
                           <TableCell>Имя Фамилия</TableCell>
                           <TableCell>Номер телефона</TableCell>
                           <TableCell>Почта</TableCell>
                           <TableCell>Дата сдачи </TableCell>
                           <TableCell sx={{ textAlign: 'center' }}>
                              Обработан
                           </TableCell>
                           <TableCell>Действия </TableCell>
                        </TableRow>
                     </TableHead>
                     <TableBody>
                        {allPatients?.map((patient, index) => (
                           <PatientData
                              index={index}
                              key={patient.id}
                              patient={patient}
                           />
                        ))}
                     </TableBody>
                  </Table>
               </TableContainerStyled>
            </ContainerEntry>
         </PatientCrudStyled>
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

const PatientCrudStyled = styled('div')(() => ({
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
