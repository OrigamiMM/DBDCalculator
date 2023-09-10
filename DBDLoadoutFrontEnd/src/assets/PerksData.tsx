import PerkData from "../models/PerkData";
import { PerkDataArray } from "../models/DataArray";
import data from "./perks.json";

const rawPerksData = data["perks"];

const perksArray: PerkData[] = rawPerksData.map((p) => ({
  type: "perk",
  description: p.description,
  name: p.name,
  imgUrl: p.imgUrl,
  source: p.sourceSurvivor,
}));

const perks: PerkDataArray = { type: "perk", data: perksArray };

export default perks;
