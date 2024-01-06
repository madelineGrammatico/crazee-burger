import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/Pages/login/LoginPages'
import ErrorPage from './components/Pages/ErrorPage/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>
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
