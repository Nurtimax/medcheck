import { styled } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import Button from '../../components/UI/Button'

import { doctors } from '../../utils/constants/doctors'

import imgToWelcome from '../../assets/images/imgToWelcome.jpg'

import vaccination from '../../assets/icons/vaccination.svg'
import cardiology from '../../assets/icons/cardiology.svg'
import neurology from '../../assets/icons/neurology.svg'
import dermatology from '../../assets/icons/dermatology.svg'
import ophthalmology from '../../assets/icons/ophthalmology.svg'
import therapy from '../../assets/icons/therapy.svg'
import fizioterapiya from '../../assets/icons/fizioterapiya.svg'
import onkologiya from '../../assets/icons/onkologiya.svg'
import urologiya from '../../assets/icons/urologiya.svg'

import next from '../../assets/icons/nextIcon.svg'

import clinic from '../../assets/images/clinic.jpg'
import doctors1 from '../../assets/images/doctors1.jpg'
import doctors2 from '../../assets/images/doctors2.jpg'
import doctors3 from '../../assets/images/doctors3.jpg'

import RequestsClient from './RequestsClient'
import SwiperFeedbacks from './SwiperFeedbacks'
import { Link } from 'react-router-dom'
import CustomLink from '../../components/UI/Custom.Link'
import { ROUTES } from '../../utils/constants/data'

const LandingPage = () => {
   return (
      <>
         <Main>
            <StyledWelcome>
               <WelcomeClient>
                  <TypographyWelcome>
                     Добро пожаловать в клинику MedCheck
                  </TypographyWelcome>
                  <TypographyAbout>
                     Международный Медицинская клиника «MedCheck — это клиника,
                     в которой применяются новейшие диагностические и лечебные
                     технологии и ведут прием лучшие специалисты.
                  </TypographyAbout>

                  <ButtonRecord>оставьте заявку</ButtonRecord>
               </WelcomeClient>
               <ImgStyledWelcome>
                  <img src={imgToWelcome} alt="imgToWelcome" />
               </ImgStyledWelcome>
            </StyledWelcome>

            <ChooseOurMedCheck>
               Почему <span>нас выбирают?</span>
            </ChooseOurMedCheck>

            <ChooseContainer>
               <div>
                  <p className="number">1</p>
                  <p className="title">Высокий профессионализм сотрудников</p>
                  <p className="text">
                     Медицинская лицензия, большой опыт врачей и постоянное
                     повышение квалификации.
                  </p>
               </div>
               <div>
                  <p className="number">2</p>
                  <p className="title">Наши пациенты - наши лучшие друзья</p>
                  <p className="text">
                     Все аппараты и медицинские препараты сертифицированы и
                     лицензированы.
                  </p>
               </div>
               <div>
                  <p className="number">3</p>
                  <p className="title">Комфортные условия</p>
                  <p className="text">
                     Уютная обстановка и отзывчивый персонал сделают поход в
                     клинику максимально приятным.
                  </p>
               </div>
            </ChooseContainer>

            <OurServices>
               Наши <span>услуги</span>
            </OurServices>

            <ForAllTimesApplication>
               За все время работы клиника приняла более 1 млн. пациентов.
            </ForAllTimesApplication>

            <Services>
               <div>
                  <div className="containerWithImg">
                     <img src={vaccination} alt="vaccination" />
                  </div>
                  <p className="text">Вакцинация</p>
               </div>
               <div>
                  <div className="containerWithImg">
                     <img src={cardiology} alt="cardiology" />
                  </div>
                  <p className="text">Кардиология</p>
               </div>
               <div>
                  <div className="containerWithImg">
                     <img src={neurology} alt="neurology" />
                  </div>
                  <p className="text">Неврология</p>
               </div>
               <div>
                  <div className="containerWithImg">
                     <img src={dermatology} alt="dermatology" />
                  </div>
                  <p className="text">Дерматология</p>
               </div>
               <div>
                  <div className="containerWithImg">
                     <img src={ophthalmology} alt="ophthalmology" />
                  </div>
                  <p className="text">Офтальмология</p>
               </div>
               <div>
                  <div className="containerWithImg">
                     <img src={therapy} alt="therapy" />
                  </div>
                  <p className="text">Терапия</p>
               </div>
               <div>
                  <div className="containerWithImg">
                     <img src={fizioterapiya} alt="fizioterapiya" />
                  </div>
                  <p className="text">Физиотерапия</p>
               </div>
               <div>
                  <div className="containerWithImg">
                     <img src={onkologiya} alt="onkologiya" />
                  </div>
                  <p className="text">Онкология</p>
               </div>
               <div>
                  <div className="containerWithImg">
                     <img src={urologiya} alt="urologiya" />
                  </div>
                  <p className="text">Урология</p>
               </div>
            </Services>

            <LinkToServices to="/services">
               <LookAll>Смотреть все</LookAll>
            </LinkToServices>

            <AboutOurClinic>
               О нашей клинике <span>“MedCheck”</span>
            </AboutOurClinic>

            <AboutClinic>
               <div className="textContent">
                  <p>
                     Вся наша команда готова обеспечить вам медицинский уход и
                     заботу на самом высоком уровне. Наша главная задача —
                     оказать Вам теплый прием и обеспечить самый лучший
                     медицинский уход. У нас Вы в хороших руках! В нашей клинике
                     используются только качественные материалы и проверенные
                     технологии. Для каждого клиента специалисты нашей клиники
                     разработают индивидуальный план лечения, подробно
                     рассказывая о каждом этапе.
                  </p>
                  <p>
                     Доброжелательность и уважительное отношение к пациентам, не
                     только материальная, но и моральная ответственность за
                     результаты лечения — все это взято за основу политики
                     Medical Clinic. Профессионализм и высокое качество
                     оказываемых услуг помогают нам привлечь пациентов которые
                     рекомендуют нас своим родным и близким.
                  </p>
                  <p>
                     Уже 20 лет мы работаем на уровне лучших мировых стандартов,
                     внедряя и развивая передовые методы лечения для сохранения
                     здоровья наших пациентов.
                  </p>

                  <div className="readMore">
                     <CustomLink to={ROUTES.ABOUT_CLINIC}>
                        Читать подробнее о клинике
                     </CustomLink>

                     <img src={next} alt="nextIcon" />
                  </div>
               </div>
               <ImgStyles>
                  <div>
                     <img src={clinic} alt="" />
                  </div>

                  <img src={doctors1} alt="doctors1" />
                  <img src={doctors2} alt="doctors2" />
                  <img src={doctors3} alt="doctors3" />
               </ImgStyles>
            </AboutClinic>

            <BestDoctors>
               Лучшие <span>врачи</span>
               <BestDoctorsText>
                  Попасть в команду медицинской клиники «MedCheck» могут только
                  лучшие специалисты с многолетней практикой и доказанным
                  опытом.
               </BestDoctorsText>
            </BestDoctors>

            <Doctors>
               {doctors.map((doctor) => {
                  return (
                     <div key={doctor.id}>
                        <div className="images">
                           <img src={doctor.image} alt="image" />
                        </div>
                        <p className="doctorName">{doctor.name}</p>
                        <p className="doctorSpecialist">{doctor.specialist}</p>
                     </div>
                  )
               })}
            </Doctors>

            <LinkAllDoctorsContainer to="/doctors">
               <AllDoctors>Все врачи клиники</AllDoctors>
            </LinkAllDoctorsContainer>

            <Feedbacks>
               Отзывы наших <span>пациентов</span>
            </Feedbacks>

            <SwiperFeedbacks />

            <RequestsClient />
         </Main>
      </>
   )
}

export default LandingPage
const Main = styled('main')(() => ({
   width: '1200px',
   height: 'auto',
   margin: '0 auto',
   fontFamily: '"Manrope", sans-serif',
}))

const StyledWelcome = styled('div')(() => ({
   width: '96%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   background: 'white',
   margin: '0 auto',
}))

const WelcomeClient = styled('div')(() => ({
   width: '470px',
}))

const TypographyWelcome = styled(Typography)(() => ({
   width: '500px',

   fontWeight: 900,
   fontSize: '45px',
   color: 'red',
   background: 'linear-gradient(90deg, #30CFD0 0%, #330867 100%)',
   backgroundClip: 'text',
   textFillColor: 'transparent',
}))

const TypographyAbout = styled('p')(() => ({
   fontSize: '16px',
   marginTop: '27px',
}))

const ButtonRecord = styled(Button)(() => ({
   width: '177px',
   height: '43px',
   border: '1px solid #048741',
   color: 'rgba(4, 135, 65, 1)',
   borderRadius: '24px',
   fontSize: '14px',
   marginTop: '40px',
}))

const ImgStyledWelcome = styled('div')(() => ({
   '& img': {
      clipPath:
         'polygon(30% 0, 100% 0, 100% 50%, 100% 100%, 0.9% 100%, 0% 81%)',
      borderRadius: '0 0 0px 44px',
   },
}))

const ChooseOurMedCheck = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',
   marginTop: '30px',
   fontWeight: '600',
   fontSize: '36px',
   color: '#222222',
   '& span': {
      color: 'rgba(4, 135, 65, 1)',
   },
}))

const ChooseContainer = styled('div')(() => ({
   width: '96%',
   gap: '25px',
   margin: '0 auto',
   display: 'flex',

   '& div': {
      width: '389px',
      padding: ' 30px 40px',
      display: 'inline-block',
      marginTop: '60px',
      background: '#DBEBFF',
      borderRadius: '4px',
      color: 'rgba(34, 34, 34, 1)',

      '& .number': {
         margin: '0',
         fontSize: '45px',
         color: 'green',
      },

      '& .title': {
         fontSize: '20px',
      },
      '& .text': {
         marginTop: '10px',
         fontSize: '16px',
      },
   },
}))

const OurServices = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',
   marginTop: '60px',
   fontWeight: '600',
   fontSize: '36px',
   color: '#222222',
   '& span': {
      color: 'rgba(4, 135, 65, 1)',
   },
}))

const ForAllTimesApplication = styled('p')(() => ({
   width: '96%',
   margin: '0 auto',
   fontWeight: '400',
   fontSize: '18px',
   marginTop: '23px',
}))

const Services = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',
   display: 'flex',
   gap: '26px',
   marginTop: '60px',

   '& .containerWithImg ': {
      width: '100px',
      height: '102px',
      border: '1px solid #DEDEDE',
      borderRadius: '18px',
      display: 'flex',
      justifyContent: 'center',

      cursor: 'pointer',

      '& img': {
         width: '60px',
      },

      '&.containerWithImg:hover': {
         background:
            'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      },
   },

   '& .text': {
      fontWeight: 300,
      fontSize: '16px',
      marginTop: '10px',
      color: '#000000',
      textAlign: 'center',
   },
}))

const LinkToServices = styled(Link)(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '30px',
   textDecoration: 'none',
}))

const LookAll = styled(Button)(() => ({
   width: '147px',
   color: '#048741',
   border: '1px solid #048741',
   borderRadius: '10px',
   margin: '0 auto',
}))

const AboutOurClinic = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',
   marginTop: '60px',
   fontWeight: '600',
   fontSize: '36px',
   color: '#222222',
   '& span': {
      color: 'rgba(4, 135, 65, 1)',
   },
}))

const AboutClinic = styled('div')(() => ({
   width: '97%',
   margin: '0 auto',
   display: 'flex',
   justifyContent: 'space-between',
   '& .textContent': {
      width: '460px',

      '& p': {
         marginTop: '20px',
         fontSize: '15px',
         color: '#4D4E51',

         fontWeight: 400,
      },

      '& div': {
         fontSize: '16px',

         display: 'flex',
         alignItems: 'center',

         cursor: 'pointer',
         margin: '0',
         marginTop: '30px',

         gap: '5px',

         '& a': {
            textDecoration: 'none',
            color: '#048741',
         },
      },
   },
}))

const ImgStyles = styled('div')(() => ({
   '& div': {
      '& img': {
         width: '560px',
         height: '270px',
      },
   },

   '& img': {
      width: '180px',
      height: '110px',
      margin: ' 7px 5px',
   },
}))

const BestDoctors = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',
   marginTop: '60px',
   fontWeight: '600',
   fontSize: '36px',
   color: '#222222',
   '& span': {
      color: 'rgba(4, 135, 65, 1)',
   },
}))

const BestDoctorsText = styled('p')(() => ({
   width: '54%',

   fontWeight: '400',
   fontSize: '18px',
   marginTop: '23px',
}))

const Doctors = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '50px',

   margin: '0 auto',
   marginTop: '50px',

   '& .images': {
      display: 'flex',

      alignItems: 'center',
      justifyContent: 'center',

      '& img': {
         background: 'red',
         width: '160px',
         height: '160px',
         borderRadius: '50%',
         color: 'red',
      },
   },

   '& .doctorName': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '16px',
      marginTop: '10px',
   },

   '& .doctorSpecialist': {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '14px',
      color: '#959595',
      marginTop: '4px',
   },
}))

const LinkAllDoctorsContainer = styled(Link)(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '30px',
   textDecoration: 'none',
}))

const AllDoctors = styled(Button)(() => ({
   width: '200px',
   color: '#048741',
   border: '1px solid #048741',
   borderRadius: '10px',
   margin: '0 auto',
}))

const Feedbacks = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',
   marginTop: '30px',
   fontWeight: '600',
   fontSize: '36px',
   color: '#222222',
   '& span': {
      color: 'rgba(4, 135, 65, 1)',
   },
}))
