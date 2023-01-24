import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/ru'
import { createTheme, ThemeProvider } from '@mui/material'
import { ReactComponent as DatePickerIcon } from '../../assets/icons/datePicker.svg'

const theme = createTheme({
   palette: {
      primary: {
         main: '#048741',
      },
   },
   components: {
      MuiFormControl: {
         defaultProps: {
            sx: {
               maxWidth: '150px',
               '& .MuiInputBase-root': {
                  padding: '0 10px 0 0',
               },
               '& .Mui-focused': {
                  border: 'none',
               },
               '& .MuiInputBase-input': {
                  padding: '8px 12px',
                  fontFamily: '"Manrope", sans-serif',
               },
               '& .MuiOutlinedInput-notchedOutline': {},
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
                  fontSize: '14px',
                  fontWeight: '500',
               },
               '& .MuiTypography-root': {
                  textTransform: 'capitalize',
                  maxWidth: '32px',
                  maxHeight: '32px',
                  margin: 0,
               },
               '& .Mui-selected': {
                  backgroundColor: '#048741 !important',
                  color: 'white',
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
                  padding: '10px 24px 10px 24px',
               },
               '& .MuiDayPicker-weekContainer': {
                  padding: '0 16px',
               },
            },
         },
      },
   },
})

export const DatePickerUI = ({ value, onChange }) => {
   return (
      <ThemeProvider theme={theme}>
         <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
            <DatePicker
               components={{
                  OpenPickerIcon: DatePickerIcon,
               }}
               views={['day']}
               inputFormat={'DD.MM.YYYY'}
               dayOfWeekFormatter={(day) => `${day}`}
               toolbarFormat="DDD DD MMMM"
               value={value}
               onChange={onChange}
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
