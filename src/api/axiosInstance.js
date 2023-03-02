import axios from 'axios'
import { BASE_URL } from '../utils/constants/data'

const headers = {
   'Content-type': 'application/json',
}
// let store

// export const injectStore = (_store) => {
//    store = _store
// }

let token =
   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJudXJzdWx0YW4xOTk3QGdtYWlsLmNvbSIsImlhdCI6MTY3Nzc2NDMxNCwiZXhwIjoxNjc3NzY1NzU0fQ.YEusL7ldFzPUL0euw2yiK88IhMoMLW2Ff1CK3f1k-gE'
const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use(
   (config) => {
      const updatedConfig = { ...config }

      if (token) {
         updatedConfig.headers.Authorization = `Bearer ${token}`
      }
      return updatedConfig
   },
   (error) => {
      return Promise.reject(error)
   }
)

export default axiosInstance
