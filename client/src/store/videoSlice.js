import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  videos: [],
};

export const fetchVideos = createAsyncThunk("video/fetchVideos", async () => {
  const response = await axios.get("/api/videos");
  return response.data;
});

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    addVideo: (state, action) => {
      state.videos.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
    });
  },
});

export const selectVideos = (state) => state.video;

export default videoSlice.reducer;
