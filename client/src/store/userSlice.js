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

// Action to register a user
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData) => {
    const response = await axios.post("/api/register", formData);
    return response.data;
  }
);

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
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // Handle successful user registration here
        // You can update the state or take any other necessary actions
      })
      .addCase(registerUser.rejected, (state, action) => {
        // Handle registration failure here
        // You can update the state or take any other necessary actions
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
