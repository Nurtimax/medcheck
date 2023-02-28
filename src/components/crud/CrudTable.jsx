import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useDispatch, useSelector } from 'react-redux'
import bin from '../../assets/icons/bin.svg'
import { IconButton, styled } from '@mui/material'
import { useEffect } from 'react'
import { fetchCrudDelete, fetchCrudGet } from '../../redux/slices/crudSlice'

const CrudTable = () => {
   const { data } = useSelector((state) => state.application)
   const dispatch = useDispatch()

   const deleteHandler = (e) => {
      dispatch(fetchCrudDelete({ id: e.target.id }))
      dispatch(fetchCrudGet())
   }

   useEffect(() => {
      dispatch(fetchCrudGet())
   }, [])

   return (
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
                  <TableCell>Обработан</TableCell>
                  <TableCell>Действия</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {data.items?.map((item) => (
                  <TableRow key={item.id}>
                     <TableCell>
                        <input type="checkbox" />
                     </TableCell>
                     <TableCell></TableCell>
                     <TableCell>{item.id}</TableCell>
                     <TableCell>{item.lastName}</TableCell>
                     <TableCell>{item.date}</TableCell>
                     <TableCell>{item.phoneNumber}</TableCell>
                     <TableCell>
                        <input type="checkbox" checked={item.status} />
                     </TableCell>
                     <TableCell>
                        <IconButton
                           src={bin}
                           alt="bin"
                           onClick={deleteHandler}
                        />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainerStyled>
   )
}
export default CrudTable
const TableContainerStyled = styled(TableContainer)(() => ({
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
