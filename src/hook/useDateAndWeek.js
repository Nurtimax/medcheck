import { useEffect, useState } from 'react'
import Hours from '../components/time-table/Hours'
import Specialists from '../components/time-table/Specialists'

const useDateAndWeek = (items) => {
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
   const startDate = new Date('03.12.2023')
   const endDate = new Date('03.22.2023')

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

         items.map((item) => {
            return item.scheduleDateAndTimeResponse.map((time) => {
               if (
                  new Date(time.date).toLocaleDateString('ru-RU', options) ===
                  formattedDate
               ) {
                  newData.push({
                     ...item.scheduleDateAndTimeResponse,
                     [columnId]: time.startTime,
                     [columnId]: time.finishTime,
                  })
                  return time.date
               }
               return null
            })
         })

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
         days++
      }
      setData((prevState) => [...prevState, ...newData])
      setColums((prevState) => [...prevState, ...newColumns])
   }, [])

   console.log(data)

   return { data, columns }
}

export default useDateAndWeek
