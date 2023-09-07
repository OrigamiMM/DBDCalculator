import AddonData from "../../../models/AddonData";
import DataArray from "../../../models/DataArray";
import ItemData from "../../../models/Itemdata";
import PerkData from "../../../models/PerkData";
import Perk from "../../UI/Perk/Perk";
import classes from "./InventorySelect.module.css";
import PerkInventory from "./PerkInventory/PerkInventory";

type Props = {
  activeInventory: (PerkData | null)[];
  onPerkClick: (p: PerkData) => void;
  className: string;
  toDisplay: DataArray;
};

function InventorySelect(props: Props) {
  let displayArray = props.toDisplay.data;
  if (displayArray.length < 15) {
    const emptyElements = 15 - displayArray.length;
    displayArray = displayArray.concat(new Array(emptyElements).fill(null));
  }

  console.log(props.toDisplay.type);

  const invType = props.toDisplay.type;

  if (invType === "perk") {
    return (
      <PerkInventory
        activePerks={props.activeInventory}
        onPerkClick={props.onPerkClick}
        className={props.className}
        displayPerks={displayArray}
      />
    );
  } else {
    return <li></li>;
  }
}

export default InventorySelect;
