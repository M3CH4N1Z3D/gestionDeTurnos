import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  details: { name: "Invitado", id: null },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, { payload: { name, id } }) => {
      state.isAuthenticated = true;
      state.details = { name, id };
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.details = initialState.details;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
