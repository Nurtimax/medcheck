import Select from './components/UI/Select'
function App() {
   const array = [
      {
         label: 'stmotolog',
         value: '1',
      },
      {
         label: 'urolog',
         value: '2',
      },
      {
         label: 'deflin',
         value: '3',
      },
      {
         label: 'stmotolog',
         value: '4',
      },
   ]
   return (
      <div>
         <Select options={array} variant="contained" />
         <Select variant="outlined" />
      </div>
   )
}

export default App
