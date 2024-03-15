import { deleteProductWithId } from "../stores/products/slice"
import { useAppDispatch } from "./useStore"

export const useProductAction = () => {
  const dispatch = useAppDispatch()

  const deleteProduct = (id: number) => {
    dispatch(deleteProductWithId(id))
  }

  return { deleteProduct }
}