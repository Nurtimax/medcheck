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
import Button from '../UI/Button'

const Table = () => {
   return (
      <Div>
         <p></p>
         <Button>Добавить</Button>
         <TableContainerStyled>
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
         </TableContainerStyled>
      </Div>
   )
}

export default Table

const MuiTableStyle = styled(MuiTable)(() => ({
   borderRadius: '6px',
   cursor: 'pointer',
}))

const TableCellTitle = styled(TableCell)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '14px',
   lineHeight: '19px',
   whiteSpace: 'nowrap',
}))

const TableContainerStyled = styled(TableContainer)(() => ({
   width: '1200px',
   margin: '0 auto',
   background: '#FFFFFF',
}))
const Div = styled('div')(() => ({
   background: '#E0E0E0',
   height: '100%',
}))
