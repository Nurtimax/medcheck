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
import Button from '../UI/Button'

const ApplicationsTable = () => {
   const { applications } = useSelector((state) => state.applications)
   const dispatch = useDispatch()

   const deleteHandler = (id) => {
      const backendData = [].push(id)
      dispatch(removeApplicationRequest(backendData)).unwrap()
   }

   useEffect(() => {
      dispatch(getApplicationsRequest())
   }, [])

   return (
      <Div>
         <ExpertCrudStyled>
            <Nav>
               <Speciality>Заявки</Speciality>
               <AddExperts>
                  <MyBtn variant="contained">Export to excel</MyBtn>
               </AddExperts>
            </Nav>

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
                                 <TableCell>
                                    {application.phoneNumber}
                                 </TableCell>
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
                                       onClick={() =>
                                          deleteHandler(application.id)
                                       }
                                    />
                                 </TableCell>
                              </TableRow>
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

const AddExperts = styled('div')(() => ({
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   borderRadius: '10px',
   width: '259px',
   height: '44px',
   alignItems: 'center',
   textDecoration: 'none',
}))

const MyBtn = styled(Button)(() => ({
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   borderRadius: '10px',
   width: '259px',
   height: '44px',
   alignItems: 'center',
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
