import { createSlice } from '@reduxjs/toolkit'

const tableContentsSlice = createSlice({
  name: 'tableContents',
  initialState: { active: 'none' },
  reducers: {
    chooseContent(state, action) {
      const chosen = action.payload
      state.active = chosen
      // console.log(`state: ${state.active}, action: ${chosen}`)
    },
  },
})

export const tableContentsActions = tableContentsSlice.actions
export default tableContentsSlice