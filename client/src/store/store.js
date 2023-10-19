import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import videoReducer from "./videoSlice";
import searchReducer from "./searchSlice";
import subscriptionsReducer from "./subscriptionsSlice";
import videoPlaybackReducer from "./videoPlaybackSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoReducer,
    search: searchReducer,
    subscriptions: subscriptionsReducer,
    videoPlayback: videoPlaybackReducer,
  },
});

export default store;
