import DisplayData from "../../../models/DisplayData";
import PerksInventory from "./PerksInventory/PerksInventory";
import ItemsInventory from "./ItemsAddonInventory/ItemsInventory";
import AddonInventory from "./ItemsAddonInventory/AddonInventory";

type Props = {
  inventoryPosition: string;
  inventoryDisplay: DisplayData;
  page: number;
};

const InventorySelect = ({
  inventoryPosition,
  inventoryDisplay,
  page,
}: Props) => {
  switch (inventoryDisplay.type) {
    case "perk":
      const displayPerks = inventoryDisplay.data.slice(
        15 * (page - 1),
        15 * page
      );
      return (
        <PerksInventory
          invPosition={inventoryPosition}
          displayPerks={displayPerks}
        />
      );
    case "item":
      const displayItems = inventoryDisplay.data.slice(
        15 * (page - 1),
        15 * page
      );
      return (
        <ItemsInventory
          invPosition={inventoryPosition}
          displayItems={displayItems}
        />
      );
    case "addon":
      const displayAddons = inventoryDisplay.data.slice(
        15 * (page - 1),
        15 * page
      );
      return (
        <AddonInventory
          invPosition={inventoryPosition}
          displayAddon={displayAddons}
        />
      );
  }
};

export default InventorySelect;
