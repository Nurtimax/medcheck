import { styled } from '@mui/material'
import { TextField } from '@mui/material'
import { Stack } from '@mui/system'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'

const DynamicInput = ({
   id,
   firstHour,
   changeHandler,
   firstMinute,
   secondHour,
   secondMinute,
}) => {
   const handleChange = (key, value) => {
      changeHandler(id, key, value)
   }

   return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <TimesContainer>
            <div>
               <TimePicker
                  ampmInClock
                  views={['hours']}
                  inputFormat="hh"
                  mask="__"
                  value={firstHour}
                  onChange={(newValue) => {
                     handleChange('firstHour', newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
               />
            </div>
            <div>
               <TimePicker
                  ampmInClock
                  views={['minutes']}
                  inputFormat="mm"
                  mask="__"
                  value={firstMinute}
                  onChange={(newValue) => {
                     handleChange('firstMinute', newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
               />
            </div>

            <span>-</span>
            <div>
               <TimePicker
                  views={['hours']}
                  ampmInClock
                  inputFormat="hh"
                  mask="__"
                  value={secondHour}
                  onChange={(newValue) => {
                     handleChange('secondHour', newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
               />
            </div>
            <div>
               <TimePicker
                  views={['minutes']}
                  ampmInClock
                  inputFormat="mm"
                  mask="__"
                  value={secondMinute}
                  onChange={(newValue) => {
                     handleChange('secondMinute', newValue)
                  }}
                  renderInput={(params) => <TextField {...params} />}
               />
            </div>
         </TimesContainer>
      </LocalizationProvider>
   )
}

const TimesContainer = styled(Stack)(() => ({
   flexDirection: 'row',
   alignItems: 'center',
   gap: '6px',
   marginTop: '10px',

   '& div': {
      width: '100px',
      height: '40px',
   },
}))

export default DynamicInput
