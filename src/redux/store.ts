import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modalSlice";
import playerSlice from "./playerSlice";
import spotifySlice from "./spotifySlice";
import dataSlice from "./dataSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    player: playerSlice,
    spotify: spotifySlice,
    data: dataSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch