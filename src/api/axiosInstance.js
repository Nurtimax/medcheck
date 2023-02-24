import axios from 'axios'
import { BASE_URL } from '../../../utils/constants/data'

const headers = {
   'Content-type': 'application/json',
}
let store

export const injectStore = (_store) => {
   store = _store
}

const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers,
})

axiosInstance.interceptors.request.use(
   (config) => {
      const updatedConfig = { ...config }

      const { token } = store.getState().auth
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
