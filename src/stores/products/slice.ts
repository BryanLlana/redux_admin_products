import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface Product {
  name: string,
  price: number
}

export interface ProductWithId extends Product {
  id: number
}

const initialState: ProductWithId[] = (() => {
  const persistedState = localStorage.getItem('products')
  if (persistedState) return JSON.parse(persistedState).products
  return []
})()

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProductWithId: (state, action: PayloadAction<number>) => {
      const id = action.payload
      return state.filter(s => s.id !== id)
    }
  }
})

export default productsSlice.reducer
export const { deleteProductWithId } = productsSlice.actions