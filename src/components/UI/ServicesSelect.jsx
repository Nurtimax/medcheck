import {
   MenuItem,
   ThemeProvider,
   Select,
   styled,
   createTheme,
   InputAdornment,
} from '@mui/material'
import { ReactComponent as ServisecSelectIcon } from '../../assets/icons/services-select-icon.svg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'

const theme = createTheme({
   components: {
      MuiPaper: {
         defaultProps: {
            sx: {
               maxHeight: '261px !important',
               borderRadius: '0 0 10px 10px',
               boxShadow: '0px 5px 44px rgba(0, 0, 0, 0.06)',
               left: '0 !important',
            },
         },
      },
   },
})

export const ServicesDropdown = ({ options, width = 368 }) => {
   const [value, setValue] = useState('')

   const handleChange = ({ target: { value } }) => {
      setValue(value)
   }
   return (
      <ThemeProvider theme={theme}>
         <StyledSelect
            sx={{ width: width }}
            IconComponent={KeyboardArrowDownIcon}
            value={value}
            onChange={handleChange}
            startAdornment={
               <InputAdornment position={'start'}>
                  <ServisecSelectIcon />
               </InputAdornment>
            }
            displayEmpty
            renderValue={(selected) =>
               selected ? selected : 'Выберите услуги'
            }
         >
            {options.map((option) => (
               <MenuItem key={option.label} value={option.value}>
                  {option.value}
               </MenuItem>
            ))}
         </StyledSelect>
      </ThemeProvider>
   )
}
const StyledSelect = styled(Select)(() => ({
   display: 'flex',
   backgroundColor: 'white',
   borderRadius: '16px',
   '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
      padding: 0,
   },
   '& .MuiBox-root': {
      alignItems: 'center',
   },

   '& .MuiSelect-select:focus': {
      borderRadius: '16px',
   },
}))
