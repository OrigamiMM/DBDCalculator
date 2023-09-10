import PerkData from "./PerkData";
import ItemData from "./Itemdata";
import AddonData from "./AddonData";

export interface PerkDataArray {
    type: 'perk';
    data: PerkData[];
}

export interface ItemDataArray {
    type: 'item';
    data: ItemData[];
}

export interface AddonDataArray {
    type: 'addon';
    data: AddonData[];
}

type DataArray = PerkDataArray | ItemDataArray | AddonDataArray;

export default DataArray;