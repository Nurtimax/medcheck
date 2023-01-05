import { useState } from 'react'
import Input from './components/UI/Input'

function App({ error }) {
   const [state, setState] = useState(false)
   if (state !== '') {
      console.log('hello')
   } else {
      console.log({ error })
   }
   return <Input onChange={(e) => setState(e.target.value)} />
}

export default App
