import {
   styled,
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableRow,
} from '@mui/material'
import EditIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import IconButtonStyle from '@mui/material/IconButton'
import Switch from '@mui/material/Switch'

const Tables = ({
   data,
   tableHead,
   checked,
   checkedClick,
   deleteClick,
   editClick,
}) => {
   return (
      <TableStyle sx={{ width: '500px', margin: '50px' }}>
         <TableHead>
            {tableHead.map((item) => (
               <TableRowStyle key={item.id}>
                  <TableCell className="groups">{item.number}</TableCell>
                  <TableCell className="groups">{item.status}</TableCell>
                  <TableCell className="groups">{item.speciality}</TableCell>
                  <TableCell className="groups">{item.otdelenie}</TableCell>
                  <TableCell className="groups">{item.time} </TableCell>
                  <TableCell className="groups">{item.action}</TableCell>
               </TableRowStyle>
            ))}
         </TableHead>
         <TableBody>
            {data.map((el) => (
               <TableRowStyle2 key={el.id}>
                  <TableCell className="miniGroups1">{el.number}</TableCell>
                  <TableCell>
                     <Switch
                        color="success"
                        className="switch"
                        onChange={checkedClick}
                        checked={checked}
                     />
                  </TableCell>
                  <TableCell className="miniGroups3">
                     <div className="general">
                        <img src={el.img} alt="foto" className="foto" />
                        <div>
                           <name>{el.name}</name>
                           <DoctorSpeciality>{el.speciality}</DoctorSpeciality>
                        </div>
                     </div>
                  </TableCell>
                  <TableCell className="miniGroups">{el.otdelenie}</TableCell>
                  <TableCell className="miniGroups">{el.time}</TableCell>
                  <TableCell>
                     <div className="icons">
                        <IconButtonStyle>
                           <EditIcon onClick={editClick} />
                        </IconButtonStyle>
                        <IconButtonStyle>
                           <DeleteIcon onClick={deleteClick} />
                        </IconButtonStyle>
                     </div>
                  </TableCell>
               </TableRowStyle2>
            ))}
         </TableBody>
      </TableStyle>
   )
}

export default Tables

const TableStyle = styled(Table)(() => ({
   borderRadius: '6px',
}))

const TableRowStyle = styled(TableRow)(() => ({
   '& .groups': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '19px',
      whiteSpace: 'nowrap',
   },
}))
const TableRowStyle2 = styled(TableRow)(() => ({
   '& .miniGroups': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
   },
   '& .miniGroups1': {
      fontWeight: '400',
   },
   '& .miniGroups3': {
      whiteSpace: 'nowrap',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
   },
   '& .general': {
      display: 'flex',
      gap: '10px',
      boxSizing: 'border-box',
   },
   '& .foto': {
      height: '50%',
   },
   '& .icons': {
      display: 'flex',
   },
}))
const DoctorSpeciality = styled('div')(() => ({
   fontSize: '14px',
   color: '#959595',
}))
