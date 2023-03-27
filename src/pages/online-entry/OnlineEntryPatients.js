import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import ContainerEntry from '../../components/Container/ContainerEntry'
import { styled } from '@mui/material'
import PatientsData from '../../pages/online-entry/PatientsData'
import { getAllEntry } from '../../redux/slices/onlineEntrySlice'

const ApplicationsTable = () => {
   const { allEntry } = useSelector((state) => state.online_entry)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getAllEntry())
   }, [])

   return (
      <Div>
         <OnlineEntryStyled>
            <ContainerEntry>
               <TableContainerStyled component={Paper}>
                  <Table className="header">
                     <TableHeadStyle>
                        <TableRow className="title">
                           <TableCell>№</TableCell>
                           <TableCell>Имя и Фамилия</TableCell>
                           <TableCell>Номер телефона</TableCell>
                           <TableCell>Почта</TableCell>
                           <TableCell>Выбор услуги </TableCell>
                           <TableCell>Выбор специалиста </TableCell>
                           <TableCell>Дата и время </TableCell>
                           <TableCell sx={{ textAlign: 'center' }}>
                              Обработан
                           </TableCell>
                           <TableCell>Действия </TableCell>
                        </TableRow>
                     </TableHeadStyle>
                     <TableBody>
                        {allEntry?.map((patient, index) => (
                           <PatientsData
                              index={index}
                              key={patient.id}
                              patient={patient}
                           />
                        ))}
                     </TableBody>
                  </Table>
               </TableContainerStyled>
            </ContainerEntry>
         </OnlineEntryStyled>
      </Div>
   )
}
export default ApplicationsTable

const TableHeadStyle = styled(TableHead)(() => ({
   whiteSpace: 'nowrap',
   boxShadow: 'border-box',
}))
const OnlineEntryStyled = styled('div')(() => ({
   width: '100%',
   margin: '0 auto',
}))

const TableContainerStyled = styled(TableContainer)(() => ({
   cursor: 'pointer',
   width: '1200px',
   '& .header': {
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
