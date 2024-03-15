import { useAppSelector } from "../hooks/useStore"

const Home = () => {
  const products = useAppSelector(state => state.products)
  return (
    <div>Home</div>
  )
}

export default Home