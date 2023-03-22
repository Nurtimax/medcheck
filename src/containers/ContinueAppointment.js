import { Container, Grid, styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchUsersId } from '../redux/slices/appointment-slice'
const ContinueAppointment = () => {
   const { id } = useParams()
   const dispatch = useDispatch()

   const { data } = useSelector((store) => store.appointment)

   useEffect(() => {
      dispatch(fetchUsersId(Number(id)))
   }, [id])

   return (
      <ContainerStyled>
         <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
               <div>
                  <p>Статус</p>
                  <button>Подтверждён</button>
                  <p>Имя</p>
                  <span>{data.userFirstName}</span>
                  <p>Фамилия</p>
                  <span>{data.userLastName}</span>
                  <p>Email</p>
                  <span>{data.userEmail}</span>
                  <p>Номер телефона</p>
                  <span>{data.userPhoneNumber}</span>
               </div>
            </Grid>
            <Grid item xs={6} md={6}>
               <div>
                  <p>Дата и время</p>
                  <span>{data.recordedDate}</span> <br />
                  <span>{data.recordedTime}</span>
                  <p>Специалист</p>
                  {data?.clinicService?.experts?.map((item) => (
                     <span key={item.id}>
                        {item.expertFirstName}
                        {item.expertLastName}
                     </span>
                  ))}
                  <p>Услуга</p>
                  <span>{data?.clinicService?.clinicServiceName}</span>
               </div>
            </Grid>
         </Grid>
      </ContainerStyled>
   )
}

export default ContinueAppointment

const ContainerStyled = styled(Container)(() => ({
   '& p': {
      color: '#4D4E51',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '17px',
   },
   '& span': {
      color: '#222222',
      fontFamily: 'Manrope',
      fontSize: '16px',
      lineHeight: '22px',
   },
   '& button': {
      background: '#346EFB',
      color: '#FFFFFF',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '19px',
      letterSpacing: '1px',
      borderRadius: '5px',
      border: 'none',
   },
}))
