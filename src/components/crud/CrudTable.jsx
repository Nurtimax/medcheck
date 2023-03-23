import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import bin from '../../assets/icons/bin.svg'
import { useEffect } from 'react'

import ContainerEntry from '../Container/ContainerEntry'
import {
   getApplicationsRequest,
   removeApplicationRequest,
} from '../../redux/slices/crudSlice'
import { styled } from '@mui/material'

const ApplicationsTable = () => {
   const { applications } = useSelector((state) => state.applications)
   const dispatch = useDispatch()

   const deleteHandler = (id) => {
      const backendData = [].push(id)
      dispatch(removeApplicationRequest(backendData))
         .unwrap()
         .then((response) => console.log(response))
         .catch((error) => console.log(error))
   }

   useEffect(() => {
      dispatch(getApplicationsRequest())
   }, [])

   return (
      <ContainerEntry>
         <TableContainerStyled component={Paper}>
            <Table className="header">
               <TableHead>
                  <TableRow className="title">
                     <TableCell>
                        <input type="checkbox" />
                     </TableCell>
                     <TableCell>
                        <img src={bin} alt="bin" />
                     </TableCell>
                     <TableCell>№</TableCell>
                     <TableCell>Имя</TableCell>
                     <TableCell>Дата</TableCell>
                     <TableCell>Номер телефона</TableCell>
                     <TableCell sx={{ textAlign: 'center' }}>
                        Обработан
                     </TableCell>
                     <TableCell sx={{ textAlign: 'center' }}>
                        Действия
                     </TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {applications.length === 0 &&
                     applications?.map((application) => (
                        <TableRow key={application.id}>
                           <TableCell>
                              <input type="checkbox" />
                           </TableCell>
                           <TableCell></TableCell>
                           <TableCell>{application.id}</TableCell>
                           <TableCell>{application.lastName}</TableCell>
                           <TableCell>{application.date}</TableCell>
                           <TableCell>{application.phoneNumber}</TableCell>
                           <TableCell
                              sx={{
                                 display: 'flex',
                                 justifyContent: 'center',
                                 padding: '19px',
                              }}
                           >
                              <input
                                 type="checkbox"
                                 checked={application.status}
                              />
                           </TableCell>
                           <TableCell>
                              <img
                                 src={bin}
                                 alt="bin"
                                 onClick={() => deleteHandler(application.id)}
                              />
                           </TableCell>
                        </TableRow>
                     ))}
               </TableBody>
            </Table>
         </TableContainerStyled>
      </ContainerEntry>
   )
}
export default ApplicationsTable

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
