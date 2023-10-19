import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  currentTime: 0,
  volume: 0.5,
};

const videoPlaybackSlice = createSlice({
  name: "videoPlayback",
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    seekTo: (state, action) => {
      state.currentTime = action.payload;
    },
  },
});

export const selectVideoPlayback = (state) => state.videoPlayback;

export default videoPlaybackSlice.reducer;
