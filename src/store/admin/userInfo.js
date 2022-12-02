import { createSlice } from '@reduxjs/toolkit'

export const userInfo = createSlice({
  name: 'userInfo',
  initialState: {
    name: "Abduqahhor"
  },
  reducers: {
    add: (state, action) => {
      state.name = action.payload
    },
    clear: (state) => {
      state.name = ""
    },
  },
})

export const { add, clear} = userInfo.actions

export default userInfo.reducer