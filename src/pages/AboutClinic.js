import React from 'react'
import { styled } from '@mui/material'
import womenSignature from '../assets/images/signature.jpg'
import womenPhoto from '../assets/images/women.jpg'
import photoMedCenter from '../assets/images/photoMedCenter.jpg'
import photoMedPersonal from '../assets/images/photoMedPersonal.jpg'
import photoMedPersonal1 from '../assets/images/photoMedPersonal1.jpg'
import photoMedPersonal2 from '../assets/images/photoMedPersonal2.jpg'
import Button from '../components/UI/Button.jsx'
import { Link } from 'react-router-dom'

const AboutClinicPage = () => {
   return (
      <>
         <Container>
            <StyledHeaderTitle>
               <thirdSpan>Здоровье — самое </thirdSpan>
               <fourthSpan>ценное в жизни</fourthSpan>
            </StyledHeaderTitle>{' '}
            <TopContainer>
               <TextMain>
                  <p className="textSection">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum
                  </p>
                  <p className="textSection1">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna
                     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                     occaecat cupidatat non proident, sunt in culpa qui officia
                     deserunt mollit anim id est laborum
                  </p>{' '}
                  <Picture>
                     <img src={womenSignature} alt="women" />
                  </Picture>
               </TextMain>
               <div>
                  <PictureSection>
                     <PictureBlock>
                        <img
                           className="imgManager"
                           src={womenPhoto}
                           alt="manager"
                        />
                        <p className="managerStyle">
                           Руководитель клиники Medical Clinic
                        </p>
                        <p className="nameStyle">Аниса Михаилова</p>
                     </PictureBlock>
                  </PictureSection>
               </div>
            </TopContainer>
            <BottomContainer>
               <BlockTitle>
                  <span className="titleSpan">О нашей клинике</span>
                  <span className="titleSpan1">“MedCheck”</span>
               </BlockTitle>
               <StyledBottomMain>
                  <TextBottomMain>
                     <p className="firstText">
                        Вся наша команда готова обеспечить вам медицинский уход
                        и заботу на самом высоком уровне. Наша главная задача —
                        оказать Вам теплый прием и обеспечить самый лучший
                        медицинский уход. У нас Вы в хороших руках! В нашей
                        клинике используются только качественные материалы и
                        проверенные технологии. Для каждого клиента специалисты
                        нашей клиники разработают индивидуальный план лечения,
                        подробно рассказывая о каждом этапе.
                     </p>
                     <p className="secondText">
                        Доброжелательность и уважительное отношение к пациентам,
                        не только материальная, но и моральная ответственность
                        за результаты лечения — все это взято за основу политики
                        Medical Clinic. Профессионализм и высокое качество
                        оказываемых услуг помогают нам привлечь пациентов
                        которые рекомендуют нас своим родным и близким.
                     </p>
                     <p className="thirdText">
                        Уже 20 лет мы работаем на уровне лучших мировых
                        стандартов, внедряя и развивая передовые методы лечения
                        для сохранения здоровья наших пациентов
                     </p>
                     <LinkButton to="/contacts">
                        <Button variant="outlined" width="400px">
                           Записаться на консультацию
                        </Button>
                     </LinkButton>
                  </TextBottomMain>
                  <PictureSection1>
                     <img src={photoMedCenter} alt="photoMedCenter" />
                     <PictureBottomSection>
                        <img src={photoMedPersonal} alt="photoMedPersonal" />
                        <img src={photoMedPersonal1} alt="photoMedPersonal1" />
                        <img src={photoMedPersonal2} alt="photoMedPersonal2" />
                     </PictureBottomSection>
                  </PictureSection1>
               </StyledBottomMain>
            </BottomContainer>
         </Container>
      </>
   )
}

const Container = styled('div')(() => ({
   width: '1440px',
   margin: '0 auto',
   paddingTop: '26px',
}))

const TopContainer = styled('div')(() => ({
   display: ' flex',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '160.02%',
   color: '#4D4E51',
}))
const TextMain = styled('div')(() => ({
   height: '517px',
}))

const StyledHeaderTitle = styled('div')(() => ({
   paddingBottom: '40px',
   fontWeight: '600',
   fontSize: '36px',
   lineHeight: '49px',
   '& thirdSpan': {
      color: '#222222',
   },
   '& fourthSpan': {
      color: '#048741',
   },
}))
const Picture = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-end',
}))
const LinkButton = styled(Link)(() => ({
   textDecoration: 'none',
   outline: 'none',
}))
const PictureSection = styled('div')(() => ({
   width: '586px',
   height: '385px',
   border: '0.851742px solid #D2F9E4',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignContent: 'center',
   '& .imgDoctor': {
      width: '359px',
      height: '420px',
   },
   '& .managerStyle': {
      color: ' #048741',
      fontSize: '18px',
      lineHeight: '25px',
   },
   '& .nameStyle': {
      color: '#222222',
      fontSize: '22px',
      lineHeight: '30px',
   },
}))
const PictureBlock = styled('div')(() => ({
   paddingLeft: '200px',
   paddingTop: '210px',
}))
const BlockTitle = styled('div')(() => ({
   marginBottom: '40px',
}))
const BottomContainer = styled('div')(() => ({
   marginTop: '80px',
   fontWeight: '600',
   fontSize: '36px',
   lineHeight: '49px',
   '& .titleSpan': {
      color: '#222222',
   },
   '& .titleSpan1': {
      color: '#048741',
   },
   '& .firstText': {
      fontWeight: '200',
      fontSize: '16px',
      lineHeight: '160%',
      color: '#4D4E51',
      margin: '0',
   },

   '& .secondText': {
      fontWeight: '200',
      fontSize: '16px',
      lineHeight: '160%',
      color: '#4D4E51',
   },
   '& .thirdText': {
      fontWeight: '200',
      fontSize: '16px',
      lineHeight: '160%',
      color: '#4D4E51',
   },
}))
const StyledBottomMain = styled('div')(() => ({
   display: 'flex',
   gap: '150px',
   fontWeight: '600',
   fontSize: '36px',
   lineHeight: '49px',
}))
const TextBottomMain = styled('div')(() => ({}))
const PictureBottomSection = styled('div')(() => ({
   display: 'flex',
   gap: '25px',
}))
const PictureSection1 = styled('div')(() => ({
   boxSizing: 'border-box',
   margin: '0 auto',
}))

export default AboutClinicPage
