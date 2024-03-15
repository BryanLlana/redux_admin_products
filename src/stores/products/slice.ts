import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  name: string,
  price: number
}

export interface ProductWithId extends Product {
  id: number
}

const initialState: ProductWithId[] = await (async () => {
  const url = 'http://localhost:3000/products'
  const data = await fetch(url)
  const response = await data.json()
  return response
})()

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<ProductWithId[]>) => {
      const products: ProductWithId[] = action.payload
      return products
    },
    deleteProductWithId: (state, action: PayloadAction<number>) => {
      const id = action.payload
      return state.filter(s => s.id !== id)
    }
  }
})

export default productsSlice.reducer
export const { getProducts, deleteProductWithId } = productsSlice.actions