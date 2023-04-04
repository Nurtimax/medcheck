import { styled, TableCell, TableRow } from '@mui/material'
import { ReactComponent as Delete } from './../../assets/icons/bin.svg'
import DeleteButton from '@mui/material/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { removePatientRequest } from '../../redux/slices/patientsSlice'
import { useState } from 'react'
import Modal from '../../components/UI/Modal'
import Button from '../../components/UI/Button'
import LoadingSpinner from '../../components/UI/LodaingSpinner'

const TableItem = ({ patient, index }) => {
   const {
      id,
      userName,
      userEmail,
      userPhoneNumber,
      expert,
      serviceName,
      localDate,
      localTime,
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
         <TableCell>{index + 1}</TableCell>
         <TableCell>{userName}</TableCell>
         <TableCell>{userPhoneNumber}</TableCell>
         <TableCell>{userEmail}</TableCell>
         <TableCell>{serviceName.serviceName}</TableCell>
         <TableCell>{expert.fullName}</TableCell>
         <TableCell>
            {localDate} {localTime}
         </TableCell>
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
   width: '1200px',
   '& .patientInfo': {
      display: 'flex',
      gap: '5px',
      whiteSpace: 'nowrap',
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
      paddingTop: '15px',
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
