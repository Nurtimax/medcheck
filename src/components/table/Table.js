import {
   styled,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import MuiTable from '@mui/material/Table'
import React from 'react'
import TableItem from './Table.List'
import { tableTitle } from '../../utils/constants/data'
import { tableData } from '../../utils/constants/data'

const Table = () => {
   return (
      <TableContainer>
         <MuiTableStyle>
            <TableHead>
               <TableRow>
                  {tableTitle.map((title) => (
                     <TableCellTitle key={title.id}>{title}</TableCellTitle>
                  ))}
               </TableRow>
            </TableHead>
            <TableBody>
               {tableData.map((row) => (
                  <TableItem key={row.id} row={row} />
               ))}
            </TableBody>
         </MuiTableStyle>
      </TableContainer>
   )
}

export default Table

const MuiTableStyle = styled(MuiTable)(() => ({
   borderRadius: '6px',
}))
const TableCellTitle = styled(TableCell)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '19px',
   whiteSpace: 'nowrap',
}))
