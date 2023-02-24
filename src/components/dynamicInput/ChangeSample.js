import { styled } from '@mui/material'
import dayjs from 'dayjs'
import React, { useState } from 'react'
import DynamicInput from './DynamicInput'

import plus from '../../assets/icons/plus.svg'

const ChangeSample = () => {
   const [times, setTimes] = useState([
      {
         id: 1,
         firstHour: dayjs('00'),
         firstMinute: dayjs('00'),
         secondHour: dayjs('00'),
         secondMinute: dayjs('00'),
      },
   ])

   const changeHandler = (id, key, value) => {
      setTimes((prevState) =>
         prevState.map((item) => {
            if (item.id === id) {
               const newData = {
                  ...item,
                  [key]: value,
               }

               return newData
            }
            return item
         })
      )
   }
   const addIntervalHandler = () => {
      setTimes((prevState) => [
         ...prevState,
         {
            id: prevState[prevState.length - 1].id + 1,
            firstHour: dayjs('00'),
            firstMinute: dayjs('00'),
            secondHour: dayjs('00'),
            secondMinute: dayjs('00'),
         },
      ])
   }
   return (
      <>
         {times.map((item) => {
            return (
               <DynamicInput
                  key={item.id}
                  changeHandler={changeHandler}
                  {...item}
               />
            )
         })}
         <AddInterval onClick={addIntervalHandler}>
            <img src={plus} alt="plus" /> add interval
         </AddInterval>
      </>
   )
}

const AddInterval = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   width: '130px',
   color: '#048741',

   cursor: 'pointer',
   marginTop: '10px',
   padding: '0 10px',
   gap: '5px',
   '&:hover': {
      background: 'rgba(0,0,0,0.1)',
      borderRadius: '4px',
   },
}))

export default ChangeSample
