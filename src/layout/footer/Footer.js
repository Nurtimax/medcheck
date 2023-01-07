import React from 'react'
import { styled } from '@mui/material'
import logo from '../../assets/icons/LogoForProject.svg'
import emailIcon from '../../assets/icons/picto.svg'
import medCheck from '../../assets/icons/MedCheck.svg'
import geoPoint from '../../assets/icons/GeoPoint.svg'
import clock from '../../assets/icons/clock.svg'
import instagramIcon from '../../assets/icons/instagramIcon.svg'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import whatsAppIcon from '../../assets/icons/whatsAppIcon.svg'
import phone from '../../assets/icons/VectorPhone.svg'

const Footer = () => {
   return (
      <StyledFooterContainer>
         <FooterContainer>
            <FirstContainer>
               <StyledContainerIcon>
                  <img src={logo} alt="logo" />
                  <img src={medCheck} />
               </StyledContainerIcon>
               <p>Медицинская клиника «MedCheck»</p>
               <p>
                  Международная Медицинская клиника «MedCheck» это клиника в
                  которой применяются новейшие диагностические лечебные
                  технологии и ведут прием лучшие специалисты.
               </p>
            </FirstContainer>
            <SecondContainer>
               <p>Контактная информация</p>
               <AdressMed>
                  <img src={geoPoint} alt="GeoPoint" />
                  <span> 106452, г. Бишкек, Гражданская 119</span>
               </AdressMed>
               <TimeMed>
                  <img src={clock} alt="Clock" />
                  <span> пн-сб 08:00 до 18:00</span>
               </TimeMed>
               <PhoneBox>
                  <img src={phone} alt="Vector" />
                  <div>
                     <p>+996(800) 000 000</p>
                     <p>996(505) 000 000</p>
                  </div>
               </PhoneBox>
               <EmailBox>
                  <img src={emailIcon} alt="EmailIcon" />
                  <span> medchek.@gmail.com</span>
               </EmailBox>
            </SecondContainer>
            <ThirdContainer>
               <p>Мы в социальных сетях:</p>
               <Icons>
                  <a href="https://www.instagram.com/">
                     <img src={instagramIcon} alt="Vector2" />
                  </a>
                  <a href="https://web.telegram.org/k/">
                     <img src={telegramIcon} alt="Vector3" />
                  </a>
                  <a href="https://web.whatsapp.com/">
                     <img src={whatsAppIcon} alt="Vector4" />
                  </a>
               </Icons>
            </ThirdContainer>
         </FooterContainer>
         <StyledMain>
            <span>О клинике</span>
            <span>Услуги</span>
            <span>Врачи</span>
            <span>Прайс</span>
            <span>Отзывы</span>
            <span>Контакты</span>
         </StyledMain>
         <StyledFooterBottom>
            <span>© Peaksoft House 2023 | MedCheck | Все права защищены</span>
         </StyledFooterBottom>
      </StyledFooterContainer>
   )
}
const StyledFooterBottom = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   marginTop: '28px',
   marginBottom: '28px',
   ' & span': {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '19px',
      color: '#959595',
   },
}))

const StyledFooterContainer = styled('div')(() => ({
   width: '100%',
   backgroundColor: '#212529',
   fontFamily: 'Manrope',
   fontSize: '16px',
   color: '#cccccc',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
   cursor: 'pointer',
}))

const StyledMain = styled('div')(() => ({
   width: '70%',
   height: '70px',
   display: 'flex',
   justifyContent: 'center',
   borderBottom: '1px solid #6f7074',
   marginTop: '50px',
   marginLeft: '240px',
   ' & span': {
      marginLeft: '24px',
      color: '#cccccc',
   },
}))

const FooterContainer = styled('footer')(() => ({
   width: '100%',
   paddingTop: '70px',
   margin: 'auto',
   backgroundColor: '#212529',
   fontSize: '16px',
   color: '#cccccc',
   display: 'flex',
   justifyContent: 'space-around',
}))

const FirstContainer = styled('div')(() => ({
   width: '451px',
   height: '233px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-between',
   alignItems: 'flex-start',
   ' & p': {
      width: '441px',
      height: '88px',
      textAlign: 'start',
   },
}))

const SecondContainer = styled('div')(() => ({
   width: '293px',
   height: '188px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
   alignItems: 'flex-start',
   ' & p': {
      color: '#ffffff',
   },
   ' & span': {
      marginTop: '9px',
   },
}))

const ThirdContainer = styled('div')(() => ({
   ' & p': {
      margin: '0',
      color: '#ffffff',
   },
}))
const StyledContainerIcon = styled('div')(() => ({
   width: '233px',
   height: '79px',
   display: 'flex',
   justifyContent: 'space-between',
   color: '#ffffff',
}))

const PhoneBox = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   ' & p': {
      color: '#cccccc',
   },

   ' & img': {
      marginBottom: '33px',
   },
}))

const Icons = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'flex-start',
   marginTop: '20px',
   gap: '18px',
}))

const AdressMed = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   margin: '5px 0',
   ' & img': {
      marginRight: '3px',
   },
}))

const TimeMed = styled('div')(() => ({
   margin: '5px 0',
   gap: '30px',
   ' & img': {
      marginRight: '6px',
   },
}))
const EmailBox = styled('div')(() => ({
   ' & span': {
      marginLeft: '5px',
   },
}))

export default Footer
