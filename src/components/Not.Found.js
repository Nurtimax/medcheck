import React from 'react'

import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <div>
         <section>
            <div>
               <h1>404</h1>
               <h3>PAGE NOT FOUND</h3>
               <Link to="/">
                  <h3>BACK TO HOME</h3>
               </Link>
            </div>
         </section>
      </div>
   )
}

export default NotFound
