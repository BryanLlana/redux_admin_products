import ProductItem from "../components/ProductItem"
import { useAppSelector, useAppDispatch } from "../hooks/useStore"

const Home = () => {
  const products = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  return (
    <div className="w-[1000px] mx-auto my-8">
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Precio</th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (
              <ProductItem product={product} key={product.id}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home