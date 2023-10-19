import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  subscribedChannels: [],
};

const subscriptionsSlice = createSlice({
  name: "subscriptions",
  initialState,
  reducers: {
    subscribe: (state, action) => {
      state.subscribedChannels.push(action.payload);
    },
    unsubscribe: (state, action) => {
      state.subscribedChannels = state.subscribedChannels.filter(
        (channel) => channel !== action.payload
      );
    },
  },
});

export const selectSubscriptions = (state) => state.subscriptions;

export default subscriptionsSlice.reducer;
