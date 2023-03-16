import { useEffect, useState } from 'react'
import Hours from '../components/time-table/Hours'
import Specialists from '../components/time-table/Specialists'

const useDateAndWeek = () => {
   const [columns, setColums] = useState([
      {
         Header: 'Специалисты',
         accessor: '',
         style: {
            flex: 0.5,
         },
         Cell: ({ row }) => {
            return <Specialists {...row.original} />
         },
      },
   ])

   const [data, setData] = useState([])

   const startDate = new Date('January 1, 2023')
   const endDate = new Date('January 10, 2023')
   const options = { weekday: 'short', day: 'numeric', month: 'long' }

   useEffect(() => {
      let days = 0
      const newColumns = []
      const newData = []
      for (
         let d = new Date(startDate);
         d <= endDate;
         d.setDate(d.getDate() + 1)
      ) {
         const formattedDate = d.toLocaleDateString('ru-RU', options)
         const columnId = `date_${days}`
         newColumns.push({
            Header: formattedDate,
            accessor: columnId,
            style: {
               flex: 0.5,
            },
            Cell: ({ row }) => {
               return <Hours {...row.original} columnId={columnId} />
            },
         })
         newData.push({ name: 'men', [columnId]: formattedDate })
         days++
      }
      setData((prevState) => [...prevState, ...newData])
      setColums((prevState) => [...prevState, ...newColumns])
   }, [])

   return { data, columns }
}

export default useDateAndWeek
