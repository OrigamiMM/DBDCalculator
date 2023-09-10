import { ItemDataArray } from "../models/DataArray";
import ItemData from "../models/Itemdata";
import data from "./itemsAndAddons.json";

const rawItemsData = data["items"];

let itemsArray: ItemData[] = [];

itemsArray = itemsArray.concat(
  rawItemsData.flashlights.map((f) => ({
    type: "flashlight",
    name: f.name,
    imgUrl: f.imgUrl,
  }))
);

itemsArray = itemsArray.concat(
  rawItemsData.keys.map((k) => ({
    type: "key",
    name: k.name,
    imgUrl: k.imgUrl,
  }))
);

itemsArray = itemsArray.concat(
  rawItemsData.maps.map((m) => ({
    type: "map",
    name: m.name,
    imgUrl: m.imgUrl,
  }))
);

itemsArray = itemsArray.concat(
  rawItemsData["med-kits"].map((m) => ({
    type: "med-kit",
    name: m.name,
    imgUrl: m.imgUrl,
  }))
);

itemsArray = itemsArray.concat(
  rawItemsData.toolboxes.map((t) => ({
    type: "toolbox",
    name: t.name,
    imgUrl: t.imgUrl,
  }))
);

console.log(itemsArray);

const items: ItemDataArray = { type: "item", data: itemsArray };

export default items;
