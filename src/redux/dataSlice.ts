import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  homeData: []
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setHomeData: (state,action) => {
      state.homeData = action.payload
    }
  }
});

export const { setHomeData } = dataSlice.actions;


export const dataState = (state:RootState) => state.data;
export default dataSlice.reducer;