import AddonData from "./AddonData";
import ItemData from "./ItemData";
import PerkData from "./PerkData";

interface Inventory {
  currentInventory: string;
  currentIndex: number;
  selectedItem: ItemData | null;
  selectedAddons: (AddonData | null)[];
  selectedPerks: (PerkData | null)[];
}

export default Inventory;