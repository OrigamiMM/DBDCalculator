import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Addon } from "../../DBDData/components/DBDAddon/Addon";
import { updateActive } from "../../loadout";
import { EmptyItemAddon } from "./EmptyItemAddon";
import {
  setPage,
  updateList,
  updateQuery,
} from "../../inventory/inventorySlice";
import { getDataState } from "../../DBDData/dbdDataSlice";

type Props = {
  activeIndex?: number;
};

export const AddonDisplay = ({ activeIndex }: Props) => {
  const dispatch = useAppDispatch();
  const selectedAddons = useAppSelector(
    (state) => state.loadout.selectedAddons
  );

  const addonList = useAppSelector((state) => getDataState(state).allAddons);
  const addonTypeNames = addonList.map((a) => a.name); 
  const emptyAddonHandler = (index: number) => {
    dispatch(updateQuery(""));
    dispatch(setPage(1));
    dispatch(updateList(addonTypeNames));
    dispatch(updateActive({ type: "addon", newI: index }));
  };
  return (
    <ul className="flex items-center">
      {selectedAddons.map((addon, i) => {
        const isSelected = i === activeIndex;
        if (addon) {
          return (
            <Addon
              key={i}
              name={addon}
              onClick={emptyAddonHandler.bind(null, i)}
              selected={isSelected}
              active={true}
            />
          );
        }
        return (
          <EmptyItemAddon
            key={i}
            type="addon"
            selected={isSelected}
            onClick={emptyAddonHandler.bind(null, i)}
          />
        );
      })}
    </ul>
  );
};
