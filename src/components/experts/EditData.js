import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExpertRequest } from '../../redux/slices/expertSlice'
import EditExperts from './EditExpert'

const EditData = () => {
   const dispatch = useDispatch()
   const { oneExpert } = useSelector((state) => state.addExpert)

   useEffect(() => {
      dispatch(getExpertRequest())
   }, [dispatch])

   return (
      <div>
         {oneExpert.map((item) => {
            return <EditExperts key={item.id} {...item} />
         })}
      </div>
   )
}

export default EditData
