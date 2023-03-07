import * as Yup from 'yup'

export const validationSchemaSignUp = Yup.object().shape({
   firstname: Yup.string()
      .typeError('должна быть строка!')
      .required('Имя является обязательным полем')
      .min(2, 'Имя должно быть не менее 2 символов'),
   lastname: Yup.string()
      .typeError('должна быть строка!')
      .required('Фамилия является обязательным полем!')
      .min(2, 'Фамилия должна быть не менее 5 символов!'),
   phoneNumber: Yup.string('')
      .required('Укажите номер телефона!')
      .min(10, 'Номер телефона должен быть не менее 10 символов')
      .max(13, 'Номер телефона должен быть меньше или равен 13'),
   email: Yup.string().required(
      'Электронная почта является обязательным полем!'
   ),
   password: Yup.string()
      .required('Пожалуйста введите ваш пароль')
      .min(7, 'Пароль должен быть не менее 7 символов!'),

   repeatPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Пароли должны совпадать!'
   ),
})

export const validateSchemaSignIn = Yup.object().shape({
   email: Yup.string().required(
      'Электронная почта является обязательным полем!'
   ),
   password: Yup.string()
      .required('Пожалуйста введите ваш пароль')
      .min(7, 'Пароль должен быть не менее 7 символов!'),
})
