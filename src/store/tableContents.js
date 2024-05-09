import { createSlice } from '@reduxjs/toolkit'

const tableContentsSlice = createSlice({
  name: 'tableContents',
  initialState: { active: 'none', isManuallyScrolling: false },
  reducers: {
    chooseContent(state, action) {
      const chosen = action.payload
      state.active = chosen
    },
    setIsManuallyScrolling(state, action) {
      const isManuallyScrolling = action.payload
      state.isManuallyScrolling = isManuallyScrolling
    },
  },
})

export const tableContentsActions = tableContentsSlice.actions
export default tableContentsSlice