import { configureStore } from "@reduxjs/toolkit";
import isMenuOpenReducer from "../features/isMenuOpen/isMenuOpenSlice";

export default configureStore({
   reducer: {
      isMenuOpen: isMenuOpenReducer,
   },
});
