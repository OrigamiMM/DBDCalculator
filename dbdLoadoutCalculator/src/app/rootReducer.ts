import { combineReducers } from "@reduxjs/toolkit";
import { loadoutReducer } from "../features/loadout";
import { dbdDataReducer } from "../features/DBDData/dbdDataSlice";
import { inventoryReducer } from "../features/inventory/inventorySlice";

const rootReducer = combineReducers({
  loadout: loadoutReducer,
  data: dbdDataReducer,
  inventory: inventoryReducer,
});

export default rootReducer;
