import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import SelectMui from '@mui/material/Select'
import { styled } from '@mui/material'

export default function Select({
   options,

   onChange,
   value,
   label,
   variant,
   placeholder,
}) {
   const handleChange = (event) => {
      onChange(event.target.value)
   }
   return (
      <BoxStyled variant={variant}>
         <InputLabel>{label}</InputLabel>
         <FormControl placeholder={placeholder} fullWidth>
            <SelectMui onChange={handleChange} value={value}>
               {options?.map((el) => {
                  return (
                     <MenuItem key={el.id} value={el.value}>
                        {el.label}
                     </MenuItem>
                  )
               })}
            </SelectMui>
         </FormControl>
      </BoxStyled>
   )
}

const BoxStyled = styled(Box)`
   border-radius: 6px;
   &:hover {
      border: 1px solid green;
   }
   &:active {
      border: 1px solid;
   }
`
