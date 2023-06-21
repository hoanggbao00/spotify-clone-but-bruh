import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  login: false
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    handleModalLogin: (state, action) => {
      state.login = action.payload;
    }
  }
});

export const { handleModalLogin } = modalSlice.actions;


export const modalState = (state:RootState) => state.modal;
export default modalSlice.reducer;