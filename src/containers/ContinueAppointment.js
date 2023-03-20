import { Container, Grid, styled } from '@mui/material'
import Button from '../components/UI/Button'
//import { fetchUsers } from '../redux/slices/appointment-slice'
const ContinueAppointment = () => {
   return (
      <Container>
         <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
               <item>
                  <p>Статус</p>
                  <StyledButton bgColor="blue" variant="contained">
                     Подтверждён
                  </StyledButton>
                  <p>Имя</p>
                  <p>Фамилия</p>
                  <p>Email</p>
                  <p>Номер телефона</p>
               </item>
            </Grid>
            <Grid item xs={6} md={6}>
               <item>
                  <p>Дата и время</p>
                  <p>Специалист</p>
                  <p>Услуга</p>{' '}
               </item>
            </Grid>
         </Grid>
      </Container>
   )
}

export default ContinueAppointment

//const ContainerStyle = styled(ContainerStyle)(() => ({}))
const StyledButton = styled(Button)(() => ({
   // background: 'blue',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '19px',
   letterSpacing: '1px',
}))
