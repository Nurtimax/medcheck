import { Box, Container, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../components/UI/Button'
import { getDoctorsExperts } from '../../redux/slices/doctors-slice'
import { ROUTES } from '../../utils/constants/data'

const Doctors = () => {
   const { data } = useSelector((state) => state.doctors)

   const [dataLength, setDataLength] = useState(4)

   const DATA = dataLength === 4 ? data.slice(0, 4) : data

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(
         getDoctorsExperts({
            size: 100,
         })
      )
   }, [dispatch])

   const showRestDoctorsHandler = () => setDataLength(1)

   return (
      <MainContainer>
         <Typography className="title">Наши</Typography>

         <Box className="text-box">
            <p>
               Попасть в команду медицинской клиники «Medical Clinic» могут
               <br />
               только лучшие специалисты с многолетней практикой и доказанным
               опытом.
            </p>

            <p>
               Мы развиваемся, учимся и оттачиваем мастерство, стажируемся в
               ведущих университетах <br /> Европы, чтобы еще на шаг стать ближе
               к совершенству.
            </p>
         </Box>

         <Box className="doctors-box">
            {DATA?.map((expert) => (
               <Box key={expert.id}>
                  <p className="doctor">{expert.serviceName}</p>

                  <Box>
                     {expert?.expertsResponses?.map((doctor) => (
                        <Box key={doctor.id}>
                           <Link to={`${ROUTES.DOCTORS}/${expert.id}`}>
                              <img
                                 title="Узнать подробнее об этом эксперте"
                                 className="doctor-image"
                                 src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/5aaaf0a13658f787ade9e0caac971c89~c5_720x720.jpeg?x-expires=1679583600&x-signature=UYwg0rvZGRALhQfTAorQU1JNAxo%3D"
                                 alt="expert"
                              />
                           </Link>

                           <div className="doctor-name">
                              {doctor.expertFullName}
                           </div>
                           <div className="doctor-position">
                              {doctor.expertPosition}
                           </div>

                           <StyledButton>Записаться на прием</StyledButton>
                        </Box>
                     ))}
                  </Box>
               </Box>
            ))}

            <div className="pagination">
               <p>В нашей клинике работают:</p>
               <p onClick={showRestDoctorsHandler}>Показать больше</p>
            </div>
         </Box>
      </MainContainer>
   )
}

export default Doctors

const MainContainer = styled(Container)(() => ({
   padding: '26px 0 120px',
   fontFamily: 'Manrope',
   fontWeight: '400',
   fontSize: '18px',
   color: '#4D4E51',

   '& .pagination': {
      display: 'flex',
      justifyContent: 'center',
      gap: '16px',

      '& p:first-of-type:after': {
         content: '"более 30 специалистов"',
         fontWeight: '500',
         color: 'black',
      },

      '& p:last-of-type': {
         color: '#048741',
         textDecoration: 'underline',
         cursor: 'pointer',
      },
   },

   '& .doctor': {
      fontWeight: '600',
      fontSize: '24px',
   },

   '& .title': {
      fontFamily: 'Manrope',
      fontWeight: '600',
      fontSize: '36px',
      color: '#222222',

      '&:after': {
         content: '" врачи"',
         color: '#048741',
      },
   },

   '& .text-box': {
      padding: '20px 0',
   },

   '& .doctors-box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '80px',
   },

   '& .doctor-image': {
      height: '349px',
      width: '319px',
      borderRadius: '4px',
   },

   '& .doctor-name': {
      padding: '5px 0 0 0',
      fontWeight: '500',
      fontSize: '18px',
   },

   '& .doctor-position': {
      padding: '0 0 18px 0',
      fontWeight: '500',
      fontSize: '16px',
      color: '#959595',
   },
}))

const StyledButton = styled(Button)(() => ({
   color: '#029847',
   border: '1px solid #048741',
   borderRadius: '10px',
   '&:hover': {
      color: 'white',
      background: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)',
   },
}))
