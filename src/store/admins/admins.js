import { createSlice } from '@reduxjs/toolkit'

export const userInfo = createSlice({
  name: 'admins',
  initialState: {
    admins: []
  },
  reducers: {
    addAdmins: (state, action) => {
      state.admins = action.payload
    },
    clearAdmins: (state) => {
      state.admins = []
    },
  },
})

export const { addAdmins, clearAdmins} = userInfo.actions

export default userInfo.reducer