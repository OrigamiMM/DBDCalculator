import classes from "./Loadout.module.css";
import Inventory from "./Inventory/Inventory";
import SelectedPerks from "./SelectedPerks/SelectedPerks";
import { useState } from "react";

import PerkData from "../../models/PerkData";
import perks from "../../assets/PerksData";
import items from "../../assets/ItemsData";
import addons from "../../assets/addonData";
import DataArray from "../../models/DataArray";

const getData = (type: string): DataArray => {
  if (type === "perk") {
    return perks;
  } else if (type === "item") {
    return items;
  } else {
    return addons;
  }
};

const Loadout = () => {
  const [invType, setInvType] = useState("perk");
  const [currentPerks, setCurrentPerks] = useState<(PerkData | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const setIndexHandler = (index: number) => {
    console.log("setting index!");
    if (invType !== "perk") {
      setInvType("perk");
    }
    setActiveItemIndex(index);
  };

  const updatePerkHandler = (perk: PerkData) => {
    setCurrentPerks((prevPerks) => {
      const newPerks = [...prevPerks];
      if (prevPerks.includes(perk)) {
        if (prevPerks[activeItemIndex] === perk) {
          newPerks[activeItemIndex] = null;
        } else {
          const newI = prevPerks.findIndex((p) => p == perk);
          setActiveItemIndex(newI);
        }
      } else {
        newPerks[activeItemIndex] = perk;
      }

      return newPerks;
    });
  };

  return (
    <article className={classes.loadout}>
      <h2>LOADOUT</h2>
      <button
        onClick={() => {
          setInvType("item");
        }}
      >
        Items
      </button>
      <hr />

      <SelectedPerks
        isActive={invType === "perk"}
        selectedPerks={currentPerks}
        activeIndex={activeItemIndex}
        onPerkClick={setIndexHandler}
      />
      <hr />
      <Inventory
        activeSelection={currentPerks}
        activeIndex={activeItemIndex}
        data={getData(invType)}
        onPerkClick={updatePerkHandler}
        active={invType}
      />
    </article>
  );
};

export default Loadout;
