import { styled } from '@mui/material'
import MuiButton from '@mui/material/Button'

function Button({
   children,
   disabled,
   onClick,
   variant,
   width,
   height,
   ...props
}) {
   return (
      <ButtonStyle
         onClick={onClick}
         disabled={disabled}
         variant={variant}
         width={width}
         height={height}
         {...props}
      >
         {children}
      </ButtonStyle>
   )
}
export default Button

const ButtonStyle = styled(MuiButton)`
   &.MuiButton-outlined {
      background-color: 'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%)';
      width: ${(props) => (props.width ? props.width : '111px')};
      height: ${(props) => (props.height ? props.height : '42px')};
      box-sizing: border-box;
      font-family: 'Manrope';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      border-radius: 10px;
      text-align: center;
      border-color: #048741;
      color: #048741;
   }
   &:hover {
      background: ${({ bgColor }) =>
         bgColor ||
         'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%);'};
      color: #ffffff;
      transition-duration: '0.6s';
      border: 'none';
   }
   &:active {
      background-color: ${({ bgColor }) =>
         bgColor ||
         'linear-gradient(180.61deg, #0CBB6B 0.45%, #027B44 99.39%);'};
      box-shadow: 'rgba(225, 228, 232, 0.2) 0 1px 0 inset';
   }
   &:disabled {
      color: #d3d3d3;
      box-shadow: none;
      cursor: 'default';
      border: 1px solid #f5f5f5;
   }
   &.MuiButton-contained {
      background: linear-gradient(180.61deg, #0cbb6b 0.45%, #027b44 99.39%);
      font-size: 14px;
      border: none;
      align-items: center;
      padding: 14px 32px;
      border-radius: 10px;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      color: #ffffff;

      &:hover {
         background: linear-gradient(180.61deg, #08df7d 0.45%, #048f50 82.76%);
         color: #ffffff;
         transition-duration: '0.6s';
      }
      &:active {
         background: linear-gradient(180.61deg, #0cbb6b 0.45%, #027b44 99.39%);
      }
      &:disabled {
         background: #d3d3d3;
         color: #fff;
         box-shadow: none;
         cursor: 'default';
      }
   }
`
