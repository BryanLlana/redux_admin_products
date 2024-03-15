import { createSlice } from '@reduxjs/toolkit'

export interface Product {
  id: number,
  name: string,
  price: number
}

const initialState: Product[] = [] 

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})

export default productsSlice.reducer