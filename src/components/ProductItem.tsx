import React from "react"
import { ProductWithId } from "../stores/products/slice"
import { Link } from "react-router-dom"
import { formatNumberToPen } from "../helpers"

const ProductItem: React.FC<{ product: ProductWithId }> = ({ product }) => {
  const { id, name, price } = product
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ name }</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{ formatNumberToPen(price) }</td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-right">
        <Link
          className="text-blue-500 hover:text-blue-700 mx-2"
          to={`/editar-producto/${id}`}
        >Editar
        </Link>
        <button
          className="text-red-500 hover:text-red-700 mx-2"
          type="button"
        >Eliminar
        </button>
      </td>
    </tr>
  )
}

export default ProductItem