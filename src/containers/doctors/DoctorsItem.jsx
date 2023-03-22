import { Box, Container, styled, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Arrow } from '../../assets'
import Button from '../../components/UI/Button'
import SwiperFeedbacks from '../../layout/landing/SwiperFeedbacks'
import { getDoctorById } from '../../redux/slices/doctors-slice'
import { infoDataDoctor } from '../../utils/constants/doctors'

const DoctorsItem = () => {
   const { dataById } = useSelector((state) => state.doctors)

   const { expertId } = useParams()

   const dispatch = useDispatch()

   const { text1, text2, text3, text4 } = infoDataDoctor

   useEffect(() => {
      dispatch(getDoctorById(expertId))
   }, [])

   return (
      <>
         <MainContainer>
            <Typography className="name">
               {dataById.expertFirstName} {dataById.expertLastName}
            </Typography>

            <Box className="text-box">
               <p>
                  Попасть в команду медицинской клиники «Medical Clinic» могут
                  <br />
                  только лучшие специалисты с многолетней практикой и доказанным
                  опытом.
               </p>

               <p>
                  Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
                  ведущих университетах <br /> Европы, чтобы еще на шаг стать
                  ближе к совершенству.
               </p>
            </Box>

            <Box className="portfolio">
               <img
                  className="doctor-image"
                  src="https://avatars.cloudflare.steamstatic.com/bbc8afe5cddc3fc79439e35cc97bdaa663e85b71_full.jpg"
                  alt="photo"
               />

               <Box className="doctor-data">
                  <p>
                     {dataById.expertFirstName} {dataById.expertLastName}
                  </p>

                  <Box className="data">
                     <Box>
                        <div>Отделение:</div>
                        <div>{dataById.expertPosition}</div>
                     </Box>

                     <Box>
                        <div>Должность:</div>
                        <div>Главный врач</div>
                     </Box>
                  </Box>

                  <StyledButton>Записаться на прием</StyledButton>
               </Box>
            </Box>

            <Box className="information">
               <Box>
                  <Typography className="data-info-title">
                     Преимущественно эстетическая хирургия лица:
                  </Typography>

                  <ul>
                     {text1.map((text) => (
                        <li key={text}>{text}</li>
                     ))}
                  </ul>
               </Box>

               <Box>
                  <Typography className="data-info-title">
                     Специализация доктора:
                  </Typography>

                  <div>
                     {text2.map((text) => (
                        <div key={text}>{text}</div>
                     ))}
                  </div>
               </Box>

               <Box>
                  <Typography className="data-info-title">
                     Основное образование:
                  </Typography>

                  <div>
                     {text3.map((text) => (
                        <div key={text}>{text}</div>
                     ))}
                  </div>
               </Box>

               <Box>
                  <Typography className="data-info-title">
                     Участие в конференциях:
                  </Typography>

                  <div>
                     {text4.map((text) => (
                        <div key={text}>{text}</div>
                     ))}
                  </div>
               </Box>
            </Box>

            <Typography className="list">
               <Arrow />
               <Link to="/doctors">Список сотрудников</Link>
            </Typography>

            <Typography className="feedback">Отзывы наших</Typography>
         </MainContainer>

         <Swiper>
            <SwiperFeedbacks />
         </Swiper>
      </>
   )
}

export default DoctorsItem

const Swiper = styled(Box)(() => ({
   padding: '0 0 120px',
}))

const MainContainer = styled(Container)(() => ({
   fontFamily: 'Manrope',
   fontWeight: '400',
   fontSize: '18px',
   color: '#4D4E51',

   '& .list': {
      padding: '40px 0 120px',
      fontWeight: '500',
      fontSize: '16px',
      color: '#048741',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',

      '& a': {
         fontWeight: '500',
         fontSize: '16px',
         color: '#048741',
         textDecoration: 'none',
      },
   },

   '& .feedback': {
      fontWeight: '600',
      fontSize: '36px',
      color: 'black',

      '&:after': {
         content: '" пациентов"',
         color: '#048741',
      },
   },

   '& .name': {
      fontWeight: '600',
      fontSize: '36px',
      color: 'black',
   },

   '& .text-box': {
      padding: '10px 0 30px',
   },

   '& .portfolio': {
      display: 'flex',
      gap: '60px',
      alignItems: 'center',
   },

   '& .doctor-image': {
      height: '349px',
      width: '319px',
      borderRadius: '4px',
   },

   '& .doctor-data': {
      display: 'flex',
      flexDirection: 'column',

      '& p:first-of-type': {
         fontWeight: '500',
         fontSize: '24px',
         color: '#009344',
      },

      '& .data': {
         display: 'flex',
         flexDirection: 'column',
         gap: 'px',

         '& div': {
            display: 'flex',
            gap: '5px',

            '& div:last-of-type': {
               fontWeight: '500',
               fontSize: '18px',
               color: 'black',
            },
         },
      },
   },

   '& .information': {
      paddingTop: '34px',
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
   },

   '& .data-info-title': {
      fontFamily: 'Manrope',
      fontWeight: '600',
      fontSize: '20px',
      color: 'black',
   },
}))

const StyledButton = styled(Button)(() => ({
   marginTop: '24px',
   color: 'white',
   background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   width: '204px',
   height: '42px',
   borderRadius: '10px',
}))
