import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import videoReducer from "./videoReducer";

const store = configureStore({
  reducer: {
    users: userReducer,
    videos: videoReducer,
    // Add other reducers for comments, likes, notifications, etc.
  },
});

export default store;
