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

const descriptionPositions = [
  //row 1
  "origin-bottom-left mb-20 -translate-y-1/2 translate-x-1/4 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(15em-50%))] md:origin-left",
  "origin-bottom-left mb-20 -translate-y-1/2 translate-x-6 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(15em-50%))] md:origin-left",
  "origin-bottom-left mb-20 -translate-y-1/2 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(15em-50%))] md:origin-left",
  "mb-20 -translate-y-1/2 -translate-x-6 md:mb-0 md:mr-20 md:-translate-x-1/2 md:translate-y-[min(20%,calc(15em-50%))] md:origin-right",
  "mb-20 -translate-y-1/2 -translate-x-1/4 md:mb-0 md:mr-20 md:-translate-x-1/2 md:translate-y-[min(20%,calc(15em-50%))] md:origin-right",
  //row 2
  "origin-bottom-left mb-20 -translate-y-1/2 translate-x-1/4 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(10em-50%))] md:origin-left",
  "origin-bottom-left mb-20 -translate-y-1/2 translate-x-6 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(10em-50%))] md:origin-left",
  "origin-bottom-left mb-20 -translate-y-1/2 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(10em-50%))] md:origin-left",
  "mb-20 -translate-y-1/2 -translate-x-6 md:mb-0 md:mr-20 md:-translate-x-1/2 md:translate-y-[min(20%,calc(10em-50%))] md:origin-right",
  "mb-20 -translate-y-1/2 -translate-x-1/4 md:mb-0 md:mr-20 md:-translate-x-1/2 md:translate-y-[min(20%,calc(10em-50%))] md:origin-right",
  //row 3
  "mb-20 -translate-y-1/2 translate-x-1/4 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(5em-50%))] md:origin-left",
  "mb-20 -translate-y-1/2 translate-x-6 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(5em-50%))] md:origin-left",
  "mb-20 -translate-y-1/2 md:mb-0 md:ml-20 md:translate-x-1/2 md:translate-y-[min(20%,calc(5em-50%))] md:origin-left",
  "mb-20 -translate-y-1/2 -translate-x-6 md:mb-0 md:mr-20 md:-translate-x-1/2 md:translate-y-[min(20%,calc(5em-50%))] md:origin-right",
  "mb-20 -translate-y-1/2 -translate-x-1/4 md:mb-0 md:mr-20 md:-translate-x-1/2 md:translate-y-[min(20%,calc(5em-50%))] md:origin-right",
];

export const InventorySelect = ({ type, page, data }: Props) => {
  const addons = useAppSelector((state) => getDataState(state).allAddons);
  if (type === "addon") {
    const filteredData = addons.filter((addonData) =>
      data.includes(addonData.name)
    );
    const addonTypesNames = filteredData.map((data) => [data.type, data.name]);
    return (
      <AddonInventory
        descriptionPosition={descriptionPositions}
        page={page}
        addonNames={addonTypesNames}
      />
    );
  } else {
    const displayItems = data.slice(15 * (page - 1), 15 * page);
    if (type === "item") {
      return (
        <ItemInventory
          descriptionPosition={descriptionPositions}
          itemNames={displayItems}
        />
      );
    }
    return (
      <PerkInventory
        descriptionPositions={descriptionPositions}
        perkNames={displayItems}
      />
    );
  }
};
