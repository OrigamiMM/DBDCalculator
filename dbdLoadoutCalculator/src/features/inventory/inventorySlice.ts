import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { fetchDBDData } from "../DBDData/dbdDataSlice";
import { RootState } from "../../app/store";

interface starting {
  currentPage: number;
  query: string;
  listNames: string[];
}

const initialState: starting = {
  currentPage: 1,
  query: "",
  listNames: [],
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    updateQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    incrementPage(state, action: PayloadAction<number>) {
      state.currentPage += action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    updateList(state, action: PayloadAction<string[]>) {
      state.listNames = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchDBDData.fulfilled, (state, action) => {
      const rawPerks: {
        description: string;
        imgUrl: string;
        name: string;
        sourceSurvivor: string;
        sourceUrl: string;
      }[] = action.payload.perks;
      const initalNames = rawPerks.map((p) => p.name);
      state.listNames = initalNames;
    });
  },
});

export const getInventoryState = (state: RootState) => state.inventory;

export const { updateQuery, incrementPage, setPage, updateList } =
  inventorySlice.actions;

export const inventoryReducer = inventorySlice.reducer;
