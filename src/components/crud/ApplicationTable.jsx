import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import ContainerEntry from '../UI/ContainerEntry'
import { getApplicationsRequest } from '../../redux/slices/crudSlice'
import { styled } from '@mui/material'
import TableItem from './TableItem'

import iconSearching from '../../assets/icons/searching.svg'
import LoadingSpinner from '../UI/LodaingSpinner'

const ApplicationsTable = () => {
   const { applications, isLoading } = useSelector(
      (state) => state.applications
   )
   const dispatch = useDispatch()

   const [sortData, setSortData] = useState(applications)

   useEffect(() => {
      dispatch(getApplicationsRequest())
   }, [])

   function handleChange(event) {
      const filterData = applications.filter((item) =>
         item.firstName.toLowerCase().includes(event.toLowerCase())
      )
      setSortData(filterData)
   }

   useEffect(() => {
      setSortData(applications)
   }, [applications])
   return (
      <Div>
         {isLoading && <LoadingSpinner />}
         <ExpertCrudStyled>
            <Nav>
               <Speciality>Заявки</Speciality>
            </Nav>

            <SearchStyled>
               <InputSearching
                  type="text"
                  onChange={(e) => handleChange(e.target.value)}
                  placeholder="Поиск"
               />
               <Searching src={iconSearching} alt="searching" />
            </SearchStyled>

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
                        {sortData?.map((application, index) => (
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

const SearchStyled = styled('div')(() => ({
   width: '600px',
   height: '40px',
   backgroundColor: '#FFFFFF',
   padding: '3px 0',
   borderRadius: '24px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginBottom: '20px',
}))

const InputSearching = styled('input')(() => ({
   width: '550px',
   border: 'none',
   outline: 'none',
   backgroundColor: 'inherit',
}))
const Searching = styled('img')(() => ({
   width: '17px',
   height: '17px',
   cursor: 'pointer',
}))
