// import { configureStore } from '@reduxjs/toolkit';
// import airingReducer from '../slicers/airingTodaySlice';
// import topReducer from '../slicers/topAnimeSlice' // renamed for clarity

// export const store1 = configureStore({
//   reducer: {
//     airing: airingReducer,
//     top: topReducer, // Use a meaningful key that matches the slice (e.g. 'airing')
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "../slicers/animeSlice";

export const store = configureStore({
  reducer: {
    anime: animeReducer,
  },
});