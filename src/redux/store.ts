import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import playerSlice from "./playerSlice";
import spotifySlice from "./spotifySlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    player: playerSlice,
    spotify: spotifySlice
  }
})