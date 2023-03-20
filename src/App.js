import { useEffect } from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { postSignUp } from './redux/slices/authSlice'
import AppRoutes from './routes/App.Routes'
import { JWT_TOKEN } from './utils/constants/data'

function App() {
   const dispatch = useDispatch()

   const autoLogin = useCallback(() => {
      const authUser = JSON.parse(localStorage.getItem(JWT_TOKEN))

      if (authUser) {
         dispatch(postSignUp(authUser))
      }
   }, [dispatch])

   useEffect(() => {
      autoLogin()
   }, [])

   return (
      <div>
         <AppRoutes />
      </div>
   )
}

export default App
