import DataArray from "../../../models/DataArray";
import PerkData from "../../../models/PerkData";
import ItemData from "../../../models/Itemdata";
import ItemInventory from "./ItemInventory/ItemInventory";
import PerkInventory from "./PerkInventory/PerkInventory";
import AddonData from "../../../models/AddonData";

type Props = {
  activeInventory: (PerkData | null)[];
  onPerkClick: (p: PerkData) => void;
  className: string;
  toDisplay: DataArray;
};

const padArray = <T,>(startArray: T[]): (T | null)[] => {
  if (startArray.length < 15) {
    const toPad = 15 - startArray.length;
    return startArray.concat(new Array(toPad).fill(null))
  }
  return startArray;
};

function InventorySelect(props: Props) {
  if (props.toDisplay.type === "perk") {
    const displayArray: (PerkData | null)[] = padArray(props.toDisplay.data);
    return (
      <PerkInventory
        activePerks={props.activeInventory}
        onPerkClick={props.onPerkClick}
        className={props.className}
        displayPerks={displayArray}
      />
    );
  } else if (props.toDisplay.type === "addon") {
    const displayArray: (AddonData | null)[] = padArray(props.toDisplay.data);
    console.log(displayArray);
  } else if (props.toDisplay.type === "item") {
    const displayArray: (ItemData | null)[] = padArray(props.toDisplay.data);
    return (
      <ItemInventory displayItems={displayArray} className={props.className} />
    );
  } else {
    return <li></li>;
  }
}

export default InventorySelect;
