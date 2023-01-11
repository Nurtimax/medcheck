import * as React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import SelectMui from '@mui/material/Select'
import { styled } from '@mui/material'

export default function Select({
   options,
   getSelectedItem,
   value,
   variant,
   placeholder,
}) {
   const clickhandler = (item) => {
      getSelectedItem(item)
   }
   return (
      <BoxStyled variant={variant} sx={{ width: '200px' }}>
         <FormControl placeholder={placeholder} fullWidth>
            <SelectMui value={value}>
               {options?.map((item) => {
                  return (
                     <MenuItem
                        key={item}
                        value={item}
                        onClick={() => clickhandler(item)}
                     >
                        {item}
                     </MenuItem>
                  )
               })}
            </SelectMui>
         </FormControl>
      </BoxStyled>
   )
}

const BoxStyled = styled(Box)`
   box-sizing: border-box;
   border: 1px solid #d9d9d9;
   border-radius: 6px;
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #959595;
   &:hover {
      box-sizing: border-box;
      border: 1px solid #d9d9d9;
      color: #4d4e51;
   }
   &:active {
      box-sizing: border-box;
      border: 1px solid rgba(4, 135, 65, 0.8);
   }
`
