import { format } from 'date-fns'
import { useMemo } from 'react'
import Hours from '../components/time-table/Hours'
import Specialists from '../components/time-table/Specialists'

const useDateAndWeek = (DUMMY_DATA) => {
   const startDate = new Date() // Start from today
   const endDate = new Date(startDate.getTime() + 10 * 24 * 60 * 60 * 1000)
   const options = { year: 'numeric', month: 'long', day: 'numeric' }

   const date = []
   for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const formattedDate = format(new Date(d), 'yyyy-MM-dd')
      date.push(formattedDate)
   }

   const changeDummyDate = useMemo(() => {
      return DUMMY_DATA.reduce((acc, current) => {
         const scheduleTime = current?.scheduleDateAndTimeResponse?.reduce(
            (subAcc, subCurrent) => [
               ...subAcc,
               {
                  Header: new Date(subCurrent.date).toLocaleDateString(
                     'ru-RU',
                     options
                  ),
                  accessor: `date_${
                     date.includes(subCurrent.date)
                        ? subCurrent.date
                        : Math.random()
                  }`,
                  Cell: () => {
                     const timeData = date.includes(subCurrent.date)
                        ? subCurrent
                        : {}

                     return <Hours {...timeData} />
                  },
               },
            ],
            []
         )
         return [...acc, ...scheduleTime]
      }, [])
   }, [])

   const columns = useMemo(
      () => [
         {
            Header: 'Expert Name',
            accessor: 'expertName',
            Cell: ({ row }) => {
               return <Specialists {...row.original} />
            },
         },
         ...changeDummyDate,
      ],
      []
   )

   // Define the data
   const data = useMemo(() => {
      return DUMMY_DATA.map((item) => ({
         expertName: `${item.expert.expertFirstName} ${item.expert.expertLastName}`,
         expertPosition: item.expert.expertPosition,
         expertImage: item.expert.expertImage,
         ...item.scheduleDateAndTimeResponse.reduce((obj, time) => {
            const newObj = { ...obj }
            newObj[
               `date_${date.includes(time.date) ? time.date : Math.random()}`
            ] = time
            return newObj
         }, {}),
      }))
   }, [])

   return { data, columns }
}

export default useDateAndWeek
