import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayoutProduct from './layout/LayoutProduct'
import Home from './pages/Home'
import "@fontsource-variable/onest"; 
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutProduct />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
