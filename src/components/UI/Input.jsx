import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/system'
import { forwardRef } from 'react'

const Input = forwardRef(
   (
      {
         onChange,
         error,
         placeholder,
         type,
         name,
         id,
         value,
         maxLength,
         ...props
      },
      ref
   ) => {
      return (
         <InputStyle
            onChange={onChange}
            error={error}
            placeholder={placeholder}
            ref={ref}
            type={type}
            name={name}
            id={id}
            value={value}
            maxLength={maxLength}
            classes={{ error: 'Error' }}
            {...props}
         />
      )
   }
)

export default Input

const InputStyle = styled(InputBase)`
   width: ${(width) => width || '414px'};
   height: ${(height) => height || '42px'};
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #959595;
   cursor: pointer;
   padding: 10px 8px 10px 16px;
   box-sizing: border-box;
   align-items: center;
   border: 1px solid #d9d9d9;
   border-radius: 8px;
   &.Error {
      border: 1px solid red;
      color: red;
   }
   & {
      :hover {
         box-sizing: border-box;
         color: #4d4e51;
         align-items: center;
         padding: 10px 8px 10px 16px;
         border: 1px solid #959595;
         border-radius: 8px;
      }
   }
   & {
      :active {
         box-sizing: border-box;
         border: 1px solid rgba(4, 135, 65, 0.8);
      }
   }
`
