import PerkData from "./PerkData";
import ItemData from "./ItemData";
import AddonData from "./AddonData";

type perkDisplay = {
  type: "perk";
  data: PerkData[];
};
type itemDisplay = {
  type: "item";
  data: ItemData[];
};
type addonDisplay = {
  type: "addon";
  data: AddonData[];
};
type DisplayData = perkDisplay | itemDisplay | addonDisplay;

export default DisplayData;
