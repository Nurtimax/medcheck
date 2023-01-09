import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/system'

const Input = ({ onChange, error, placeholder, ref, type, ...props }) => {
   return (
      <InputStyle
         onChange={onChange}
         error={error}
         placeholder={placeholder}
         ref={ref}
         type={type}
         classes={{ error: 'error' }}
         {...props}
      />
   )
}

export default Input

const InputStyle = styled(InputBase)`
   width: ${(props) => (props.width ? props.width : '')};
   height: ${(props) => (props.height ? props.height : '')};
   box-sizing: border-box;
   background-color: #fff;
   border-color: #ae9e9e;
   background-color: #fafbfc;
   border-radius: 8px;
   border: 1px solid rgba(27, 31, 35, 0.15);
   box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
      rgba(255, 255, 255, 0.25) 0 1px 0 inset;
   color: #24292e;
   cursor: pointer;
   font-size: 14px;
   font-weight: 500;
   line-height: 20px;
   list-style: none;
   padding: 6px 16px;
   & {
      .error {
         border: '1px solid red';
      }
   }
   & {
      :hover {
         border-color: #858c8f;
         text-decoration: none;
         transition-duration: 0.2s;
      }
   }
   & {
      :active {
         border-color: #5ce05c;
         box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
         transition: none 0s;
      }
   }
`
