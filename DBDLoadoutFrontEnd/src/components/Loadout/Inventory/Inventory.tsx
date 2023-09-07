import React, { useEffect, useState } from "react";

import perks from "../../../assets/PerksData";
import items from "../../../assets/ItemsData";
import InventorySelect from "./InventorySelect";
import classes from "./Inventory.module.css";
import DataArray from "../../../models/DataArray";
import PerkData from "../../../models/PerkData";

type Props = {
  activeIndex: number;
  activeSelection: (PerkData | null)[];
  onPerkClick: (p: PerkData) => void;
  active: string;
};

function Inventory(props: Props) {
  const [query, setQuery] = useState("");
  const [activePage, setActivePage] = useState(1);

  let activeItems = perks;
  if (props.active === "item") activeItems = items;

  useEffect(() => {
    const currentActive: PerkData | null =
      props.activeSelection[props.activeIndex];
    if (currentActive) {
      setQuery("");
      const index = activeItems.data.findIndex((p) => p === currentActive);
      let calcPage = Math.floor(index / 15) + 1;
      setActivePage(calcPage);
    }
  }, [props.activeIndex]);

  const filteredInvItems = activeItems.data.filter((invItem) => {
    const invItemName = invItem.name.toLowerCase();
    const q = query.trim().toLowerCase();
    return invItemName.includes(q);
  });

  const maxPages = Math.ceil(filteredInvItems.length / 15);
  const itemPage = filteredInvItems.slice(
    15 * (activePage - 1),
    15 * activePage
  );

  const displayItems: DataArray = { type: activeItems.type, data: itemPage };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setActivePage(1);
  };

  const buttonHandler = (incrementor: number) => {
    setActivePage((prev) => {
      return (prev += incrementor);
    });
  };
  return (
    <article className={classes.inventory}>
      <div className={classes.title}>
        <h3>INVENTORY</h3>
        <h4>PERKS</h4>
      </div>
      <form className={classes.search}>
        <label htmlFor="invSearch">Search</label>
        <input type="search" id="invSearch" onChange={inputHandler} />
      </form>
      <button
        className={classes.prevButton}
        onClick={buttonHandler.bind(null, -1)}
        disabled={activePage == 1}
      >
        &lt;
      </button>
      <InventorySelect
        activeInventory={props.activeSelection}
        onPerkClick={props.onPerkClick}
        className={classes.inventorySelector}
        toDisplay={displayItems}
      />
      <button
        className={classes.nextButton}
        onClick={buttonHandler.bind(null, 1)}
        disabled={activePage == maxPages}
      >
        &gt;
      </button>
      <section className={classes.pages}>
        <p>
          {activePage}/{maxPages}
        </p>
      </section>
    </article>
  );
}

export default Inventory;
