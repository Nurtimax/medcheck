import { useEffect } from 'react'
import axiosInstance from './api/axiosInstance'
import AppRoutes from './routes/App.Routes'

// import GoogleMap from './components/UI/GoogleMap'

function App() {
   useEffect(() => {
      axiosInstance
         .get(
            'file:///Users/osorov97/Downloads/%D0%9F%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F%20%D0%9C%D0%B5%D0%B4-%D0%A7%D0%B5%D0%BA.pdf',
            {
               responseType: 'arraybuffer',
               headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/pdf',
               },
               params: { subproductId: 1 },
            }
         )
         .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]))
            console.log(url)
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', 'file.pdf') //or any other extension
            document.body.appendChild(link)
            link.click()
            console.log(link)
         })
         .catch((error) => console.log(error))
   }, [])
   return <AppRoutes />
   // return <GoogleMap />
}

export default App
