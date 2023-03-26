import React from 'react'
import {
   Container,
   styled,
   Accordion,
   AccordionSummary,
   AccordionDetails,
   Typography,
   Box,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SwiperFeedbacks from '../../layout/landing/SwiperFeedbacks'
import { service_doctors } from '../../utils/constants/serviceMed'
import RequestsClient from '../../layout/landing/RequestsClient'
import Button from '../UI/Button'

const Dermatology = () => {
   return (
      <DermatologyBlock>
         <DermatologyHeader>
            <h1>Дерматология</h1>
            <p>
               Дерматология – это раздел медицины, изучающий причины и механизмы
               развития заболеваний кожи, волос, ногтей, слизистых оболочек,
               сальных и потовых желез. Врач дерматолог занимается диагностикой
               и лечением врожденных и приобретенных патологий, связанных с
               нарушением целостности кожных покровов, и исследует их
               взаимосвязь с другими сбоями в работе организма.
            </p>
         </DermatologyHeader>
         <DermatologySection>
            <h3>В каких случаях следует обращаться к дерматологу?</h3>
            <p>
               Регулярные консультации и диагностические обследования необходимы
               пациентам, страдающим врожденными и хроническими заболеваниями
               кожи. Также существует ряд симптомов и проблем, при которых
               необходимо записаться к дерматологу:
            </p>
            <ul>
               <li>угревая сыпь и другие высыпания;</li>
               <li>нарушение пигментации;</li>
               <li>шелушение, появление пятен на коже;</li>
               <li> локализованный кожный зуд;</li>
               <li>
                  усиленное выпадение волос (очаговое, диффузное, рубцовое и
                  пр.);
               </li>
               <li> чрезмерная потливость; </li>
               <li>
                  изменения цвета и структуры ногтевых пластин и видимых
                  слизистых оболочек;
               </li>
               <li>зудящие высыпания в области промежности и гениталий;</li>
               <li>активный рост или изменение цвета и формы родинок. </li>
            </ul>

            <h3>Какие болезни лечит дерматолог?</h3>
            <p>
               Дерматолог в Бишкеке, занимается лечением широкого спектра
               дерматологических заболеваний различного происхождения:
            </p>
            <ul>
               <li>дерматозы, дерматиты;</li>
               <li>псориаз;</li>
               <li>витилиго (песь) и другие расстройства пигментации;</li>
               <li>кожные аллергические проявления;</li>
               <li>угревая болезнь;</li>
               <li>потница;</li>
               <li>алопеция;</li>
               <li> микозы (грибковые поражения кожи, ногтей и слизистой);</li>
               <li> различные формы опоясывающего лишая;</li>
               <li>редкие кожные патологии (амилоидоз, ихтиоз и пр.).</li>
            </ul>
         </DermatologySection>
         <DermatologyPrice>
            <DermatologyTitle>
               <spanThird>Цены на прием </spanThird>
               <spanFourth>врача-дерматолога</spanFourth>
            </DermatologyTitle>
            <div className="titleSection">
               <span>Услуга </span>
               <span>Стоимость</span>
            </div>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <BoxStyled>
                     <Typography>Первичный прием врача-дерматолога</Typography>
                     <Typography> 2 300 сом</Typography>
                  </BoxStyled>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography>
                     Показано при любых формах ишемической болезни и пороках
                     сердца, повышенном артериальном давлении, кардиомиопатии,
                     аритмии и других патологиях.
                  </Typography>
               </AccordionDetails>
            </Accordion>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <BoxStyled>
                     <Typography>Первичный прием врача-дерматолога </Typography>
                     <Typography>1500 сом</Typography>{' '}
                  </BoxStyled>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography></Typography>
               </AccordionDetails>
            </Accordion>
            <Accordion>
               <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
               >
                  <BoxStyled>
                     <Typography>Первичный прием врача-дерматолога</Typography>
                     <Typography>1000 сом</Typography>
                  </BoxStyled>
               </AccordionSummary>
               <AccordionDetails>
                  <Typography></Typography>
               </AccordionDetails>
            </Accordion>
         </DermatologyPrice>
         <ContainerPhoto>
            <SwiperFeedbacks />
            <h4>Специалисты в данном направлении</h4>
            <div className="photoInfo">
               {service_doctors.map((doctor) => (
                  <div className="box" key={doctor.id}>
                     <img className="photo" src={doctor.ser_icon} alt="image" />
                     <div className="lastname">{doctor.name}</div>
                     <div className="info">{doctor.expert}</div>
                     <ButtonStyled variant="outlined" width="226px">
                        Записаться на прием
                     </ButtonStyled>
                  </div>
               ))}
            </div>
            <RequestsClient />
         </ContainerPhoto>
      </DermatologyBlock>
   )
}

export default Dermatology
const DermatologyBlock = styled(Container)(() => ({
   fontFamily: 'Manrope',
   fontStyle: 'normal',
}))
const DermatologyHeader = styled('div')(() => ({
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '19px',
   cursor: 'pointer',
   '& h1': {
      fontWeight: '600',
      fontSize: '36px',
      lineHeight: '49px',
      color: '#048741',
   },
   '& .p': {
      fontWeight: '300',
      fontSize: '16px',
      lineHeight: '150%',
      color: '#222222',
   },
}))
const DermatologySection = styled('div')(() => ({
   '& .h3': {
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '33px',
      color: '#4D4E51',
   },
   '& .p': {
      fontWeight: '300',
      fontSize: '16px',
      lineHeight: '150%',
      color: '#222222',
   },

   '& ul': {
      fontWeight: '300',
      fontSize: '16px',
      lineHeight: '180%',
      color: '#222222',
   },
   'ul li::marker': {
      color: '#048741',
   },
}))
const DermatologyPrice = styled('div')(() => ({
   '& .titleSection': {
      fontWeight: '600',
      fontSize: '18px',
      lineHeight: '25px',
      height: '59px',
      background: '#DBF0E5',
      color: '#4D4E51',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 21px 0 14px',
   },
}))
const DermatologyTitle = styled('div')(() => ({
   padding: '30px 0',
   '& spanThird': {
      fontWeight: '700',
      fontSize: '36px',
      lineHeight: '49px',
      color: '#222222',
   },
   '& spanFourth': {
      color: '#048741',
      fontWeight: '700',
      fontSize: '36px',
      lineHeight: '49px',
   },
}))
const ContainerPhoto = styled('div')(() => ({
   '& h4': {
      fontWeight: '600',
      fontSize: '24px',
      lineHeight: '33px',
      color: '#4D4E51',
   },
   '& .photoInfo': {
      display: 'flex',
      justifyContent: 'space-around',
   },
   '& .photo': {
      border: 'solid 0.0.50',
      borderRadius: '4px',
      background: 'matrix(-1, 0, 0, 1, 0, 0)',
   },
   '& .lastname': {
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '25px',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      color: '#222222',
   },
   '& info': {
      fontWeight: '500',
      fontSize: '16px',
      lineHeight: '22px',
      textAlign: 'center',
      color: '#919399',
   },
   '& .box': {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
   },
}))
const BoxStyled = styled(Box)(() => ({
   width: '1090px',
   display: 'flex',
   justifyContent: 'space-between',
}))
const ButtonStyled = styled(Button)(() => ({
   fontWeight: '400 !important',
   fontSize: '16px !important',
}))
