import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], cartTotalAmount: 0, cartTotalQuantity: 0 },
  reducers: {
    addItem(state, action) {
      const incomingProduct = action.payload
      const existingItem = state.items.find(item => item.id === incomingProduct.id)

      if (!existingItem) {

        state.items.push({
          ...incomingProduct,
          qty: 1,
        })

      } else {

        existingItem.qty++

      }
    },
    removeItem(state, action) {
      const incomingProduct = action.payload
      const existingItem = state.items.find(item => item.id === incomingProduct.id)

      if (existingItem !== undefined && existingItem.qty === 1) {
        state.items = state.items.filter(item => item.id !== incomingProduct.id)
      } else {
        if (existingItem !== undefined) existingItem.qty--
      }
    },
    getCartTotalAmount(state) {
      var totalAmount = 0
      const items = state.items

      items.map((i) => {
        totalAmount = totalAmount + (i.price * i.qty)
      })

      state.cartTotalAmount = totalAmount
    },
    getCartTotalQty(state) {
      var totalQuantity = 0

      const items = state.items

      items.map((i) => {
        totalQuantity = totalQuantity + i.qty
      })

      state.cartTotalQuantity = totalQuantity
    },
  },
})

export const cartActions = cartSlice.actions
export default cartSlice