import ScheduleTable from './components/table/Schudule.Table'
import { scheduleData } from './utils/constants/data'

function App() {
   return (
      <div>
         <ScheduleTable data={scheduleData} />
      </div>
   )
}

export default App
