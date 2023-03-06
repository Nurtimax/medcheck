import axios from 'axios'
import { BASE_URL } from '../utils/constants/data'

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
      const token = store.getState().auth.user.token

      if (token) {
         updatedConfig.headers.Authorization = `Bearer ${token}`
      }
      return updatedConfig
   },
   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },
   (error) => {
      if (error.response?.status === 500) {
         // logout()
         // remove user from local storage
         // reseeet redux state
         throw new Error('500 unauthorized')
      }
      if (error.response?.status === 403) {
         // logout()
         // remove user from local storage
         // reseeet redux state
         throw new Error('500 unauthorized')
      }
      return Promise.reject(error)
   }
)

export default axiosInstance
