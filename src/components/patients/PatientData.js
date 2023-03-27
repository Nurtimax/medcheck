import { styled, TableCell, TableRow } from '@mui/material'
import { ReactComponent as Delete } from './../../assets/icons/bin.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'

import EditButton from '@mui/material/IconButton'
import DeleteButton from '@mui/material/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { removePatientRequest } from '../../redux/slices/patientsSlice'
import { useState } from 'react'
import Modal from '../UI/Modal'
import Button from '../UI/Button'
import LoadingSpinner from '../UI/LodaingSpinner'

const TableItem = ({ patient, index }) => {
   const {
      id,
      userFirstName,
      userLastName,
      userEmail,
      date,
      userPhoneNumber,
      status,
   } = patient

   const dispatch = useDispatch()
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [items, setItems] = useState([])
   const { isLoading } = useSelector((state) => state.patients)

   const removeClickHandler = (id) => {
      setIsModalOpen(true)
      dispatch(removePatientRequest(id))
         .unwrap()
         .then(() => setItems(items.filter((item) => item.id !== id)))
   }

   const handleDeleteCancel = () => {
      setIsModalOpen(false)
   }

   return (
      <TableRowStyle key={patient.id}>
         {isLoading && <LoadingSpinner />}
         <TableCell>
            <EditButton>
               <EditIcon />
            </EditButton>
         </TableCell>
         <TableCell>{index + 1}</TableCell>
         <TableCell className="patientInfo">
            <p>{userFirstName}</p>
            <p>{userLastName}</p>
         </TableCell>
         <TableCell>{userPhoneNumber}</TableCell>
         <TableCell>{userEmail}</TableCell>
         <TableCell>{date ? date : '- - -'}</TableCell>
         <TableCell className="checkbox">
            <Checkbox checked={status} className="checkbox" type="checkbox" />
         </TableCell>
         <TableCell>
            <DeleteButton>
               <Delete onClick={removeClickHandler} />
            </DeleteButton>
         </TableCell>
         <ModalStyle open={isModalOpen} closeModal={handleDeleteCancel}>
            {isLoading && <LoadingSpinner />}
            <Container>
               <p className="text">Вы точно хотите удалить?</p>
               <div className="button">
                  <ButtonStyle variant="outlined" onClick={handleDeleteCancel}>
                     Отменить
                  </ButtonStyle>
                  <ButtonStyle
                     variant="contained"
                     onClick={() => removeClickHandler(id)}
                  >
                     Удалить
                  </ButtonStyle>
               </div>
            </Container>
         </ModalStyle>
      </TableRowStyle>
   )
}

export default TableItem

const TableRowStyle = styled(TableRow)(() => ({
   '& .patientInfo': {
      display: 'flex',
      gap: '5px',
   },
   '& .checkbox': {
      paddingLeft: '50px',
   },
}))

const Checkbox = styled('input')(() => ({}))

const ModalStyle = styled(Modal)(() => ({
   '& .text': {
      fontFamily: 'Manrope',
      fontSize: '20px',
      fontWeight: '500',
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: ' 25px',
   },
   '& .button': {
      display: 'flex',
      justifyContent: 'space-around',
      gap: '20px',
   },
}))
const Container = styled('div')(() => ({}))
const ButtonStyle = styled(Button)(() => ({
   variant: 'outlined',
   width: '150px',
   height: '45px',
}))
