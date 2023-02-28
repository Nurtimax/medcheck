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
   'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJudXJzdWx0YW4xOTk3QGdtYWlsLmNvbSIsImlhdCI6MTY3NzUwNDY1NiwiZXhwIjoxNjc3NTA2MDk2fQ.Vb9I2qB2Uoy_tIm36djdH8JGLRHMuKZ052KFKbPJ1ls'

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
