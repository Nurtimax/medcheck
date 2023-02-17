import {
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@mui/material'
import React, { useMemo } from 'react'
import { useTable } from 'react-table'

const ScheduleTable = ({ data }) => {
   const columns = useMemo(
      () => [
         {
            Header: 'Специалисты',
            accessor: 'doctorInfo.name',
         },
         {
            Header: 'Пн <br/> 1 Май',
            accessor: 'time',
         },
         {
            Header: 'Пн <br/> 1 Май',
            accessor: 'event',
         },
         {
            Header: 'Пн <br/> 1 Май',
            accessor: 'location',
         },
      ],
      []
   )

   const tableData = useMemo(() => data, [data])

   const tableInstance = useTable({ columns, data: tableData })

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstance

   return (
      <TableContainer {...getTableProps()} style={{ border: 'solid 1px blue' }}>
         <TableHead>
            {headerGroups.map((headerGroup) => (
               <TableRow
                  key={headerGroup.id}
                  {...headerGroup.getHeaderGroupProps()}
               >
                  {headerGroup.headers.map((column) => (
                     <TableHead
                        key={column.id}
                        {...column.getHeaderProps()}
                        style={{
                           borderBottom: 'solid 3px red',
                           background: 'aliceblue',
                           color: 'black',
                           fontWeight: 'bold',
                        }}
                     >
                        {column.render('Header')}
                     </TableHead>
                  ))}
               </TableRow>
            ))}
         </TableHead>
         <TableBody {...getTableBodyProps()}>
            {rows.map((row) => {
               prepareRow(row)
               return (
                  <TableRow key={row.id} {...row.getRowProps()}>
                     {row.cells.map((cell) => {
                        return (
                           <TableCell
                              key={cell.id}
                              {...cell.getCellProps()}
                              style={{
                                 padding: '10px',
                                 border: 'solid 1px gray',
                                 background: 'papayawhip',
                              }}
                           >
                              <TableRow>{}</TableRow>
                              {cell.render('Cell')}
                           </TableCell>
                        )
                     })}
                  </TableRow>
               )
            })}
         </TableBody>
      </TableContainer>
   )
}

export default ScheduleTable
