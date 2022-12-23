import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
  name: "userInfo",
  initialState: {
    user: {
      avatar: "",
      birth_date: "",
      chat_id: null,
      created_at: "",
      full_name: "",
      id: null,
      phone: "",
      role: "",
      user_id: null,
    },
  },
  reducers: {
    add: (state, action) => {
      state.user = action.payload;
    },
    clear: (state) => {
      state.user = {};
    },
  },
});

export const { add, clear } = userInfo.actions;

export default userInfo.reducer;
