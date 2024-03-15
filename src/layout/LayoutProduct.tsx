import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const LayoutProduct = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default LayoutProduct