import { configureStore } from "@reduxjs/toolkit";
import emiReducer from "./emiSlices"

export default configureStore({
    reducer: {
      emi: emiReducer,
    },
  });