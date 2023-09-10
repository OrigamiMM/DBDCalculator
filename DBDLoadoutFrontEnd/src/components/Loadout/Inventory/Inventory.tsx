import React, { useEffect, useState } from "react";

import PerkData from "../../../models/PerkData";

import InventorySelect from "./InventorySelect";
import classes from "./Inventory.module.css";
import DataArray from "../../../models/DataArray";

interface invItem {
  name: string;
}

const processInvItems = <T extends invItem>(invItems: T[], q: string) => {
  const filteredInvItems = invItems.filter((invItem) => {
    const cleanName = invItem.name.toLowerCase();
    const cleanQuery = q.trim().toLowerCase();
    return cleanName.includes(cleanQuery);
  });
  return filteredInvItems;
};

const processData = (
  lData: DataArray,
  q: string,
  p: number
): [number, DataArray] => {
  const { type, data } = lData;
  if (type === "item") {
    const newData = processInvItems(data, q);
    const max = Math.floor(newData.length / 15) + 1;
    return [max, { type, data: newData.slice(15 * (p - 1), 15 * p) }];
  } else if (type === "addon") {
    const newData = processInvItems(data, q);
    const max = Math.floor(newData.length / 15) + 1;
    return [max, { type, data: newData.slice(15 * (p - 1), 15 * p) }];
  } else {
    const newData = processInvItems(data, q);
    const max = Math.floor(newData.length / 15) + 1;
    return [max, { type, data: newData.slice(15 * (p - 1), 15 * p) }];
  }
};

type Props = {
  activeSelection: (PerkData | null)[];
  activeIndex: number;
  data: DataArray;
  onPerkClick: (p: PerkData) => void;
  active: string;
};

function Inventory(props: Props) {
  const [query, setQuery] = useState("");
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const currentActive: PerkData | null =
      props.activeSelection[props.activeIndex];
    if (currentActive) {
      setQuery("");
      const index = props.data.data.findIndex((p) => p === currentActive);
      const calcPage = Math.floor(index / 15) + 1;
      setActivePage(calcPage);
    }
  }, [props.activeIndex, props.activeSelection, props.data]);

  const filteredDataInfo = processData(props.data, query, activePage);
  const toDisplay = filteredDataInfo[1];
  const maxPages = filteredDataInfo[0];

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
        <input type="search" id="invSearch" onChange={inputHandler} value={query}/>
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
        toDisplay={toDisplay}
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
