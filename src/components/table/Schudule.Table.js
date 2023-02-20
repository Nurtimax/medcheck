import { useTable } from 'react-table'
// import { schedule_data } from './../../utils/constants/data'

const Table = ({ schedule_data, schedule_coll }) => {
   const tableInstanse = useTable({ schedule_coll, schedule_data })

   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      tableInstanse
   return (
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
         <thead>
            {headerGroups?.map((headerGroup) => (
               <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                     <th
                        {...column.getHeaderProps()}
                        style={{
                           borderBottom: 'solid 3px red',
                           background: 'aliceblue',
                           color: 'black',
                           fontWeight: 'bold',
                        }}
                     >
                        {column.render('Header')}
                     </th>
                  ))}
               </tr>
            ))}
         </thead>
         <tbody {...getTableBodyProps()}>
            {rows?.map((row) => {
               prepareRow(row)
               return (
                  <tr {...row.getRowProps()}>
                     {row.cells?.map((cell) => {
                        return (
                           <td
                              {...cell.getCellProps()}
                              style={{
                                 padding: '10px',
                                 border: 'solid 1px gray',
                                 background: 'papayawhip',
                              }}
                           >
                              {cell.render('Cell')}
                           </td>
                        )
                     })}
                  </tr>
               )
            })}
         </tbody>
      </table>
   )
}

export default Table
