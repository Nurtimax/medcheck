import { Autoplay, Pagination, Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Rating from '@mui/material/Rating'
import { styled } from '@mui/material'

import feedBackImg from '../../assets/images/feedbackImg.jpg'

const SwiperFeedbacks = () => {
   return (
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
         loop
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
                     <Rating className="rating" name="simple-controlled" />
                  </div>
               </div>

               <p className="message">
                  Понравилась компетентность специалистов и персонала, который
                  помогает. Я был у доктора невролога, очень комплексно меня
                  обследовали.
               </p>
            </div>
         </SwiperSlideStyled>
         <SwiperSlideStyled>
            <div className="feedback">
               <div>
                  <img src={feedBackImg} alt="feedbackImg" />
                  <div className="ratingsContainer">
                     <p>Karim Benzema</p>
                     <Rating className="rating" name="simple-controlled" />
                  </div>
               </div>
               <p className="message">
                  В клинике всё нормально было, вовремя и четко. Мне проводили
                  комплексное обследование в связи с катарактой. Доктор всё мне
                  объяснила, что и как по её мнению нужно делать. Обратился в
                  клинику, потому что брат делал операцию в ней.
               </p>
            </div>
         </SwiperSlideStyled>
         <SwiperSlideStyled>
            <div className="feedback">
               <div>
                  <img src={feedBackImg} alt="feedbackImg" />
                  <div className="ratingsContainer">
                     <p>Eden Hazard</p>
                     <Rating className="rating" name="simple-controlled" />
                  </div>
               </div>
               <p className="message">
                  В клинике всё замечательно. Понравилось, что всё быстро и без
                  очереди. Обращалась на комплексное обследование, проверить
                  зрение. Специалист очень хорошая, всё хорошо объяснила.
               </p>
            </div>
         </SwiperSlideStyled>
         <SwiperSlideStyled>
            <div className="feedback">
               <div>
                  <img src={feedBackImg} alt="feedbackImg" />
                  <div className="ratingsContainer">
                     <p>Dani Carvajal</p>
                     <Rating className="rating" name="simple-controlled" />
                  </div>
               </div>

               <p className="message">
                  Посещали терапевта, кардиолога. Было прединфарктное состояние.
                  Понравился подход врачей. Комплексно исследовали, объяснили,
                  что делать
               </p>
            </div>
         </SwiperSlideStyled>
      </SwiperStyled>
   )
}

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
   '& .swiper-slide-active': {
      '& .feedback': {
         background: 'rgba(0, 147, 68, 0.14)',
      },
   },
}))

const SwiperSlideStyled = styled(SwiperSlide)(() => ({
   display: 'flex',
   cursor: 'pointer',

   '& .feedback': {
      width: '600px',
      height: '150px',
      background: '#EEEEEE',
      margin: '0 auto',
      borderRadius: '20px',
      marginTop: '60px',
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
         marginTop: '-20px',
      },
   },

   '& .message': {
      fontSize: '13px',
      marginTop: '10px',
   },
}))

export default SwiperFeedbacks
