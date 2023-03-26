import { ReactComponent as SurgeonIcon } from '../../assets/icons/surgeonIcon.svg'
import { ReactComponent as EmptyIcon } from '../../assets/icons/emptyIcon.svg'
import { styled } from '@mui/material'

export const SCHEDULE_DATA = [
   {
      doctorInfo: {
         img: <EmptyIcon />,
         name: 'Манак Елена',
         speciality: 'Врач-хирург',
      },
      time1: {
         hours1: '11:00 - 13:00',
         hours2: '15:00 - 16:00',
         hours3: '17:00 - 17:30',
      },
      time2: '',
      time3: '',
      time4: '',
      time5: '',
      time6: {
         hours1: '11:00 - 13:00',
         hours2: '15:00 - 16:00',
         hours3: '17:00 - 17:30',
      },
      time7: '',
      time8: '',
      time9: '',
      time10: '',
      time11: '',
   },
   {
      doctorInfo: {
         img: <EmptyIcon />,
         name: 'Манак Елена',
         speciality: 'Врач-хирург',
      },
      time1: {
         hours1: '11:00 - 13:00',
         hours2: '15:00 - 16:00',
         hours3: '17:00 - 17:30',
      },
      time2: '20:00',
      time3: {
         hours1: '11:00 - 13:00',
         hours2: '15:00 - 16:00',
      },
      time4: '',
      time5: '',
      time6: '',
      time7: '',
      time8: '',
      time9: '',
      time10: '',
      time11: '',
   },
   {
      doctorInfo: {
         img: <SurgeonIcon />,
         name: 'Гаталуский Артур',
         speciality: 'Врач-хирург',
      },
      time1: {
         hours1: '11:00 - 13:00',
         hours2: '15:00 - 16:00',
         hours3: '17:00 - 17:30',
      },
      time2: '',
      time3: {
         hours1: '11:00 - 13:00',
         hours2: '15:00 - 16:00',
      },
      time4: '',
      time5: '',
      time6: '',
      time7: '',
      time8: '',
      time9: '',
      time10: '',
      time11: '',
   },
   {
      doctorInfo: {
         img: <SurgeonIcon />,
         name: 'Гаталуский Артур',
         speciality: 'Врач-хирург',
      },
      time1: '',
      time2: '',
      time3: '',
      time4: '',
      time5: '',
      time6: '',
      time7: '',
      time8: '',
      time9: '',
      time10: '',
      time11: '',
   },
   {
      doctorInfo: {
         img: <SurgeonIcon />,
         name: 'Гаталуский Артур',
         speciality: 'Врач-хирург',
      },
      time1: '',
      time2: '',
      time3: '',
      time4: '',
      time5: '',
      time6: '',
      time7: '',
      time8: '',
      time9: '',
      time10: '',
      time11: '',
   },
   {
      doctorInfo: {
         img: <SurgeonIcon />,
         name: 'Гаталуский Артур',
         speciality: 'Врач-хирург',
      },
      time1: '',
      time2: '',
      time3: '',
      time4: '',
      time5: '',
      time6: '',
      time7: '',
      time8: '',
      time9: '',
      time10: '',
      time11: '',
   },
]

export const SCHEDULE_COLL = [
   {
      Header: {
         doctor: 'Специалисты',
      },
      accessor: 'doctorInfo',
      Cell: ({ value }) => (
         <Container>
            <div>{value.img}</div>
            <div className="name">{value.name}</div>
            <div className="speciality">{value.speciality}</div>
         </Container>
      ),
   },

   {
      Header: {
         day: 'ПН',
         date: '1-Май',
      },

      accessor: 'time1',
      Cell: ({ value }) =>
         value && (
            <Time className="time">
               <p>{value.hours1}</p>
               <p>{value.hours2}</p>
               <p>{value.hours3}</p>
            </Time>
         ),
   },
   {
      Header: {
         day: 'ВТ',
         date: '2-Май',
      },
      accessor: 'time2',
      Cell: () => (
         <p>
            <p></p>
            <p></p>
            <p></p>
         </p>
      ),
   },
   {
      Header: {
         day: 'СР',
         date: '3-Май',
      },
      accessor: 'time3',
      Cell: ({ value }) =>
         value && (
            <Time className="time">
               <p>{value.hours1}</p>
               <p>{value.hours2}</p>
               <p>{value.hours3}</p>
            </Time>
         ),
   },

   {
      Header: {
         day: 'ЧТ',
         date: '4-Май',
      },
      accessor: 'time4',
      Cell: () => (
         <p>
            <p></p>
            <p></p>
            <p></p>
         </p>
      ),
   },
   {
      Header: {
         day: 'ПТ',
         date: '5-Май',
      },
      accessor: 'time5',
      Cell: () => (
         <p>
            <p></p>
            <p></p>
            <p></p>
         </p>
      ),
   },
   {
      Header: {
         day: 'СБ',
         date: '6-Май',
      },
      accessor: 'time6',
      Cell: ({ value }) =>
         value && (
            <Time className="time">
               <p>{value.hours1}</p>
               <p>{value.hours2}</p>
               <p>{value.hours3}</p>
            </Time>
         ),
   },
   {
      Header: {
         day: 'ВС',
         date: '7-Май',
      },
      accessor: 'time7',
      Cell: () => (
         <p>
            <p></p>
            <p></p>
            <p></p>
         </p>
      ),
   },
   {
      Header: {
         day: 'ПН',
         date: '8-Май',
      },
      accessor: 'time8',
      Cell: () => (
         <p>
            <p></p>
            <p></p>
            <p></p>
         </p>
      ),
   },
   {
      Header: {
         day: 'ВТ',
         date: '9-Май',
      },
      accessor: 'time9',
      Cell: () => (
         <p>
            <p></p>
            <p></p>
            <p></p>
         </p>
      ),
   },
   {
      Header: {
         day: 'СР',
         date: '10-Май',
      },
      accessor: 'time10',
      Cell: () => (
         <p>
            <p></p>
            <p></p>
            <p></p>
         </p>
      ),
   },
   {
      Header: {
         day: 'ЧТ',
         date: '11-Май',
      },
      accessor: 'time11',
      Cell: () => (
         <p>
            <p></p>
            <p></p>
            <p></p>
         </p>
      ),
   },
]

const Container = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   '& .name': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '19px',
      whiteSpace: 'nowrap',
      color: '#222222',
   },
   '& .speciality': {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '16px',
      whiteSpace: 'nowrap',
      color: '#959595',
   },
}))

const Time = styled('div')(() => ({
   fontFamily: 'Open Sans',
   fontStyle: 'italic',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '15px',
   boxSizing: 'border-box',
   position: 'relative',
   top: '-30px',
   marginTop: '15px',
   background: '#DBEBFF',
   padding: ' 5px',
   color: '#1F6ED4',
   borderLeft: '3px solid #1F6ED4',
   borderTop: '1px dotted',
   borderRight: '1px dotted',
   borderBottom: '1px dotted',
}))

export const DUMMY_DATA = [
   // ['2023-03-26', '2023-03-27', '2023-03-28', '2023-03-29', '2023-03-30',
   //  '2023-03-31', '2023-04-01', '2023-04-02', '2023-04-03', '2023-04-04', '2023-04-05']

   {
      id: 1,
      expert: {
         id: 1,
         expertFirstName: 'Салтанат',
         expertLastName: 'Омушева',
         expertPosition: 'Аллерголог',
         expertImage: 'https://medik.kg/doctor/omusheva/',
      },
      scheduleDateAndTimeResponse: [
         {
            startTime: '10:00:00',
            finishTime: '18:00:00',
            date: '2023-03-26',
         },
         {
            startTime: '10:00:00',
            finishTime: '18:00:00',
            date: '2023-03-27',
         },
         {
            startTime: '10:00:00',
            finishTime: '18:00:00',
            date: '2023-03-28',
         },
         {
            startTime: '10:00:00',
            finishTime: '18:00:00',
            date: '2023-03-29',
         },
      ],
   },
   {
      id: 2,
      expert: {
         id: 2,
         expertFirstName: 'Эркинбек',
         expertLastName: 'Эсекеев',
         expertPosition: 'Вакцинолог',
         expertImage: 'https://medik.kg/doctor/esekeev/',
      },
      scheduleDateAndTimeResponse: [
         {
            startTime: '10:00:00',
            finishTime: '18:00:00',
            date: '2023-03-11',
         },
         {
            startTime: '10:00:00',
            finishTime: '18:00:00',
            date: '2023-04-01',
         },
         {
            startTime: '10:00:00',
            finishTime: '18:00:00',
            date: '2023-04-02',
         },
         {
            startTime: '10:00:00',
            finishTime: '18:00:00',
            date: '2023-04-05',
         },
      ],
   },
]
