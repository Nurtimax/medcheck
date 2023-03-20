import { Switch } from '@mui/material'
import { ReactComponent as EditIcon } from '../../assets/icons/edit.svg'
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg'
import { ReactComponent as DoctorIcon } from '../../assets/icons/doctorIcon.svg'

export const tableTitle = [
   '№',
   'Статус',
   'Специалист',
   'Отделение',
   'Расписание до',
   'Действия',
]

export const tableData = [
   {
      number: 1,
      status: <Switch color="success" />,
      userInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Главный врач',
      },
      department: 'Анестезиолог',
      timetable: '30 января 2023',
      actions: {
         edit: <EditIcon />,
         delete: <DeleteIcon />,
      },
   },
   {
      number: 2,
      status: <Switch color="success" />,
      userInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Главный врач',
      },
      department: 'Анестезиолог',
      timetable: '30 января 2023',
      actions: {
         edit: <EditIcon />,
         delete: <DeleteIcon />,
      },
   },
   {
      number: 3,
      status: <Switch color="success" />,
      userInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Главный врач',
      },
      department: 'Анестезиолог',
      timetable: '30 января 2023',
      actions: {
         edit: <EditIcon />,
         delete: <DeleteIcon />,
      },
   },
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
   CHANGE_PASSWORD: '/changePassword',
   PROFILE_CRUD: '/profCrud',
   PROFCRUD_CONTAINER: '/profCrudContainer',
   FORGOT_PASSWROD: '/forgot_password',
}

export const ADMIN_ROUTES = {
   ADMIN: '/admin',
   ONLINE_ENTRY: '/online_entry',
   APPLICATION: '/applications',
   PATIENTS: '/patients',
   SPECIALITY: '/speciality',
}

export const BASE_URL =
   'http://ec2-3-69-31-51.eu-central-1.compute.amazonaws.com/api/'

export const PersonalArea = 'Личный кабинет >'

export const JWT_TOKEN = 'MED_CHECK_JWT_TOKEN'
