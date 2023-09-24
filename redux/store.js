import { configureStore } from "@reduxjs/toolkit";
import combineSlice from "./combineSlice";

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    combine: combineSlice,
  },
  devTools: true,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: false,
  //     }),
  // .concat(apiSlice.middleware),
});
