import PerkData from "../models/PerkData";
import DataArray from "../models/DataArray";
import data from "./perks.json";

const rawPerksData = data["perks"];

let perksArray: PerkData[] = rawPerksData.map((p) => ({
  type: "perk",
  name: p.name,
  imgUrl: p.imgUrl,
}));

const perks: DataArray = { type: "perk", data: perksArray };

export default perks;
