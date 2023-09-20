import { AddonData, ItemData, PerkData } from "../../models";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import axios from "axios";

const REQUESTURL = "https://dbd-calculator-default-rtdb.firebaseio.com/";

interface allData {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  allPerks: PerkData[];
  allItems: ItemData[];
  allAddons: AddonData[];
}

const initialState: allData = {
  status: "idle",
  error: null,
  allPerks: [],
  allItems: [],
  allAddons: [],
};

export const fetchDBDData = createAsyncThunk("data/fetchData", async () => {
  const perksResponse = await axios.get(`${REQUESTURL}perks.json`);
  const itemsResponse = await axios.get(`${REQUESTURL}items.json`);
  const addonsResponse = await axios.get(`${REQUESTURL}addons.json`);
  return {
    perks: perksResponse.data,
    items: itemsResponse.data,
    addons: addonsResponse.data,
  };
});

interface basic {
  description: string;
  imgUrl: string;
  name: string;
}

interface basicWithStats extends basic {
  stats: { charges: number | null; speed: number | null };
}

const itemAddonTypes = ["flashlight", "key", "map", "medkit", "toolbox"];

export const dbdDataSlice = createSlice({
  name: "dbdData",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchDBDData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchDBDData.fulfilled, (state, action) => {
        state.status = "succeeded";
        const rawPerks: {
          description: string;
          imgUrl: string;
          name: string;
          sourceSurvivor: string;
          sourceUrl: string;
        }[] = action.payload.perks;
        const rawItems: {
          flashlights: basic[];
          keys: basic[];
          maps: basic[];
          "med-kits": basicWithStats[];
          toolboxes: basicWithStats[];
        } = action.payload.items;
        const rawAddons: {
          flashlight: basic[];
          key: basic[];
          map: basic[];
          "med-kit": basicWithStats[];
          toolbox: basicWithStats[];
        } = action.payload.addons;

        const cleanItems: ItemData[] = [];
        Object.keys(rawItems).forEach((type, i) =>
          rawItems[type as keyof typeof rawItems].forEach((item) =>
            cleanItems.push({
              type: itemAddonTypes[i],
              description: item.description,
              imgUrl: item.imgUrl,
              name: item.name,
            })
          )
        );
        const cleanAddons: AddonData[] = [];
        Object.keys(rawAddons).forEach((type, i) =>
          rawAddons[type as keyof typeof rawAddons].forEach((addon) =>
            cleanAddons.push({
              type: itemAddonTypes[i],
              description: addon.description,
              imgUrl: addon.imgUrl,
              name: addon.name,
            })
          )
        );

        const cleanPerks: PerkData[] = rawPerks.map((rawPerk) => ({
          description: rawPerk.description,
          imgUrl: rawPerk.imgUrl,
          name: rawPerk.name,
          source: rawPerk.sourceSurvivor,
        }));
        state.allAddons = cleanAddons;
        state.allPerks = cleanPerks;
        state.allItems = cleanItems;
      })
      .addCase(fetchDBDData.rejected, (state, action) => {
        state.status = "failed";
        state.error = "Something happened";
      });
  },
});

export const getDataState = (state: RootState) => state.data;

export const dbdDataReducer = dbdDataSlice.reducer;

export const selectPerkByName = (state: RootState, name: string) =>
  state.data.allPerks.find((p) => p.name === name);
export const selectItemByName = (state: RootState, name: string) =>
  state.data.allItems.find((p) => p.name === name);
export const selectAddonByName = (state: RootState, name: string) =>
  state.data.allAddons.find((p) => p.name === name);
