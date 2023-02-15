import React, { useMemo } from 'react'
import { useTable } from 'react-table'

const ScheduleTable = ({ data }) => {
   const columns = useMemo(
      () => [
         {
            Header: 'Дата',
            accessor: 'date',
         },
         {
            Header: 'Время',
            accessor: 'time',
         },
         {
            Header: 'Мероприятие',
            accessor: 'event',
         },
         {
            Header: 'Место',
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
      <table {...getTableProps()}>
         <thead>
            {headerGroups.map((headerGroup) => (
               <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                     <th key={column.id} {...column.getHeaderProps()}>
                        {column.render('Header')}
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
               prepareRow(row)
               return (
                  <tr key={row.id} {...row.getRowProps()}>
                     {row.cells.map((cell) => (
                        <td key={cell.id} {...cell.getCellProps()}>
                           {cell.render('Cell')}
                        </td>
                     ))}
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
}

export default ScheduleTable
