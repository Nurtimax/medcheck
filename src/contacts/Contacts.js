import React from 'react'
import { styled } from '@mui/material'

const Contacts = () => {
   return (
      <>
         <ContactContainer>
            <StyledContactHeader>
               <firstSpan>Главная </firstSpan> <secondSpan>Контакты</secondSpan>
            </StyledContactHeader>

            <StyledContactHeader1>
               <thirdSpan>Наши</thirdSpan> <fourthSpan>контакты</fourthSpan>
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
               <number>Контактные номера:</number>
               <PhoneNumber>+996(800) 000 000 ; +996(505) 000 000</PhoneNumber>
               <adress>Наш адрес:</adress>
               <Adress>Кыргызстан, г. Бишкек, Медерова 44 </Adress>
               <working>Режим работы клиники:</working>
               <TimeWorking>
                  Понедельник - суббота с 08:00 до 18:00.
               </TimeWorking>{' '}
               <email>Электронная почта :</email>
               <Email>medchek312.kg </Email>
            </StyledContactDetail>
         </ContactContainer>
         <MapCarta
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A251a275ce71d5d9e7a2148b3bf081344865e7b860f0a8c055561d5da306f4c56&amp;source=constructor"
            width="100%"
            height="400px"
         ></MapCarta>
      </>
   )
}

const ContactContainer = styled('div')(() => ({
   background: '#FFFFFF',
   fontFamily: 'Manrope',
   padding: '0 0 0 120px',
}))
const StyledContactHeader = styled('div')(() => ({
   marginTop: '40px',
   '& firstSpan secondSpan': {
      color: '#959595',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '19px',
   },
   '& secondSpan': {
      color: '#048741',
   },
}))
const StyledContactHeader1 = styled('div')(() => ({
   marginTop: '30px',
   marginBottom: '35px',
   '& thirdSpan': {
      color: '#22222',
      fontWeight: '600',
      fontSize: '36px',
      lineHeight: '49px',
   },
   '& fourthSpan': {
      color: '#048741',
      fontWeight: '600',
      fontSize: '36px',
      lineHeight: '49px',
   },
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
const MapCarta = styled('iframe')(() => ({}))

export default Contacts
