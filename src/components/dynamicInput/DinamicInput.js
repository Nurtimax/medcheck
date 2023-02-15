import { styled } from '@mui/material'
import React from 'react'
import Input from '../UI/Input'
import plus from '../../assets/icons/plus.svg'

const DynamicInput = () => {
   return (
      <InputsContainer>
         <div className="graphic">График : </div>

         <div className="time">
            <div className="inputs">
               <InputsStyled placeholder="00 ч" type="time" />
               <InputsStyled placeholder="00 м" type="time" />
               <span> - </span>
               <InputsStyled placeholder="00 ч" type="time" />
               <InputsStyled placeholder="00 м" type="time" />
            </div>
            <div className="addInterval">
               <img src={plus} alt="" /> Добавить интервал
            </div>
         </div>
      </InputsContainer>
   )
}

const InputsContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '24px',
   fontFamily: '"Manrope" , sans-serif',

   '& .graphic': {
      margin: '10px 0',
   },

   '& .inputs': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
   },

   '& .time': {
      display: 'flex',
      flexDirection: 'column',
      gap: '7px 0',
   },

   '& .addInterval': {
      width: '175px',

      display: 'flex',
      alignItems: 'center',
      color: '#048741',
      cursor: 'pointer',
   },

   '& .addInterval:hover': {
      background: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '3px',
   },
}))

const InputsStyled = styled(Input)(() => ({
   width: '100px',
   height: '38px',
}))

export default DynamicInput
