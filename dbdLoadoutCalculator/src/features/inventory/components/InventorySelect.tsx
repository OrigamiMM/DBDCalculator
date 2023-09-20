import { ItemInventory } from "./ItemInventory";
import { PerkInventory } from "./PerkInventory";
import { AddonInventory } from "./AddonInventory";
import { useAppSelector } from "../../../app/hooks";
import { getDataState } from "../../DBDData/dbdDataSlice";

type Props = {
  page: number;
  type: "perk" | "item" | "addon";
  data: string[];
};

export const InventorySelect = ({ type, page, data }: Props) => {
  const addons = useAppSelector((state) => getDataState(state).allAddons);
  if (type === "addon") {
    const filteredData = addons.filter((addonData) =>
      data.includes(addonData.name)
    );
    const addonTypesNames = filteredData.map((data) => [data.type, data.name]);
    return <AddonInventory page={page} addonNames={addonTypesNames} />;
  } else {
    const displayItems = data.slice(15 * (page - 1), 15 * page);
    if (type === "item") {
      return <ItemInventory itemNames={displayItems} />;
    }
    return <PerkInventory perkNames={displayItems} />;
  }
};
