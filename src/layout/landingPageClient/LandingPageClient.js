import { styled } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import Button from '../../components/UI/Button'
import Rating from '@mui/material/Rating'

import Input from '../../components/UI/Input'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper'

import { doctors } from '../../utils/constants/doctors'

import imgToWelcome from '../../assets/images/imgToWelcome.jpg'
import sendRequestImg from '../../assets/images/imgRequest.jpg'

import users from '../../assets/icons/users.svg'
import phoneNumber from '../../assets/icons/phoneNumber.svg'

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

import feedBackImg from '../../assets/images/feedbackImg.jpg'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const LandingPageClient = () => {
   return (
      <>
         <Header />

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

            <ContainerLookAll>
               <LookAll>Смотреть все</LookAll>
            </ContainerLookAll>

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
                     <a href="https://www.medcheck.kg/">
                        Читать подробнее о клинике
                     </a>

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

            <AllDoctorsContainer>
               <AllDoctors>Все врачи клиники</AllDoctors>
            </AllDoctorsContainer>

            <Feedbacks>
               Отзывы наших <span>пациентов</span>
            </Feedbacks>

            <SwiperStyled
               slidesPerView={2}
               spaceBetween={20}
               centeredSlides={true}
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
               }}
               pagination={{
                  clickable: true,
               }}
               loop={true}
               speed={800}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
            >
               <SwiperSlideStyled>
                  <div className="feedback">
                     <div>
                        <img src={feedBackImg} alt="feedbackImg" />
                        <div className="ratingsContainer">
                           <p>Eder Militao</p>
                           <Rating
                              className="rating"
                              name="simple-controlled"
                           />
                        </div>
                     </div>

                     <p className="message">
                        Хочу выразить признательность и благодарность отличному
                        врачу - Попову Алексею Дмитриевичу за профессиональное
                        удаление зуба мудрости! Отмечу, что зуб был очень
                        сложным: расположен за челюстной костью, росший вниз
                        (под семерку), с кривыми корнями. Не ожидал, что
                        удаление такого зуба сможет пройти столь спокойно и
                        безболезненно (пишу, кстати, по факту заживления - лунка
                        затянулась прекрасно). В общем, огромное спасибо Алексею
                        Дмитриевичу , персоналу и самой клинике!
                     </p>
                  </div>
               </SwiperSlideStyled>
               <SwiperSlideStyled>
                  <div className="feedback">
                     <div>
                        <img src={feedBackImg} alt="feedbackImg" />
                        <div className="ratingsContainer">
                           <p>Eden Hazard</p>
                           <Rating
                              className="rating"
                              name="simple-controlled"
                           />
                        </div>
                     </div>
                     <p className="message">
                        Хочу выразить признательность и благодарность отличному
                        врачу - Попову Алексею Дмитриевичу за профессиональное
                        удаление зуба мудрости! Отмечу, что зуб был очень
                        сложным: расположен за челюстной костью, росший вниз
                        (под семерку), с кривыми корнями. Не ожидал, что
                        удаление такого зуба сможет пройти столь спокойно и
                        безболезненно (пишу, кстати, по факту заживления - лунка
                        затянулась прекрасно). В общем, огромное спасибо Алексею
                        Дмитриевичу , персоналу и самой клинике!
                     </p>
                  </div>
               </SwiperSlideStyled>
               <SwiperSlideStyled>
                  <div className="feedback">
                     <div>
                        <img src={feedBackImg} alt="feedbackImg" />
                        <div className="ratingsContainer">
                           <p>Dani Carvajal</p>
                           <Rating
                              className="rating"
                              name="simple-controlled"
                           />
                        </div>
                     </div>

                     <p className="message">
                        Хочу выразить признательность и благодарность отличному
                        врачу - Попову Алексею Дмитриевичу за профессиональное
                        удаление зуба мудрости! Отмечу, что зуб был очень
                        сложным: расположен за челюстной костью, росший вниз
                        (под семерку), с кривыми корнями. Не ожидал, что
                        удаление такого зуба сможет пройти столь спокойно и
                        безболезненно (пишу, кстати, по факту заживления - лунка
                        затянулась прекрасно). В общем, огромное спасибо Алексею
                        Дмитриевичу , персоналу и самой клинике!
                     </p>
                  </div>
               </SwiperSlideStyled>
            </SwiperStyled>

            <RequestClient>
               <div className="requestContainer">
                  <p className="leaveRequest">Оставьте заявку</p>
                  <p className="leaveRequestText">
                     Оставьте свой номер и наши специалисты свяжутся с Вами в
                     ближайшее время
                  </p>

                  <div className="clientDetailsContainer">
                     <div className="clientDetails">
                        <p>Как к Вам обратиться?</p>
                        <div>
                           <img src={users} alt="users" />
                           <Input
                              type="text"
                              placeholder="Введите имя"
                              className="input"
                           />
                        </div>
                     </div>
                     <div className="clientDetails">
                        <p>Номер мобильного телефона</p>
                        <div>
                           <img src={phoneNumber} alt="phoneNumber" />
                           <Input
                              type="number"
                              placeholder="+996 (___) __-__-__"
                              className="input"
                           />
                        </div>
                     </div>
                  </div>

                  <Button variant="contained" className="sendRequest">
                     ОТПРАВИТЬ ЗАЯВКУ
                  </Button>
               </div>
               <img
                  className="sendRequestImg"
                  src={sendRequestImg}
                  alt="sendRequestImg"
               />
            </RequestClient>
         </Main>

         <Footer />
      </>
   )
}

const Main = styled('main')(() => ({
   width: '1200px',
   height: 'auto',
   margin: '0 auto',
   marginTop: '180px',
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
   fontFamily: '"Poppins" , sans-serif',
}))

const TypographyAbout = styled('p')(() => ({
   fontFamily: '"Manrope", sans-serif',
   fontSize: '16px',
   marginTop: '27px',
}))

const ButtonRecord = styled(Button)(() => ({
   width: '177px',
   height: '43px',
   border: '1px solid #048741',
   color: 'rgba(4, 135, 65, 1)',
   borderRadius: '24px',
   fontFamily: '"Manrope", sans-serif',
   fontSize: '14px',
   fontWeight: '600',
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
   fontFamily: '"Manrope", sans-serif',
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
         fontFamily: '"Manrope", sans-serif',
         color: 'green',
      },

      '& .title': {
         fontSize: '20px',
         fontFamily: '"Manrope" , sans-serif',
      },
      '& .text': {
         fontFamily: '"Manrope", sans-serif',
         marginTop: '10px',
         fontSize: '16px',
      },
   },
}))

const OurServices = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',
   marginTop: '60px',
   fontFamily: '"Manrope", sans-serif',
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
   fontFamily: '"Manrope", sans-serif',
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
      fontFamily: '"Manrope", sans-serif',
      fontSize: '16px',
      marginTop: '10px',
      color: '#000000',
      textAlign: 'center',
   },
}))

const ContainerLookAll = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '30px',
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
   fontFamily: '"Manrope" , sans-serif',
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

         fontFamily: '"Manrope", sans-serif',
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
   fontFamily: '"Manrope", sans-serif',
   fontWeight: '600',
   fontSize: '36px',
   color: '#222222',
   '& span': {
      color: 'rgba(4, 135, 65, 1)',
   },
}))

const BestDoctorsText = styled('p')(() => ({
   width: '48%',

   fontFamily: '"Manrope", sans-serif',
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
      fontFamily: '"Manrope" , sans-serif',
      fontSize: '16px',
      marginTop: '10px',
   },

   '& .doctorSpecialist': {
      display: 'flex',
      justifyContent: 'center',
      fontFamily: '"Manrope" , sans-serif',
      fontSize: '14px',
      color: '#959595',
      marginTop: '4px',
   },
}))

const AllDoctorsContainer = styled('div')(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'center',
   marginTop: '30px',
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
   fontFamily: '"Manrope", sans-serif',
   fontWeight: '600',
   fontSize: '36px',
   color: '#222222',
   '& span': {
      color: 'rgba(4, 135, 65, 1)',
   },
}))

const SwiperStyled = styled(Swiper)(() => ({
   width: '96%',
   height: '350px',
   margin: '0 auto',

   '& .swiper-pagination-bullet': {
      background: '#048741',
   },

   '& .swiper-button-next': {
      color: '#048741',

      width: '40px',
      height: '40px',

      position: 'absolute',
      top: '330px',
      right: '400px',
      borderRadius: '50%',
      border: '1px solid green',
      zIndex: '11',
   },

   '& .swiper-button-prev': {
      color: '#048741',

      width: '40px',
      height: '40px',

      position: 'absolute',
      zIndex: '11',
      top: '330px',
      left: '400px',
      borderRadius: '50%',
      border: '1px solid green',
   },

   '& .swiper-button-next:hover': {
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      color: 'white',
   },
   '& .swiper-button-prev:hover': {
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
      color: 'white',
   },

   '& .swiper-button-prev:after': {
      fontSize: '16px',
      fontWeight: '900',
   },
   '& .swiper-button-next:after': {
      fontSize: '16px',
      fontWeight: '900',
   },
}))

const SwiperSlideStyled = styled(SwiperSlide)(() => ({
   display: 'flex',

   cursor: 'pointer',

   '& .feedback': {
      width: '600px',
      height: '210px',
      background: '#EEEEEE',
      margin: '0 auto',
      borderRadius: '20px',
      marginTop: '50px',
      padding: '20px 20px',

      '& div': {
         display: 'flex',
         gap: '10px',
         alignItems: 'center',
         '& img': {
            width: '36px',
            height: '35px',
            borderRadius: '50%',
         },
      },
   },

   '& .ratingsContainer': {
      display: 'flex',

      flexDirection: 'column',
      fontFamily: 'Montserrat',

      '& .rating': {
         fontSize: '15px',
         marginTop: '-10px',
      },
   },

   '& .message': {
      fontSize: '13px',
      fontFamily: '"Manrope", sans-serif',
      marginTop: '10px',
   },
}))

const RequestClient = styled('div')(() => ({
   width: '96%',
   margin: '0 auto',

   display: 'flex',
   alignItems: 'center',
   marginBottom: '70px',

   '& .requestContainer': {
      width: '700px',
      height: '400px',
      background: '#DBEBFF',
      padding: '40px 30px',
      marginTop: '150px',
      borderRadius: '20px',

      '& .leaveRequest': {
         fontSize: '36px',
         textAlign: 'center',
      },

      '& .leaveRequestText': {
         textAlign: 'center',
         fontSize: '18px',
         fontFamily: '"Manrope", sans-serif',
         color: '#222222',
         marginTop: '15px',
      },
   },

   '& .clientDetails': {
      width: '260px',

      '& div': {
         display: 'flex',
         background: 'white',
         justifyContent: 'flex-start',
         padding: '0 10px',
         border: '1px solid rgba(0, 147, 68, 0.5)',
         borderRadius: '5px',

         '& .input': {
            border: 'none',
            width: '200px',
            height: '40px',
         },
      },

      '& p': {
         fontSize: '14px',
         color: '#4D4E51',
         fontFamily: '"Manrope", sans-serif',
         textAlign: 'start',
         margin: '5px 1px',
      },
   },

   '& .clientDetailsContainer': {
      display: 'flex',
      width: '100%',
      margin: '0 auto',
      textAlign: 'center',
      gap: '25px',
      marginTop: '30px',
   },

   '& .sendRequest': {
      borderRadius: '25px',
      fontFamily: '"Manrope", sans-serif',

      marginTop: '50px',
      marginLeft: '170px',
   },

   '& .sendRequestImg': {
      width: '700px',
      height: '445px',
      position: 'relative',
      top: '50px',
      right: '170px',
      zIndex: '10',
   },
}))

export default LandingPageClient
