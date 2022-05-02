import { createSlice } from "@reduxjs/toolkit";

const size = window.screen.width > 720 ? true : false;

const initialState = {
   isMenuOpen: size,
};

const isMenuOpenSlice = createSlice({
   name: "isMenuOpen",
   initialState,
   reducers: {
      updateIsMenuOpen: (state) => {
         return {
            ...state,
            isMenuOpen: !state.isMenuOpen,
         };
      },
   },
});

export default isMenuOpenSlice.reducer;
export const { updateIsMenuOpen } = isMenuOpenSlice.actions;
