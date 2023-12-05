import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  user: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (userId) => {
  const response = await axios.get(
    `"http://localhost:8800/server/auth/register"${userId}`
  );
  return response.data;
});

// Action to register a user
// export const registerUser = createAsyncThunk(
//   "user/registerUser",
//   async (formData) => {
//     const response = await axios.post(
//       "http://localhost:8800/server/auth/register",
//       formData
//     );
//     return response.data;
//   }

// );

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8800/server/auth/register",
        formData
      );

      if (response.status === 200) {
        console.log("Registration successful!"); // Log success message

        // Assuming the backend returns a user object upon successful registration
        return response.data.user; // Dispatch `fulfilled` with user data
      } else {
        console.log("Registration failed with status:", response.status); // Log failure status

        // Dispatch `rejected` with an error message or specific data
        return rejectWithValue(response.statusText);
      }
    } catch (error) {
      console.error("Registration failed with error:", error.message); // Log network error

      return rejectWithValue(error.message); // Dispatch `rejected` on network error
    }
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
        state.isAuthenticated = true; //User is authenticated.
        state.user = action.payload; //store user date in the state.
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isAuthenticated = false; // User is not Authenticated.
        state.user = null; // Clear user data.
      });
  },
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
