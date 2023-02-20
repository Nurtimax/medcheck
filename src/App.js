import ScheduleTable from './components/table/Schudule.Table'
import { schedule_data } from './utils/constants/data'

function App() {
   return (
      <div>
         <ScheduleTable data={schedule_data} />
      </div>
   )
}

export default App
