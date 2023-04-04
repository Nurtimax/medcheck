import { styled } from '@mui/material'
import React from 'react'
import { ReactComponent as Img } from '../../assets/icons/MedCheckLogo.svg'
import { ReactComponent as Icon2 } from '../../assets/icons/medCheck.svg'
import Input from '../UI/Input'
import Button from '../UI/Button'

const GetResults = () => {
   return (
      <GetResultsContainer>
         <div className="container">
            <div className="containere">
               <div className="img">
                  <Img />
                  <Icon2 />
               </div>
               <div className="input">
                  <Input
                     sx={{ width: '220px' }}
                     placeholder="NV2WD0EEO6LZ1QD3JDO"
                  />
                  <Button variant="contained">найти</Button>
               </div>
            </div>

            <div>
               <p>Выдача результатов</p>
               <br />
               <ul>
                  Вы можете: <br />
                  <li>
                     Просмотреть свои результаты анализов онлайн Вы можете,
                     <br />
                     введя в поле слева индивидуальный цифровой код, который
                     указан в верхней части Вашей квитанции под штрих-кодом;
                  </li>{' '}
                  <br />
                  <li>
                     Распечатать результат можно непосредсвенно с этой страницы
                     или сохранить в PDF формате спомощью кнопок,
                     <br /> расположенной в верхней части сайта;
                  </li>{' '}
                  <br />
                  <li className="lii">
                     При возникновении проблем с отображением результатов, Вы
                     можете оставить заявку на получение результатов по
                     электронной почте, <br />
                     позвонив в Службу поддержки клиентов по номеру 909090
                  </li>
               </ul>
            </div>
         </div>
      </GetResultsContainer>
   )
}

export default GetResults

const GetResultsContainer = styled('div')(() => ({
   backgroundImage: 'url(stethoscope-and-copy-space.jpg)',
   paddingTop: '30px',
   minHeight: '80vh',
   '& .img': {
      display: ' flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px',
   },

   '& .input': {
      display: ' flex',
      paddingTop: '30px',
      gap: '30px    ',
   },
   '& .containere': {
      paddingTop: '30px',
      margin: '0 auto',
      alignItems: 'center',
      justifyContent: 'center',
   },
   '& .container': {
      display: ' flex',
      gap: '100px',
   },
   '& p': {
      paddingTop: '20px',
      color: '#346EFB',
   },
   '& ul': {
      color: '#346EFB',
      paddingBottom: '10px',
   },
   '& li': {
      color: '#346EFB',
   },
   '& .lii': {
      color: 'red',
   },
}))
