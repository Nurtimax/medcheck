//import { useEffect, useState } from 'react'
//import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
//import { useSelector } from 'react-redux'
import bin from '../../assets/icons/bin.svg'
import { styled } from '@mui/material'

const CrudTable = () => {
   //const { data } = useSelector((state) => state.crudSlice)
   // console.log(data)
   // const [entry, setEntry] = useState([])
   // const [checked, setChecked] = useState(false)

   // const checkedHandler = () => {
   //    setChecked(!checked)
   // }
   // const getEntryQuery = async () => {
   //    try {
   //       const { data } = axios()
   //    } catch (error) {
   //       return console.log(error)
   //    }
   // }
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
            <TableBodyStyled>
               <TableRow>
                  <TableCell>
                     <input type="checkbox" />
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell>1</TableCell>
                  <TableCell>Айназик</TableCell>
                  <TableCell>12.01.23</TableCell>
                  <TableCell>+996 707 123 456</TableCell>
                  <TableCell>
                     {' '}
                     <input type="checkbox" />
                  </TableCell>
                  <TableCell>
                     {' '}
                     <img src={bin} alt="bin" />
                  </TableCell>
               </TableRow>

               {/* {data.items.map((row) => (
                  <TableRow
                     key={row.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">
                        {row.lastName}
                     </TableCell>
                     <TableCell align="right">{row.date}</TableCell>
                     <TableCell align="right">{row.phoneNumber}</TableCell>
                     <TableCell align="right">
                        <input
                           type="checkbox"
                            value={checked}
                            onClick={checkedHandler}
                        />
                     </TableCell>
                     <TableCell align="right">XXX</TableCell>
                  </TableRow>
               ))} */}
            </TableBodyStyled>
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
const TableBodyStyled = styled(TableBody)(() => ({}))
