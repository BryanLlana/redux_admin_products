import { useSelector } from 'react-redux'
import { RootState } from '../stores/index';

const Home = () => {
  const products = useSelector((state: RootState) => state.products)
  return (
    <div>Home</div>
  )
}

export default Home