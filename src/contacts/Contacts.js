import React from 'react'
import { styled } from '@mui/material'

const Contacts = () => {
   return (
      <>
         <ContactContainer>
            <StyledContactHeader1>
               <Span3>Наши</Span3> <Span4>контакты</Span4>
            </StyledContactHeader1>
            <StyledTextMain>
               <p>
                  Комфорт и спокойствие пациента — это часть качественного
                  лечения! <br />
                  Предупредите администратора, что вы едете к нам на машине и мы
                  предложим <br /> бесплатную подземную парковку при нашей
                  клинике.
               </p>
            </StyledTextMain>
            <StyledContactDetail>
               <div>Контактные номера:</div>
               <PhoneNumber>+996(800) 000 000 ; +996(505) 000 000</PhoneNumber>
               <div>Наш адрес:</div>
               <Adress>Кыргызстан, г. Бишкек, Медерова 44 </Adress>
               <div>Режим работы клиники:</div>
               <TimeWorking>
                  Понедельник - суббота с 08:00 до 18:00.
               </TimeWorking>
               <div>Электронная почта :</div>
               <Email>medchek312.kg </Email>
            </StyledContactDetail>
         </ContactContainer>
         <iframe
            src="https://yandex.ru/maps/10309/bishkek/?from=mapframe&ll=74.596782%2C42.851088&mode=routes&rtext=~42.844030%2C74.586697&rtt=auto&ruri=~&z=15"
            width="100%"
            height="400px"
         ></iframe>
      </>
   )
}

export default Contacts

const ContactContainer = styled('div')(() => ({
   width: '1440px',
   margin: '0 auto',
}))

const StyledContactHeader1 = styled('div')(() => ({
   marginTop: '30px',
   marginBottom: '35px',
}))

const StyledTextMain = styled('div')(() => ({
   '& p': {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#4D4E51',
   },
}))
const PhoneNumber = styled('div')(() => ({
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '25px',
   color: '#048741',
   marginBottom: '20px',
}))
const Adress = styled('div')(() => ({
   fontWeight: '500',
   fontSize: '18px',
   lineHeight: '25px',
   color: '#048741',
   marginBottom: '20px',
}))
const TimeWorking = styled('div')(() => ({
   fontWeight: '400',
   fontSize: '18px',
   lineHeight: '25px',
   color: '#048741',
   marginBottom: '20px',
}))
const Email = styled('div')(() => ({
   fontWeight: '400',
   fontSize: '18px',
   lineHeight: '25px',
   color: '#048741',
   marginBottom: '80px',
}))
const StyledContactDetail = styled('div')(() => ({
   cursor: 'pointer',
   '& number': {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#222222',
   },
   '& adress': {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#222222',
   },
   '& working': {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#222222',
   },
   '& email': {
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '25px',
      color: '#222222',
   },
}))

const Span3 = styled('span')(() => ({
   color: '#222222',
   fontWeight: '600',
   fontSize: '36px',
   lineHeight: '49px',
}))
const Span4 = styled('span')(() => ({
   color: '#048741',
   fontWeight: '600',
   fontSize: '36px',
   lineHeight: '49px',
}))
