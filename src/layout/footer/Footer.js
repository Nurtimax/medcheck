import React from 'react'
import { styled } from '@mui/material'
import logo from '../../assets/icons/LogoForProject.svg'
import emailIcon from '../../assets/icons/picto.svg'
import medCheck from '../../assets/icons/medCheck2.svg'
import geoPoint from '../../assets/icons/GeoPoint.svg'
import clock from '../../assets/icons/clock.svg'
import instagramIcon from '../../assets/icons/instagramIcon.svg'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import whatsAppIcon from '../../assets/icons/whatsAppIcon.svg'
import phone from '../../assets/icons/phone.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Footer = () => {
   const { isAuth } = useSelector((state) => state.auth)
   return (
      <StyledFooterContainer>
         <FooterContainer>
            <FirstContainer>
               <StyledContainerIcon>
                  <img src={logo} alt="logo" />
                  <img className="medCheckIcon" src={medCheck} />
               </StyledContainerIcon>
               <p className="medClinic">Медицинская клиника «MedCheck»</p>
               <p>
                  Международная Медицинская клиника «MedCheck» это клиника в
                  которой применяются новейшие диагностические лечебные
                  технологии и ведут прием лучшие специалисты.
               </p>
            </FirstContainer>
            <SecondContainer>
               <p>Контактная информация</p>
               <AdressMed>
                  <img src={geoPoint} alt="geoPoint" />
                  <span> 106452, г. Бишкек, Гражданская 119</span>
               </AdressMed>
               <TimeMed>
                  <img src={clock} alt="clock" />
                  <span> пн-сб 08:00 до 18:00</span>
               </TimeMed>
               <PhoneBox>
                  <img src={phone} alt="phone" />
                  <div>
                     <p>+996(800) 000 000</p>
                     <p> +996(505) 000 000</p>
                  </div>
               </PhoneBox>
               <EmailBox>
                  <img src={emailIcon} alt="emailIcon" />
                  <span> medchek.@gmail.com</span>
               </EmailBox>
            </SecondContainer>
            <ThirdContainer>
               <p>Мы в социальных сетях:</p>
               <Icons>
                  <a href="https://www.instagram.com/">
                     <img src={instagramIcon} alt="instagramIcon" />
                  </a>
                  <a href="https://web.telegram.org/k/">
                     <img src={telegramIcon} alt="telegramIcon" />
                  </a>
                  <a href="https://web.whatsapp.com/">
                     <img src={whatsAppIcon} alt="whatsAppIcon" />
                  </a>
               </Icons>
            </ThirdContainer>
         </FooterContainer>
         <StyledMain>
            <LinkStyle to={isAuth ? '/about_clinic' : '/sign_up'}>
               О клинике
            </LinkStyle>
            <LinkStyle to={isAuth ? '/services' : '/sign_up'}>Услуги</LinkStyle>
            <LinkStyle to={isAuth ? '/doctors' : '/sign_up'}>Врачи</LinkStyle>
            <LinkStyle to={isAuth ? '/price' : '/sign_up'}>Прайс</LinkStyle>
            <LinkStyle to={isAuth ? '/feedbacks' : '/sign_up'}>
               Отзывы
            </LinkStyle>
            <LinkStyle to={isAuth ? '/contacts' : '/sign_up'}>
               Контакты
            </LinkStyle>
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
   fontFamily: '"Manrope" , sans-serif',
   fontSize: '16px',
   color: '#cccccc',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'space-around',
}))

const StyledMain = styled('div')(() => ({
   width: '70%',
   height: '70px',
   display: 'flex',
   justifyContent: 'center',
   borderBottom: '1px solid #6f7074',
   marginTop: '50px',
   marginLeft: '240px',
}))

const LinkStyle = styled(Link)(() => ({
   marginLeft: '24px',
   color: '#cccccc',
   cursor: 'pointer',
   textDecoration: 'none',
   '&:hover': {
      color: '#027B44',
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

   '& .medClinic': {
      marginTop: '30px',
   },

   '& .medCheckIcon': {},
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
