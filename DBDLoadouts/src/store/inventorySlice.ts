import AddonData from "../models/AddonData";
import ItemData from "../models/ItemData";
import PerkData from "../models/PerkData";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Inventory {
  currentInventory: string;
  currentIndex: number;
  selectedItem: ItemData | null;
  selectedAddons: (AddonData | null)[];
  selectedPerks: (PerkData | null)[];
}

const initialState: Inventory = {
  currentInventory: "perk",
  currentIndex: 0,
  selectedItem: null,
  selectedAddons: [null, null],
  selectedPerks: [null, null, null, null],
};

export const inventorySlice = createSlice({
  name: "soloInventory",
  initialState,
  reducers: {
    updateInventory(
      state,
      action: PayloadAction<{ type: string; newI: number }>
    ) {
      if (state.currentInventory !== action.payload.type) {
        state.currentInventory = action.payload.type;
      }
      state.currentIndex = action.payload.newI;
    },
    updateItem(state, action: PayloadAction<ItemData>) {
      if (state.selectedItem?.name === action.payload.name) {
        state.selectedItem = null;
      } else {
        state.selectedItem = action.payload;
      }

      // if (state.selectedItem) {
      //   if (state.selectedItem.name === action.payload.name) {
      //     state.selectedItem = null;
      //   } else {
      //     state.selectedItem = action.payload;
      //   }
      // } else {
      //   state.selectedItem = action.payload;
      // }
    },
    updateAddon(state, action: PayloadAction<AddonData>) {
      const newI = state.selectedAddons.findIndex((p) => p == action.payload);
      if (newI > -1) {
        if (newI === state.currentIndex) {
          state.selectedAddons[state.currentIndex] = null;
        } else {
          state.currentIndex = newI;
        }
      } else {
        state.selectedAddons[state.currentIndex] = action.payload;
      }
    },
    updatePerks(state, action: PayloadAction<PerkData>) {
      const newIndex = state.selectedPerks.findIndex(
        (p) => p?.name === action.payload.name
      );
      if (newIndex > -1) {
        if (newIndex === state.currentIndex) {
          state.selectedPerks[state.currentIndex] = null;
        } else {
          state.currentIndex = newIndex;
        }
      } else {
        state.selectedPerks[state.currentIndex] = action.payload;
      }
    },
  },
});

export const { updateInventory, updateItem, updateAddon, updatePerks } =
  inventorySlice.actions;

export default inventorySlice.reducer;
