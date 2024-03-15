import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './stores'
import LayoutProduct from './layout/LayoutProduct'
import Home from './pages/Home'
import "@fontsource-variable/onest"; 
import './index.css'
import AddProduct from './pages/AddProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutProduct />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/nuevo-producto',
        element: <AddProduct />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
