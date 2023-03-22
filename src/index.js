import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/indexStore'
import { injectStore } from './api/axiosInstance'
import { PersistGate } from 'redux-persist/integration/react'

injectStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <BrowserRouter>
      <PersistGate persistor={persistor} loading={null}>
         <Provider store={store}>
            <App />
         </Provider>
      </PersistGate>
   </BrowserRouter>
)
