import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { data } from './../utils/constants/data'
import { styled } from '@mui/material'
import { useState } from 'react'

function App() {
   const [bgColor, setBgColor] = useState(false)

   const changeColorHandler = () => {
      setBgColor((prevState) => !prevState)
   }

   return (
      <Container>
         <DivTitleStyle>
            <h1>Наш</h1>
            <H1Style>прайс</H1Style>
         </DivTitleStyle>

         <p className="text">
            Цены на услуги формируются в соответствии с действующими
            Прейскурантами. Общая стоимость зависит от объема услуг, оказываемых
            в рамках приёма. Объём оказываемых услуг определяется врачом, исходя
            из показаний для обследования и пожеланий клиента.
         </p>
         {data.map((item) => (
            <Accordion key={item.title}>
               <AccordionSummarySTyle
                  bgColor={bgColor}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  onClick={changeColorHandler}
               >
                  <Typography> {item.title}</Typography>
               </AccordionSummarySTyle>
               <AccordionDetails>
                  <DivStyle>
                     <TypographyStyle> {item.description}</TypographyStyle>
                     <Typography>{item.price}</Typography>
                  </DivStyle>
                  <Typography>{item.info}</Typography>
                  <hr />
                  <DivStyle>
                     <Typography>{item.description1}</Typography>
                     <Typography>{item.price}</Typography>
                  </DivStyle>
                  <hr />
                  <DivStyle>
                     <Typography>{item.description2}</Typography>
                     <Typography>{item.price}</Typography>
                  </DivStyle>
               </AccordionDetails>
            </Accordion>
         ))}
      </Container>
   )
}

export default App

const Container = styled('div')(() => ({
   width: '1440px',
   margin: '0 auto',

   '& .text': {
      width: '691px',
      padding: '34px 0',
      fontSize: '18px',
   },
}))

const AccordionSummarySTyle = styled(AccordionSummary)(({ bgColor }) => ({
   backgroundColor: '#00ff0642',
   borderLeft: '10px solid green',
   borderRadius: '5px',
   margin: '10px',
   '&:focus': {
      backgroundColor: bgColor ? 'green' : '',
      color: bgColor ? '#fff' : '#222',
   },
}))

const TypographyStyle = styled('h4')(() => ({
   color: 'black',
   fontSize: '18px',
}))

const DivStyle = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-around',
   alignItems: 'center',
}))

const H1Style = styled('h1')(() => ({
   color: 'green',
}))

const DivTitleStyle = styled('div')(() => ({
   display: 'flex',
   gap: '10px',
   marginTop: '20px',
}))
