import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Helloworld = () => {
   const [searching, setSearching] = useSearchParams()

   const showSearchParams = searching.get('filter')
   return (
      <div>
         <p>hello world</p>
         <button onClick={() => setSearching({ filter: 'user' })}>
            search params
         </button>

         {showSearchParams && (
            <p>
               hello world{' '}
               <button onClick={() => setSearching({})}>back</button>
            </p>
         )}
      </div>
   )
}

export default Helloworld
