import classes from "./Loadout.module.css";
import Inventory from "./Inventory/Inventory";
import SelectedPerks from "./SelectedPerks/SelectedPerks";
import { useState } from "react";
import PerkData from "../../models/PerkData";

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
      let newPerks = [...prevPerks];
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
      <button
        onClick={() => {
          setInvType("item");
        }}
      >
        Items
      </button>
      <hr />
      <h2>LOADOUT</h2>
      <SelectedPerks
        isActive={invType === "perk"}
        selectedPerks={currentPerks}
        activeIndex={activeItemIndex}
        onPerkClick={setIndexHandler}
      />
      <hr />
      <Inventory
        activeIndex={activeItemIndex}
        activeSelection={currentPerks}
        onPerkClick={updatePerkHandler}
        active={invType}
      />
    </article>
  );
};

export default Loadout;
