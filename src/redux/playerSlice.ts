import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaying: false,
  isVolumeMuted: false,
  volume: 1,
  songPlayingId: '1' 
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    togglePlay: (state) => {
      state.isPlaying = !state.isPlaying
    },
    toggleMute: (state) => {
      state.isVolumeMuted = !state.isVolumeMuted
    },
    setVolume: (state, action) => {
      state.volume = action.payload.volume
    }
  }
});

export const { togglePlay, toggleMute, setVolume } = playerSlice.actions;


export const playerState = (state) => state.player;
export default playerSlice.reducer;