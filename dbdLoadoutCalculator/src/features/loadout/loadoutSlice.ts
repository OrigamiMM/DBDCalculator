import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { RootState } from "../../app/store";

interface Loadout {
  currentActive: "perk" | "item" | "addon";
  currentIndex: number;
  selectedItem: string | null;
  selectedAddons: (string | null)[];
  selectedPerks: (string | null)[];
}

const initialState: Loadout = {
  currentActive: "perk",
  currentIndex: 0,
  selectedItem: null,
  selectedAddons: [null, null],
  selectedPerks: [null, null, null, null],
};

export const loadoutSlice = createSlice({
  name: "loadout",
  initialState,
  reducers: {
    updateActive(
      state,
      action: PayloadAction<{ type: "perk" | "item" | "addon"; newI: number }>
    ) {
      state.currentActive = action.payload.type;
      state.currentIndex = action.payload.newI;
    },
    updateItem(state, action: PayloadAction<string>) {
      if (state.selectedItem === action.payload) {
        state.selectedItem = null;
      } else {
        state.selectedItem = action.payload;
      }
      state.selectedAddons = [null, null];
    },
    updateAddon(state, action: PayloadAction<string>) {
      const newIndex = state.selectedAddons.findIndex(
        (p) => p === action.payload
      );
      if (newIndex > -1) {
        if (newIndex === state.currentIndex) {
          state.selectedAddons[state.currentIndex] = null;
        } else {
          state.currentIndex = newIndex;
        }
      } else {
        state.selectedAddons[state.currentIndex] = action.payload;
      }
    },
    updatePerks(state, action: PayloadAction<string>) {
      const newIndex = state.selectedPerks.findIndex(
        (p) => p === action.payload
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

export const { updateActive, updateItem, updateAddon, updatePerks } =
  loadoutSlice.actions;

export const loadoutReducer = loadoutSlice.reducer;

export const getLoadoutState = (state: RootState) => state.loadout;
