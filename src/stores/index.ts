import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products/slice'

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action)
  localStorage.setItem('products', JSON.stringify(store.getState()))
}

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch