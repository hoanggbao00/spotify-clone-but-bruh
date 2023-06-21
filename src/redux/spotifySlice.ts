import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
}

export const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    }
  }
});

export const { setUserProfile } = spotifySlice.actions;


export const spotifyState = (state) => state.spotify;
export default spotifySlice.reducer;