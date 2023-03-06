import { styled } from '@mui/material'
import Input from '../UI/Input'
import PasswordInput from '../UI/PasswordInput'

const AuthInput = ({
   value,
   onChange,
   onBlur,
   type,
   placeholder,
   name,
   className,
   errors,
   touched,
}) => {
   return (
      <Cot>
         {type ? (
            <Input
               className={className}
               type={type}
               fullWidth
               name={name}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               inputProps={{
                  classes: { root: 'input' },
               }}
            />
         ) : (
            <PasswordInputStyled
               value={value}
               name={name}
               onChange={onChange}
               onBlur={onBlur}
               placeholder={placeholder}
               autoComplete={name}
            />
         )}
         <ErrorMessages>{errors && touched && errors}</ErrorMessages>
      </Cot>
   )
}

export default AuthInput

const Cot = styled('div')(() => ({
   margin: '0 auto',
}))

const PasswordInputStyled = styled(PasswordInput)(() => ({
   width: '414px',
   height: '42px',
   marginTop: '15px',
}))

const ErrorMessages = styled('p')(() => ({
   color: 'red',
   margin: '0',
   position: 'relative',
}))
