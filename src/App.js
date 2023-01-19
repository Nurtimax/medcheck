import Tables from './components/Tables'

const sos = [
   {
      id: 1,
      number: 1,
      status: 'иконка',
      speciality: 'Манак Елена',
      otdelenie: 'Анестезиолог',
      time: '30 января',
      action: 'иконки',
   },
   {
      id: 1,
      number: 2,
      status: 'иконка',
      speciality: 'Григорий',
      otdelenie: 'Анестезиолог',
      time: '25 января',
      action: 'иконки',
   },
   {
      id: 1,
      number: 3,
      status: 'иконка',
      speciality: 'Манак Елена',
      otdelenie: 'Анестезиолог',
      time: '18 января',
      action: 'иконки',
   },
]
function App() {
   return (
      <div>
         <Tables sos={sos} />
      </div>
   )
}

export default App
