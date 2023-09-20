import { useState } from "react";
import classes from "./Loadout.module.css";
import ItemAddonsSelect from "./ItemAddonsSelect/ItemAddonsSelect";
import PerksSelect from "./PerksSelect/PerksSelect";
import Inventory from "./Inventory/Inventory";

import PerkData from "../../models/PerkData";
import ItemData from "../../models/ItemData";
import AddonData from "../../models/AddonData";

const Loadout = () => {

  return (
    <article className={classes.loadoutContainer}>
      <h2 className={classes.sectionTitle}>LOADOUT</h2>
      <hr />
      <ItemAddonsSelect />
      <hr />
      <PerksSelect />
      <hr />
      <Inventory />
    </article>
  );
};

export default Loadout;
