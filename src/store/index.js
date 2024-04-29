import { configureStore } from '@reduxjs/toolkit'
import tableContentsSlice from './tableContents'
import cartSlice from './cart'

const store = configureStore({
  reducer: {
    tableContents: tableContentsSlice.reducer,
    cart: cartSlice.reducer,
  },
})

export default store