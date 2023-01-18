import { MenuItem, styled } from '@mui/material'
import MuiSelect from '@mui/material/Select'

export default function Select({
   options = [],
   onChange,
   value,
   title,
   ...props
}) {
   return (
      <StyledSelect
         sx={{
            '& fieldset': { border: 'none' },
         }}
         displayEmpty
         value={value}
         title={title}
         onChange={onChange}
         fullWidth
         {...props}
         renderValue={(selected) => {
            return <MenuItem>{selected || title}</MenuItem>
         }}
      >
         {options.map((item) => {
            return (
               <MenuItem key={value} value={item.label}>
                  {item.label}
               </MenuItem>
            )
         })}
      </StyledSelect>
   )
}

const StyledSelect = styled(MuiSelect)`
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
      color: #4d4e51;
      border: 1px solid #959595;
   }
   &:active {
      border: 1px solid rgba(4, 135, 65, 0.8);
      color: #4d4e51;
   }
`
