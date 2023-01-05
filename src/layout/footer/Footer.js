import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/icons/LogoForProject.svg'
import EmailIcon from '../../assets/icons/picto.svg'
import MedCheck from '../../assets/icons/MedCheck.svg'
import GeoPoint from '../../assets/icons/GeoPoint.svg'
import Clock from '../../assets/icons/clock.svg'
import Vector2 from '../../assets/icons/Vector 2.svg'
import Vector3 from '../../assets/icons/Vector 3.svg'
import Vector4 from '../../assets/icons/Vector 4.svg'
import phone from '../../assets/icons/VectorPhone.svg'

const Footer = () => {
   return (
      <StyledFoterContainer>
         <FooterContainer>
            <FirstContainer>
               <StyledContainerIcon>
                  <img src={Logo} alt="logo" />
                  <img src={MedCheck} />
               </StyledContainerIcon>
               <p>Медицинская клиника «MedCheck»</p>
               <span>
                  Международная Медицинская клиника «MedCheck» это клиника в
                  которой применяются новейшие диагностические лечебные
                  технологии и ведут прием лучшие специалисты.
               </span>
            </FirstContainer>
            <SecondContainer>
               <p>Контактная информация</p>
               <AdressMed>
                  <img src={GeoPoint} alt="GeoPoint" />
                  <span> 106452, г. Бишкек, Гражданская 119</span>
               </AdressMed>
               <TimeMed>
                  <img src={Clock} alt="Clock" />
                  <span> пн-сб 08:00 до 18:00</span>
               </TimeMed>
               <PhoneBox>
                  <img src={phone} alt="Vector" />
                  <div>
                     <p>+996(800) 000 000</p>
                     <p>996(505) 000 000</p>
                  </div>
               </PhoneBox>
               <div>
                  <img src={EmailIcon} alt="EmailIcon" />
                  <span> medchek.@gmail.com</span>
               </div>
            </SecondContainer>
            <ThirdContainer>
               <p>Мы в социальных сетях:</p>
               <Icons>
                  <img src={Vector2} alt="Vector2" />
                  <img src={Vector3} alt="Vector3" />
                  <img src={Vector4} alt="Vector4" />
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
      </StyledFoterContainer>
   )
}
const StyledFooterBottom = styled.div`
   margin-top: 28px;
   margin-bottom: 28px;
   span {
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: #959595;
   }
`
const StyledFoterContainer = styled.div`
   width: 1440px;
   background-color: #212529;
   font-family: 'Manrope';
   font-size: 16px;
   text-align: center;
   color: #cccccc;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const StyledMain = styled.div`
   width: 1200px;
   height: 70px;
   border-bottom: 1px solid #6f7074;
   margin-top: 50px;
   margin-left: 100px;
   span {
      margin-left: 24px;
      color: #cccccc;
   }
`
const FooterContainer = styled.footer`
   width: 1440px;
   padding-top: 70px;
   background-color: #212529;
   font-family: 'Manrope';
   font-size: 16px;
   color: #cccccc;
   display: flex;
   justify-content: space-around;
`
const FirstContainer = styled.div`
   width: 451px;
   height: 233px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   span {
      width: 441px;
      height: 88px;
      text-align: start;
   }
`
const SecondContainer = styled.div`
   width: 293px;
   height: 188px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: flex-start;
   p {
      color: #ffffff;
   }
`
const ThirdContainer = styled.div`
   p {
      margin: 0;
      color: #ffffff;
   }
`
const StyledContainerIcon = styled.div`
   width: 233px;
   height: 79px;
   display: flex;
   justify-content: space-between;
   color: #ffffff;
`
const PhoneBox = styled.div`
   display: flex;
   gap: 10px;
   p {
      color: #cccccc;
   }

   img {
      margin-bottom: 33px;
   }
`
const Icons = styled.div`
   display: flex;
   justify-content: flex-start;
   cursor: pointer;
   img {
      margin: 0;
      margin: 15px 10px;
   }
`

const AdressMed = styled.div`
   gap: 10px;
   margin: 5px 0;
   img {
      margin-right: 7px;
   }
`

const TimeMed = styled.div`
   margin: 5px 0;
   gap: 30px;

   img {
      margin-right: 5px;
   }
`

export default Footer
