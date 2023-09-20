import React from "react";
import EmptyItemAddon from "./EmptyItemAddon";
import { useDispatch } from "react-redux";
import { updateInventory } from "../../../store/inventorySlice";

type Props = {
  index?: number;
  slots: string;
  addonSizing: string;
};

function AddonsDisplay(props: Props) {
  const dispatch = useDispatch();
  return (
    <ul className={props.slots}>
      <EmptyItemAddon
        key={0}
        onClick={() => dispatch(updateInventory({ type: "addon", newI: 0 }))}
        selected={props.index === 0}
        styling={props.addonSizing}
      />
      <EmptyItemAddon
        key={1}
        onClick={() => dispatch(updateInventory({ type: "addon", newI: 1 }))}
        selected={props.index === 1}
        styling={props.addonSizing}
      />
    </ul>
  );
}

export default AddonsDisplay;
