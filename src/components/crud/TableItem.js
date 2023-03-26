import { styled, TableCell, TableRow } from '@mui/material'
import React, { useState } from 'react'
import Alert from '../UI/Alert'
import { checkedApplicationRequest } from '../../redux/slices/crudSlice'
import { useDispatch } from 'react-redux'

const TableItem = ({ application, index }) => {
   const { id, firstName, date, phoneNumber, status } = application

   const [isAlert, setIsAlert] = useState(false)

   const [isSwitch, setIsSwitch] = useState(status)

   const dispatch = useDispatch()

   const checkedHandler = () => {
      setIsAlert(true)
      setIsSwitch(!isSwitch)
      dispatch(checkedApplicationRequest(id))
   }

   const closeAlert = () => {
      setIsAlert(false)
   }

   return (
      <TableRowStyle key={application.id}>
         <TableCell>{index + 1}</TableCell>
         <TableCell>{firstName}</TableCell>
         <TableCell>{date}</TableCell>
         <TableCell>{phoneNumber}</TableCell>
         <TableCell
            sx={{
               display: 'flex',
               justifyContent: 'center',
               padding: '19px',
            }}
         >
            {isAlert && (
               <Alert
                  open={isAlert}
                  onClose={closeAlert}
                  title="Заявка успешно обработан 👍"
               />
            )}
            <Checkbox
               className="checkbox"
               onClick={checkedHandler}
               type="checkbox"
               checked={isSwitch}
            />
         </TableCell>
      </TableRowStyle>
   )
}

export default TableItem

const TableRowStyle = styled(TableRow)(() => ({}))

const Checkbox = styled('input')(() => ({
   cursor: 'pointer',
   '-webkit-transition': '0.3s',
   transition: '0.3s',
   '&: hover': {
      boxShadow: ' 0 0 5pt 4pt #D3D3D3',
   },
}))
