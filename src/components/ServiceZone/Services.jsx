import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material'
import {
   Accordion,
   AccordionDetails,
   AccordionSummary,
   Typography,
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import RequestsClient from '../../layout/landing/RequestsClient'
import { Container } from '@mui/system'
import {
   service_accordion,
   SERVICE_MED,
} from '../../utils/constants/serviceMed'
import CustomLink from '../UI/Custom.Link'
import { ROUTES } from '../../utils/constants/data'

const Services = () => {
   const [expanded, setExpanded] = useState()

   const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false)
   }
   return (
      <>
         <ServiceContainer>
            <ServiceHeader1>
               <Span3>Наши</Span3>
               <Span4> услуги </Span4>
            </ServiceHeader1>
            <GridStyled container spacing={2}>
               {SERVICE_MED.map((service) => (
                  <Grid item xs={4.5} key={service.id}>
                     <CustomLinkStyle to={`${ROUTES.SERVICES}/${service.id}`}>
                        <div className="main">
                           <img src={service.ser_icon} alt="services" />
                           <p>{service.title}</p>
                        </div>
                     </CustomLinkStyle>
                  </Grid>
               ))}
            </GridStyled>

            <ServiceSection>
               <p1>Часто задаваемые вопросы</p1>
               <p>
                  Специалисты нашей клиники с удовольствием ответят на все ваши
                  вопросы. <br />
                  Ниже представленны наиболее популярные.
               </p>
            </ServiceSection>
            {service_accordion.map((service) => (
               <AccordionStyled
                  key={service.id}
                  expanded={expanded === 'panel1' + service.id}
                  onChange={handleChange('panel1' + service.id)}
               >
                  <AccordionSummary
                     className="accordionSummary"
                     expandIcon={<AccordionSummerry />}
                     aria-controls="panel1bh-content"
                     id="panel1bh-header"
                     classes={{
                        expandIconWrapper:
                           expanded === 'panel1'
                              ? 'accordionSummaryRight'
                              : 'accordionSummaryLeft',
                     }}
                     {...service}
                  >
                     <span
                        className={
                           expanded === 'panel1' + service.id
                              ? 'fullWidth'
                              : 'minWidth'
                        }
                     ></span>
                     <TypographyStyled className="Design">
                        {service.title}
                     </TypographyStyled>
                  </AccordionSummary>

                  <AccordionDetailsStyled>
                     <Typography>{service.text}</Typography>
                     {service.children.map((child) => (
                        <li key={child.id}>{child.subtitle}</li>
                     ))}
                  </AccordionDetailsStyled>
               </AccordionStyled>
            ))}
            <Container>
               <RequestsClient />
            </Container>
         </ServiceContainer>
      </>
   )
}

export default Services

const ServiceContainer = styled('div')(() => ({
   padding: '0 434px 0 120px',
}))
const ServiceHeader1 = styled('div')(() => ({}))
const Span3 = styled('span')(() => ({
   color: '#222222',
   fontWeight: '600',
   fontSize: '36px',
   lineHeight: '49px',
}))
const Span4 = styled('span')(() => ({
   color: '#048741',
   fontWeight: '600',
   fontSize: '36px',
   lineHeight: '49px',
}))
const GridStyled = styled(Grid)(() => ({
   width: '100%',
   padding: '60px 0 120px',
   '& .main': {
      border: '1px solid  #D9D9D9',
      borderRadius: '4px',
      width: '300px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
      paddingLeft: '10px',
   },
   '& .main:hover': {
      background: 'linear-gradient(#FDFDFD, #E4E7EE)',
   },
}))
const ServiceSection = styled('div')(() => ({
   '& p1': {
      fontFamily: 'Myriad Pro',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '36px',
      lineHeight: '36px',
      paddingBottom: '34px',
   },
   '& p': {
      color: '#4D4E51',
      fontSize: '18px',
      lineHeight: '25px',
   },
}))
const TypographyStyled = styled('Typography')(() => ({
   position: 'relative',
   zIndex: '10',
}))

const AccordionStyled = styled(Accordion)(() => ({
   position: 'relative',
   '& .fullWidth': {
      borderRadius: '5px',
      background: '#048741',
      fontWeight: '600',
      color: '#FFFFFF',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
      transition: '0.3s',
   },
   '& .minWidth': {
      borderRadius: '5px',
      transition: '0.3s',
      background: '#048741',
      fontWeight: '600',
      color: '#FFFFFF',
      width: '1%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 0,
   },
   '& .item1': {
      position: 'relative',
      zIndex: 2,
      backgroundColor: '#04874144',
      left: 5,
   },
   '&  h3': {
      color: '#4D4E51',
      textAlign: 'left',
      paddingLeft: '14px',
   },

   ' & .title': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '27px',
   },
   ' & p, span': {
      textAlign: 'left',
      paddingLeft: '5px',
   },

   ' & .item3, .item2': {
      fontSize: '16px',
      padding: '1rem',
      color: '#4D4E51',
   },
   '& .accordionSummaryLeft': {
      flexDirection: 'row-reverse',
      transform: 'rotate(360deg)',
   },
   '& .accordionSummaryRight': {
      flexDirection: 'row-reverse',
      transform: 'rotate(265deg)',
   },
}))

const AccordionSummerry = styled(ExpandMoreIcon)(() => ({
   color: '#048741',
   width: '20px',
   height: '20px',
   backgroundColor: '#FFFFFF',
   borderRadius: '50%',
}))
const AccordionDetailsStyled = styled(AccordionDetails)(() => ({
   '& li::marker': {
      color: '#009344',
   },
   '& li': {
      paddingLeft: '20px',
   },
}))

const CustomLinkStyle = styled(CustomLink)(() => ({
   textDecoration: 'none',
   color: 'black',
}))
