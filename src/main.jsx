import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import appRouter from './router/routes.jsx'
import AuthContextProvider from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
