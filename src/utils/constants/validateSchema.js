import * as Yup from 'yup'

export const validateSchemaSignIn = Yup.object().shape({
   email: Yup.string()
      .email()
      .required('Электронная почта является обязательным полем!'),
   password: Yup.string()
      .required('Password is required')
      .matches(
         /^(?=.*\d).{8,}$/,
         'Пароль должен быть не менее 8 символов, содержать по крайней мере одну цифру и может содержать только буквы, цифры или символ "@"'
      ),
})
