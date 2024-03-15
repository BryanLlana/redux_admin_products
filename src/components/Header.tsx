import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="flex justify-between items-center container mx-auto">
        <Link to='/'><h1 className="text-white text-3xl font-bold">AppProductos</h1></Link>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          to='/nuevo-producto'
        >Agregar Producto
        </Link>
      </div>
    </header>
  )
}

export default Header