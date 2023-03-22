import React from 'react'
import { Link, useMatch } from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
   const match = useMatch(to)
   return (
      <Link
         to={to}
         {...props}
         style={{
            color: match && '#027B44',
            borderBottom: match && '2px solid green',
         }}
      >
         {children}
      </Link>
   )
}

export default CustomLink
