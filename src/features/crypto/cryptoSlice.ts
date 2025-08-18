import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { Coin } from "../../types/index";

interface CryptoState {
  coins: Coin[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CryptoState = {
  coins: [],
  status: "idle",
  error: null,
};

export const fetchCoins = createAsyncThunk<
  Coin[],
  void,
  { rejectValue: string }
>("crypto/fetchCoins", async (_, { rejectWithValue }) => {
  try {
    const options = {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
      },
      params: { limit: "10" },
    };

    const response = await axios.get(
      import.meta.env.VITE_RAPIDAPI_ENDPOINT,
      options
    );

    return response.data.data.coins as Coin[];
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch coins"
    );
  }
});

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCoins.fulfilled, (state, action: PayloadAction<Coin[]>) => {
        state.status = "succeeded";
        state.coins = action.payload;
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Something went wrong";
      });
  },
});

export default cryptoSlice.reducer;
