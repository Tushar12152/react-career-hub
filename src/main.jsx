import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRouter from './components/Router/Router'
import AuthProvider from './Provider/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={myRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
