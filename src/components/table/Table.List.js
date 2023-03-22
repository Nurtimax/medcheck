import { styled, TableCell, TableRow } from '@mui/material'
import EditButton from '@mui/material/IconButton'
import DeleteButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import { Switch } from '@mui/material'

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'

const TableList = ({ row, editClick, removeClick, index }) => {
   const {
      expertFirstName,
      expertImage,
      expertLastName,
      expertPosition,
      expertStatus,
      id,
      expertTimeTable,
   } = row
   return (
      <TableRowStyle>
         <TableCell className="numbers">{index + 1}</TableCell>
         <TableCell>
            {expertStatus ? (
               <Switch color="error" />
            ) : (
               <Switch color="success" />
            )}
         </TableCell>
         <TableCell>
            <div className="user_info">
               <Avatar src={expertImage} />
               <div>
                  <div className="name">
                     <span>{expertFirstName}</span>
                     <span>{expertLastName}</span>
                  </div>
                  {/* <div className="speciality">{expertPosition}</div> */}
               </div>
            </div>
         </TableCell>
         <TableCell className="department">{expertPosition}</TableCell>
         <TableCell className="timetable">{expertTimeTable}</TableCell>
         <TableCell>
            <div className="actions">
               <EditButton onClick={() => editClick(id)}>
                  <EditIcon />
               </EditButton>
               <DeleteButton onClick={() => removeClick(id)}>
                  <DeleteIcon />
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
      fontSize: '15px',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
      display: 'flex',
      gap: '5px',
      color: '#222222',
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
