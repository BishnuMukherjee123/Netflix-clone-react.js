import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import axios from "axios";

export const getCombinedAnimeData = createAsyncThunk(
  "anime/fetchCombined",
  async () => {
    const [promosRes, topRes] = await Promise.all([
      axios.get("https://api.jikan.moe/v4/watch/promos/popular"),
      axios.get("https://api.jikan.moe/v4/top/anime"),
    ]);
    console.log("this is promo==", promosRes);

    const promos = promosRes.data.data.slice(0, 30).map((item) => ({
      id: nanoid(),
      title: item.entry?.title,
      image: item.entry?.images?.jpg?.image_url,
      url: item.entry?.url,
      mal_id: item.entry?.mal_id,
      youtube: item.trailer?.youtube_id,
    }));

    const top = topRes.data.data.slice(0, 30).map((item) => ({
      id: nanoid(),
      title: item.title,
      image: item.images?.jpg?.image_url,
      url: item.url,
      mal_id: item.mal_id,
      youtube: item.trailer?.youtube_id,
    }));

    return { promos, top };
  }
);

const initialState = {
  promos: [],
  top: [],
  loading: false,
  error: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCombinedAnimeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCombinedAnimeData.fulfilled, (state, action) => {
        state.loading = false;
        state.promos = action.payload.promos;
        state.top = action.payload.top;
      })
      .addCase(getCombinedAnimeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default animeSlice.reducer;
