import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { NavLink, useParams } from 'react-router-dom'
import { Breadcrumbs as MuiBreadcrumbs, styled } from '@mui/material'
import { SERVICE_MED } from '../../utils/constants/serviceMed'

const Breadcrumbs = () => {
   const { id } = useParams()
   const serviceId = () => {
      const serviceTitle = SERVICE_MED.find((item) => item.id === +id)
      return <span>{serviceTitle.title}</span>
   }
   const breadcrumbs = useBreadcrumbs([
      {
         path: '/',
         breadcrumb: 'Главная',
      },
      {
         path: '/services',
         breadcrumb: 'Услуги',
      },
      { path: '/services/:id', breadcrumb: serviceId },
   ])

   return (
      <MuiBreadcrumbs>
         {breadcrumbs.length > 1 &&
            breadcrumbs.map(({ match, breadcrumb }) => (
               <StyledLink
                  key={match.pathname}
                  to={match.pathname}
                  className={({ isActive }) =>
                     isActive ? 'active' : 'no-active'
                  }
               >
                  {breadcrumb}
               </StyledLink>
            ))}
      </MuiBreadcrumbs>
   )
}

export default Breadcrumbs

const StyledLink = styled(NavLink)(() => ({
   textDecoration: 'none',
   color: 'inherit',

   '&.active': {
      color: '#048741',
   },
}))
