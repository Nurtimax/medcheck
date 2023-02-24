import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { fetchCrudGet } from '../../redux/slices/crudSlice'

const CrudApp = () => {
   const { data } = useSelector((state) => state.crudSlice)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(
         fetchCrudGet({
            lastName: '',
         })
      )
   }, [])

   return (
      <div>
         {data.items.map((item) => (
            <div key={item.id}>{item.lastName}</div>
         ))}
      </div>
   )
}

export default CrudApp
