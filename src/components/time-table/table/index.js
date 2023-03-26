import {
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
   Paper,
   styled,
} from '@mui/material'
import { useTable } from 'react-table'

const MyTable = ({ columns, data }) => {
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
         columns,
         data,
      })

   return (
      <StyledTableContainer component={Paper}>
         <Table stickyHeader {...getTableProps()}>
            <TableHead>
               {headerGroups.map((headerGroup) => (
                  <TableRow
                     key={headerGroup.id}
                     {...headerGroup.getHeaderGroupProps()}
                  >
                     {headerGroup.headers.map((column) => (
                        <TableCell key={column.id} {...column.getHeaderProps()}>
                           {column.render('Header')}
                        </TableCell>
                     ))}
                  </TableRow>
               ))}
            </TableHead>
            <TableBody {...getTableBodyProps()}>
               {rows.map((row) => {
                  prepareRow(row)
                  return (
                     <TableRow key={row.id} {...row.getRowProps()}>
                        {row.cells.map((cell, i) => (
                           <TableCell key={i} {...cell.getCellProps()}>
                              {cell.render('Cell')}
                           </TableCell>
                        ))}
                     </TableRow>
                  )
               })}
            </TableBody>
         </Table>
      </StyledTableContainer>
   )
}

export default MyTable

const StyledTableContainer = styled(TableContainer)(() => ({
   width: '100%',
   '& th, td': {
      border: '1px solid #ccc',
   },
   '& td': {},
   '& th': {
      padding: '10px',
   },
   '& tr': {
      '& td::first-of-type': {
         minWidth: '180px',
         maxWidth: '180px',
         width: '180px',
      },
      '& td:not(::first-of-type)': {
         minWidth: '100px',
         maxWidth: '100px',
         width: '100px',
      },
   },
}))
