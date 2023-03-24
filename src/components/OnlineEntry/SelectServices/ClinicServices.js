import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Services from './Services'

import { getAllClinicServices } from '../../../redux/slices/onlineEntrySlice'

const ClinicServices = () => {
   const dispatch = useDispatch()

   const { services } = useSelector((state) => state.onlineEntry)

   useEffect(() => {
      dispatch(getAllClinicServices())
   }, [dispatch])

   return (
      <div>
         {services.map((item) => {
            return <Services {...item} key={item.id} />
         })}
      </div>
   )
}

export default ClinicServices
