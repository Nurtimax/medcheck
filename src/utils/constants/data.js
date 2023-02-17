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

export const tableTitleDoctors = ['Выбор специалиста', 'Дата и время', 'Статус']

export const tableNameDoctors = [
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      info: {
         date: '12.01.2023',
         time: '15:00',
      },
      statusInfo: 'Отменён',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      info: {
         date: '12.01.2023',
         time: '15:00',
      },
      statusInfo: 'Подтверждён',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      info: {
         date: '12.01.2023',
         time: '15:00',
      },
      statusInfo: 'Завершён',
   },
]

export const scheduleData = [
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time: '10:00',
      event: 'Новогодний концерт',
      location: 'Главная площадь',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time: '14:00',
      event: 'Выставка снежных скульптур',
      location: 'Сквер им. Пушкина',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time: '12:00',
      event: 'Конкурс елок',
      location: 'Детский сад №3',
   },
]
