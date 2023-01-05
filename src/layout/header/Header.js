import React from 'react'
import styled from 'styled-components'
import iconLocation from '../../assets/icons/GeoPoint.svg'
import iconHour from '../../assets/icons/Hour.svg'
import iconSearching from '../../assets/icons/searching.svg'
import iconPhoneNumber from '../../assets/icons/iconTelephone.svg'
import iconInstagram from '../../assets/icons/whatsApp.svg'
import iconTelegram from '../../assets/icons/instagram.svg'
import iconWhatsApp from '../../assets/icons/telegram.svg'
import iconMedCheck from '../../assets/icons/MedCheck.svg'
import logoMedCheck from '../../assets/icons/MedCheckLogo.svg'

const Header = () => {
   return (
      <HeaderContainer>
         <FirstRow>
            <InFirstRow1>
               <ForPosition1>
                  <img src={iconLocation} alt="location" />
                  106452, г. Бишкек, Гражданская 119
               </ForPosition1>
               <ForPosition2>
                  <img src={iconHour} alt="hour" />
                  <Span> пн-сб</Span> 08:00 до 18:00
               </ForPosition2>
            </InFirstRow1>
            <InFirstRow2>
               <InputSearching type="text" placeholder="Поиск по сайту " />
               <Searching src={iconSearching} alt="searching" />
            </InFirstRow2>
            <InFirstRow3>
               <PhoneNumber src={iconPhoneNumber} alt="phone" />
               <p>+996(800) 000 000 +996(505) 000 000</p>
            </InFirstRow3>
            <InFirstRow4>
               <div>
                  <a href="https://www.instagram.com/">
                     <img src={iconInstagram} alt="whatsApp" />
                  </a>
               </div>
               <div>
                  <a href="https://web.telegram.org/k/">
                     <img src={iconTelegram} alt="instagram" />
                  </a>
               </div>
               <div>
                  <a href="https://www.whatsapp.com/?lang=ru">
                     <img src={iconWhatsApp} alt="telegram" />
                  </a>
               </div>
            </InFirstRow4>
         </FirstRow>
         <SecondRow>
            <ProjectLogos>
               <img src={logoMedCheck} alt="logo" />
               <img src={iconMedCheck} alt="medCheck" />
            </ProjectLogos>
            <NavigatePages>
               <li>О клинике</li>
               <li>Услуги</li>
               <li>Врачи</li>
               <li>Прайс</li>
               <li>Отзывы</li>
               <li>Контакты</li>
            </NavigatePages>
            <RecordButton>запись онлайн</RecordButton>
         </SecondRow>
      </HeaderContainer>
   )
}

const HeaderContainer = styled.header`
   width: 100%;
   background-color: #ffffff;
   position: fixed;
`

const FirstRow = styled.div`
   display: flex;
   justify-content: space-around;
   margin: 0 auto;

   width: 80%;
   align-items: center;
   border-bottom: 1px solid #c0bdbd;
`

const InFirstRow1 = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`

const Span = styled.span`
   color: #009344;
`

const ForPosition1 = styled.div`
   img {
      margin-right: 11px;
      margin-left: 2px;
   }
`
const ForPosition2 = styled.div`
   img {
      margin-right: 7px;
   }
`

const InFirstRow2 = styled.div`
   width: 300px;
   height: 30px;
   background-color: #f3f1f1;
   padding: 3px 0;
   border-radius: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
`
const InputSearching = styled.input`
   width: 250px;
   border: none;
   outline: none;
   background-color: inherit;
`

const Searching = styled.img`
   width: 17px;
   height: 17px;
   cursor: pointer;
`

const InFirstRow3 = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   width: 200px;
`

const PhoneNumber = styled.img`
   width: 17px;
   height: 17px;
   margin-bottom: 13px;
   cursor: pointer;
`

const InFirstRow4 = styled.div`
   display: flex;
   gap: 10px;
   div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #048741;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      cursor: pointer;
   }
`

const SecondRow = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   margin: 0 auto;
   width: 80%;
   margin-top: 10px;
`

const ProjectLogos = styled.div`
   display: flex;
   align-items: center;
   gap: 10px;
`

const NavigatePages = styled.nav`
   display: flex;

   gap: 20px;
   li {
      list-style: none;
      cursor: pointer;
   }
`

const RecordButton = styled.button`
   width: 200px;
   border: none;
   background: linear-gradient(#0cbb6b, #027b44); //#0cbb6b
   padding: 15px;
   border-radius: 25px;
   cursor: pointer;
   text-transform: uppercase;
   color: #ffffff;
`

export default Header
