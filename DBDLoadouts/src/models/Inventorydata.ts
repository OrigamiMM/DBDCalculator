import PerkData from "./PerkData";
import ItemData from "./ItemData";
import AddonData from "./AddonData";
type Inventory = {
  index: number;
  active: string;
  currentPerks: (PerkData | null)[];
  currentItem: ItemData | null;
  currentAddons: (AddonData | null)[];
};
