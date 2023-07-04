import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fetching: false,
  users: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUsersRequest(state) {
      state.fetching = true;
      state.users = null;
      state.error = null;
    },
    fetchUsersSuccess(state, action) {
      state.fetching = false;
      state.users = action.payload;
      state.error = null;
    },
    fetchUsersFailure(state, action) {
      state.fetching = false;
      state.users = null;
      state.error = action.payload;
    },
  },
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
  userSlice.actions;

export default userSlice.reducer;
