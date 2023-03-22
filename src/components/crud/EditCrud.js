import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExpertRequest } from '../../redux/slices/expertSlice'
import EditExperts from './EditExpert'

const EditCrud = () => {
   const dispatch = useDispatch()
   const { oneExpert } = useSelector((state) => state.addExpert)
   console.log(oneExpert)
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

export default EditCrud
