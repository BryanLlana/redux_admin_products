import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  name: string,
  price: number
}

export interface ProductWithId extends Product {
  id: number
}

const initialState: ProductWithId[] = [
  {
    id: 1,
    name: 'Producto 1',
    price: 300
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 400
  }
] 

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