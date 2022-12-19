import { createSlice } from '@reduxjs/toolkit'

export const userInfo = createSlice({
  name: 'edit_admin',
  initialState: {
    admin: []
  },
  reducers: {
    addAdmin: (state, action) => {
      state.admin = action.payload
    },
    clearAdmin: (state) => {
      state.admin = []
    },
  },
})

export const { addAdmin, clearAdmin} = userInfo.actions

export default userInfo.reducer