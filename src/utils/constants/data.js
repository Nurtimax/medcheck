export const tableTitle = [
   '№',
   'Статус',
   'Специалист',
   'Отделение',
   'Расписание до',
   'Действия',
]

export const ROUTES = {
   MAIN: '/main',
   SIGN_IN: '/sign_in',
   SIGN_UP: '/sign_up',
   ABOUT_CLINIC: '/about_cLinic',
   SERVICES: '/services',
   DOCTORS: '/doctors',
   PRICE: '/price',
   FEEDBACKS: '/feedbacks',
   CONTACTS: '/contacts',
   NOT_FOUND: '/*',
   FORGOT_PASSWROD: '/forgot_password',
}

export const ADMIN_ROUTES = {
   ADMIN: 'admin',
   ONLINE_ENTRY: 'online_entry',
   APPLICATION: 'applications',
   PATIENTS: 'patients',
   SPECIALITY: 'speciality',
   ADD_EXPERT: '/speciality/add_expert',
   EDIT_EXPERT: '/speciality/edit_expert',
}

export const BASE_URL =
   'http://ec2-3-73-100-3.eu-central-1.compute.amazonaws.com/api/'

export const JWT_TOKEN = 'MED_CHECK_JWT_TOKEN'
