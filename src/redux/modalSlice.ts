import { createSlice } from "@reduxjs/toolkit";

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


export const modalState = (state) => state.modal;
export default modalSlice.reducer;