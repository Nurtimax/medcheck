import { styled, TableCell, TableRow } from '@mui/material'
import EditButton from '@mui/material/IconButton'
import DeleteButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import { Switch } from '@mui/material'

import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchExpertRequest } from '../../redux/slices/expertSlice'
import LoadingSpinner from '../UI/LodaingSpinner'
import Modal from '../.././components/UI/Modal'
import Button from '../../components/UI/Button'
import Alert from '../UI/Alert'

const TableList = ({ row, editClick, removeClick, index }) => {
   const {
      expertFirstName,
      expertLastName,
      expertImage,
      expertPosition,
      expertStatus,
      id,
      expertTimeTable,
      service,
   } = row

   const [isSwitch, setIsSwitch] = useState(expertStatus)
   const dispatch = useDispatch()

   const [isModalOpen, setIsModalOpen] = useState(false)
   const [isAlert, setIsAlert] = useState(false)
   const { isLoading } = useSelector((state) => state.addExpert)

   const addSwitch = () => {
      setIsAlert(true)
      setIsSwitch(!isSwitch)
      dispatch(switchExpertRequest(id))
   }
   const handleDeleteClick = () => {
      setIsModalOpen(true)
   }

   const handleDeleteConfirm = () => {
      removeClick(id)
      setIsModalOpen(false)
   }

   const handleDeleteCancel = () => {
      setIsModalOpen(false)
   }

   const closeAlert = () => {
      setIsAlert(false)
   }

   return (
      <TableRowStyle isSwitch={isSwitch}>
         {isLoading && <LoadingSpinner />}
         <TableCell className="numbers">{index + 1}</TableCell>
         <TableCell>
            {isAlert && (
               <Alert
                  open={isAlert}
                  onClose={closeAlert}
                  title="Статус доктора успешно изменен 👍"
               />
            )}
            <Switch
               color={isSwitch ? 'success' : 'error'}
               onClick={addSwitch}
               checked={isSwitch}
            />
         </TableCell>
         <TableCell>
            <div className="user_info">
               <AvatarStyle isSwitch={isSwitch} src={expertImage} />
               <div>
                  <div className="name">
                     <span>{expertFirstName}</span>
                     <span>{expertLastName}</span>
                  </div>
                  <div className="speciality">{expertPosition}</div>
               </div>
            </div>
         </TableCell>
         <TableCell className="department">{service}</TableCell>
         <TableCell className="timetable">{expertTimeTable}</TableCell>
         <TableCell>
            <div className="actions">
               <EditButton onClick={() => editClick(id)}>
                  <EditIcon />
               </EditButton>
               <DeleteButton onClick={handleDeleteClick}>
                  <DeleteIcon />
               </DeleteButton>
            </div>
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
                     onClick={handleDeleteConfirm}
                  >
                     Удалить
                  </ButtonStyle>
               </div>
            </Container>
         </ModalStyle>
      </TableRowStyle>
   )
}
export default TableList

const TableRowStyle = styled(TableRow)(({ isSwitch }) => ({
   '& .numbers': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '22px',
      whiteSpace: 'nowrap',
      color: isSwitch ? '#222222' : '#707070',
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
      color: isSwitch ? '#222222' : '#707070',
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
      color: isSwitch ? '#222222' : '#707070',
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

const AvatarStyle = styled(Avatar)(({ isSwitch }) => ({
   filter: isSwitch ? 'brightness(100%)' : 'brightness(70%)',
}))
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
