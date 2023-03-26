import {
   styled,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material'
import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { SCHEDULE_DATA } from '../../utils/constants/schedule'
import { SCHEDULE_COLL } from '../../utils/constants/schedule'

const SchuduleTable = () => {
   const data = useMemo(() => SCHEDULE_DATA, [])
   const columns = useMemo(() => SCHEDULE_COLL, [])

   const tableInstanse = useTable({
      columns,
      data,
   })

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstanse

   return (
      <TableStyle {...getTableProps}>
         <TableHeadStyle>
            {headerGroups.map((headerGroup) => (
               <TableRowStyle
                  key={headerGroup.id}
                  {...headerGroup.getHeaderGroupProps}
               >
                  {headerGroup.headers.map((column) => (
                     <TableCollCellStyle
                        key={column.id}
                        {...column.getHeaderProps()}
                     >
                        <div>
                           <p>{column.Header.doctor}</p>
                           <div>{column.Header.day}</div>
                           <div>{column.Header.date}</div>
                        </div>
                     </TableCollCellStyle>
                  ))}
               </TableRowStyle>
            ))}
         </TableHeadStyle>
         <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
               prepareRow(row)
               return (
                  <TableRowStyle2 key={row.id} {...row.getRowProps()}>
                     {row.cells.map((cell) => {
                        return (
                           <TableCellStyle
                              key={cell.id}
                              {...cell.getCellProps()}
                           >
                              {cell.render('Cell')}
                           </TableCellStyle>
                        )
                     })}
                  </TableRowStyle2>
               )
            })}
         </TableBody>
      </TableStyle>
   )
}

export default SchuduleTable

const TableStyle = styled(Table)(() => ({
   margin: '0 auto',
   background: '#D6EEEE',
   borderCollapse: 'collapse',
   border: '1px solid #D9D9D9',
   boxSizing: 'border-box',
}))
const TableHeadStyle = styled(TableHead)(() => ({
   boxSizing: 'border-box',
}))

const TableCollCellStyle = styled(TableCell)(() => ({
   boxSizing: 'border-box',
   border: '1px solid #D9D9D9',
   fontFamily: 'Open Sans',
   fontStyle: 'normal',
   fontWeight: '600',
   fontSize: '12px',
   lineHeight: '16px',
   letterSpacing: '0.02em',
   textTransform: 'uppercase',
   textAlign: 'center',
}))

const TableRowStyle2 = styled('tr')(() => ({
   boxSizing: 'border-box',
   '&:nth-of-type(even)': {
      backgroundColor: '#f2f2f2',
   },
}))
const TableRowStyle = styled(TableRow)(() => ({}))

const TableCellStyle = styled(TableCell)(() => ({
   boxSizing: 'border-box',
   border: '1px solid #D9D9D9',
   height: '158px',
   width: '190px',
   '&:hover': {
      backgroundColor: ' #ddd',
   },
}))
