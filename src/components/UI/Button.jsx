import { styled } from '@mui/material'
import MuiButton from '@mui/material/Button'

function Button({ children, disabled, onClick, variant, ...props }) {
   return (
      <ButtonStyle
         onClick={onClick}
         disabled={disabled}
         variant={variant}
         {...props}
      >
         {children}
      </ButtonStyle>
   )
}
export default Button

const ButtonStyle = styled(MuiButton)`
   width: ${(props) => (props.width ? props.width : '')};
   height: ${(props) => (props.height ? props.height : '')};
   text-transform: none;
   font-weight: 500;
   font-size: 14px;
   line-height: 18px;
   border-radius: 6px;
   color: #fff4f4;
   padding: 10px 12px;
   cursor: 'pointer';
   text-align: center;

   &.MuiButton-outlined {
      color: ${({ bgColor }) => bgColor || '#43ae28'};
      border-color: ${({ bgColor }) => bgColor || '#43ae28'};
   }
   &:hover {
      background: ${(props) => props.bgColor || '#3ebb1f'};
      color: #ffffff;
      transition-duration: '0.6s';
      border: 'none';
   }
   &:active {
      background: ${({ bgColor }) => bgColor || '#43ae28'};
      box-shadow: 'rgba(225, 228, 232, 0.2) 0 1px 0 inset';
   }
   &:disabled {
      background-color: rgba(181, 164, 164, 0.12);
      color: #d0bebe;
      box-shadow: none;
      cursor: 'default';
      border: 'none';
   }
   &.MuiButton-contained {
      background: ${({ bgColor }) => bgColor || '#43ae28'};
      font-size: 14px;
      border: none;
      color: #ffffff;

      &:hover {
         background: ${({ bgColor }) => bgColor || '#3ebb1f'};
         color: #ffffff;
         transition-duration: '0.6s';
         border: 'none';
      }
      &:active {
         background: ${({ bgColor }) => bgColor || '#43ae28'};
         box-shadow: 'rgba(225, 228, 232, 0.2) 0 1px 0 inset';
      }
      &:disabled {
         background-color: rgba(0, 0, 0, 0.12);
         color: #fff;
         box-shadow: none;
         cursor: 'default';
      }
   }
`
