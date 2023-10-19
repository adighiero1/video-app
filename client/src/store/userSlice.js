import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const response = await axios.get(`/api/users/${userId}`);
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
