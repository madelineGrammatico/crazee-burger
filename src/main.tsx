import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Pages/login/LoginPages'
import ErrorPage from './components/Pages/ErrorPage/ErrorPage'
import OrderPage from './components/Pages/order/OrderPage'
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
  },
  {
    path: "/order/:userName",
    element: <OrderPage/>
  },
  {
    path: "/*",
    element: <ErrorPage num={404}/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
