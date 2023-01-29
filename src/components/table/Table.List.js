import { styled, TableCell, TableRow } from '@mui/material'
import EditButton from '@mui/material/IconButton'
import DeleteButton from '@mui/material/IconButton'

const TableList = ({ row, editClick, removeClick }) => {
   return (
      <TableRowStyle>
         <TableCell className="numbers">{row.number}</TableCell>
         <TableCell>{row.status}</TableCell>
         <TableCell>
            <div className="user_info">
               <div>{row.userInfo.photo}</div>
               <div>
                  <div className="name">{row.userInfo.name}</div>
                  <div className="speciality">{row.userInfo.speciality}</div>
               </div>
            </div>
         </TableCell>
         <TableCell className="department">{row.department}</TableCell>
         <TableCell className="timetable">{row.timetable}</TableCell>
         <TableCell>
            <div className="actions">
               <EditButton onClick={editClick}>{row.actions.edit}</EditButton>
               <DeleteButton onClick={removeClick}>
                  {row.actions.delete}
               </DeleteButton>
            </div>
         </TableCell>
      </TableRowStyle>
   )
}
export default TableList

const TableRowStyle = styled(TableRow)(() => ({
   '& .numbers': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
   },
   '& .user_info': {
      display: 'flex',
      gap: '15px',
   },
   '& .name': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
   },
   '& .speciality': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      whiteSpace: 'nowrap',
      color: '#959595',
   },
   '& .department': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
   },
   '& .timetable': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
   },
   '& .actions': {
      display: 'flex',
      gap: '28px',
   },
}))
