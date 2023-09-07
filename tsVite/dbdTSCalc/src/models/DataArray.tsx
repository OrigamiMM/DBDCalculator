import PerkData from "./PerkData";
import AddonData from "./AddonData";
import ItemData from "./Itemdata";


interface DataArray {
    type: string;
    data: (PerkData[] | AddonData[] | ItemData[]);
}

export default DataArray;