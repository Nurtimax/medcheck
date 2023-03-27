import * as Yup from 'yup'

export const validateSchemaSignIn = Yup.object().shape({
   email: Yup.string()
      .email()
      .required('Электронная почта является обязательным полем!'),
   password: Yup.string()
      .required('Пожалуйста введите ваш пароль')
      .matches(
         /^(?=.*\d).{7,}$/,
         'Пароль должен быть не менее 7 символов, содержать по крайней мере одну цифру и может содержать только буквы, цифры или символ "@"'
      ),
})

export const forgetPasswordSchemna = Yup.object().shape({
   email: Yup.string()
      .email()
      .required('Электронная почта является обязательным полем!'),
})

export const validateSchemaChangePassword = Yup.object().shape({
   oldPassword: Yup.string()
      .required('Пожалуйста введите ваш пароль')
      .matches(
         /^(?=.*\d).{7,}$/,
         'Пароль должен быть не менее 7 символов, содержать по крайней мере одну цифру и может содержать только буквы, цифры или символ "@"'
      ),
   newPassword: Yup.string()
      .required('Пожалуйста введите ваш пароль')
      .matches(
         /^(?=.*\d).{7,}$/,
         'Пароль должен быть не менее 7 символов, содержать по крайней мере одну цифру и может содержать только буквы, цифры или символ "@"'
      ),
   confirmPassword: Yup.string().oneOf(
      [Yup.ref('newPassword'), null],
      'Пароли должны совпадать!'
   ),
})
