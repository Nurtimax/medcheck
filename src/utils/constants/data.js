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

export const schedule_data = [
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time1: '10:00',
      time2: '10:00',
      time3: '10:00',
      time4: '10:00',
      time5: '10:00',
      time6: '10:00',
      time7: '10:00',
      time8: '10:00',
      time9: '10:00',
      time10: '10:00',
      time11: '10:00',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time1: '10:00',
      time2: '10:00',
      time3: '10:00',
      time4: '10:00',
      time5: '10:00',
      time6: '10:00',
      time7: '10:00',
      time8: '10:00',
      time9: '10:00',
      time10: '10:00',
      time11: '10:00',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time1: '10:00',
      time2: '10:00',
      time3: '10:00',
      time4: '10:00',
      time5: '10:00',
      time6: '10:00',
      time7: '10:00',
      time8: '10:00',
      time9: '10:00',
      time10: '10:00',
      time11: '10:00',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time1: '10:00',
      time2: '10:00',
      time3: '10:00',
      time4: '10:00',
      time5: '10:00',
      time6: '10:00',
      time7: '10:00',
      time8: '10:00',
      time9: '10:00',
      time10: '10:00',
      time11: '10:00',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time1: '10:00',
      time2: '10:00',
      time3: '10:00',
      time4: '10:00',
      time5: '10:00',
      time6: '10:00',
      time7: '10:00',
      time8: '10:00',
      time9: '10:00',
      time10: '10:00',
      time11: '10:00',
   },
   {
      doctorInfo: {
         photo: <DoctorIcon />,
         name: 'Манак Елена',
         speciality: 'Окулист',
      },
      time1: '10:00',
      time2: '10:00',
      time3: '10:00',
      time4: '10:00',
      time5: '10:00',
      time6: '10:00',
      time7: '10:00',
      time8: '10:00',
      time9: '10:00',
      time10: '10:00',
      time11: '10:00',
   },
]

export const schedule_coll = [
   {
      Header: 'Специалисты',
      accessor: 'doctorInfo',
   },

   {
      Header: 'ПН 1-Май',
      accessor: 'time1',
   },
   {
      Header: 'ВТ 2-Май',
      accessor: 'time2',
   },
   {
      Header: 'СР 3-Май',
      accessor: 'time3',
   },
   {
      Header: 'ЧТ 4-Май',
      accessor: 'time4',
   },
   {
      Header: 'ПТ 5-Май',
      accessor: 'time5',
   },
   {
      Header: 'СБ 6-Май',
      accessor: 'time6',
   },
   {
      Header: 'ВС 7-Май',
      accessor: 'time7',
   },
   {
      Header: 'ПН 8-Май',
      accessor: 'time8',
   },
   {
      Header: 'ВТ 9-Май',
      accessor: 'time9',
   },
   {
      Header: 'СР 10-Май',
      accessor: 'time10',
   },
   {
      Header: 'ЧТ 11-Май',
      accessor: 'time11',
   },
]
