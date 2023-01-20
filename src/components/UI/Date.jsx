import { useState } from 'react'
import dayjs from 'dayjs'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/ru'
import { createTheme, ThemeProvider } from '@mui/material'
import { ReactComponent as DatePickerIcon } from '../../assets/icons/datePicker.svg'

const theme = createTheme({
   components: {
      MuiFormControl: {
         defaultProps: {
            sx: {
               maxWidth: '150px',
               '& .MuiInputBase-root': {
                  padding: '0 18px 0 0',
               },
               '& .MuiInputBase-input': {
                  padding: '8px 12px',
                  fontFamily: '"Manrope", sans-serif',
               },
            },
         },
      },
      MuiPaper: {
         defaultProps: {
            sx: {
               maxWidth: '256px',
               maxHeight: '294px',
               '& .MuiPickersCalendarHeader-label': {
                  textTransform: 'capitalize',
               },
               '& .MuiTypography-root': {
                  textTransform: 'capitalize',
                  maxWidth: '32px',
                  maxHeight: '32px',
               },
               '& .Mui-selected': {
                  backgroundColor: '#048741 !important',
               },
               '& .Mui-selected:hover': {
                  backgroundColor: '#29d576',
               },
               '& .MuiCalendarPicker-root': {
                  maxWidth: '256px',
                  margin: 0,
               },
               '& .css-epd502': {
                  maxWidth: '256px',
               },
               '& .MuiPickersDay-root': {
                  margin: 0,
                  fontSize: '14px !important',
                  maxWidth: '32px',
                  maxHeight: '32px',
               },
               '& .MuiPickersCalendarHeader-root': {
                  margin: 0,
                  padding: '16px 24px 12px 24px',
               },
               '& .MuiDayPicker-weekContainer': {
                  padding: '0 16px',
               },
            },
         },
      },
   },
})

export const DatePickerUI = () => {
   const [value, setValue] = useState(dayjs())
   return (
      <ThemeProvider theme={theme}>
         <LocalizationProvider dateAdapter={AdapterDayjs} locale={'ru'}>
            <DatePicker
               components={{
                  OpenPickerIcon: DatePickerIcon,
               }}
               views={['day']}
               inputFormat={'DD.MM.YYYY'}
               dayOfWeekFormatter={(day) => `${day}`}
               toolbarFormat="DDD DD MMMM"
               value={value}
               onChange={(newValue) => {
                  setValue(newValue)
               }}
               renderInput={(params) => (
                  <TextField
                     {...params}
                     helperText={null}
                     inputProps={{
                        ...params.inputProps,
                        placeholder: 'дд.мм.гг',
                     }}
                  />
               )}
            />
         </LocalizationProvider>
      </ThemeProvider>
   )
}
