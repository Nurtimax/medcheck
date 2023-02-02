import { useRoutes } from 'react-router-dom'
import { routesConfig } from './routesConfig'

const RoutesRender = () => {
   const routes = useRoutes(routesConfig)
   return routes
}

export default RoutesRender
