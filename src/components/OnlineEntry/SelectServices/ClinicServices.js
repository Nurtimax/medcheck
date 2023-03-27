import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Services from './ChooseServices'

import { getAllClinicServices } from '../../../redux/slices/onlineEntrySlice'

const ClinicServices = () => {
   const dispatch = useDispatch()

   const { services } = useSelector((state) => state.online_entry)

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
