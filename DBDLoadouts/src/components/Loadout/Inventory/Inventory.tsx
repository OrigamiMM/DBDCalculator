import { useEffect, useState } from "react";

import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

import classes from "./Inventory.module.css";

import allData from "../../../assets/AllData";
import DisplayData from "../../../models/DisplayData";
import InventorySelect from "./InventorySelect";

const getFilteredData = (type: string, cleanQ: string): DisplayData => {
  switch (type) {
    case "perk":
      const filteredPerks = allData.perksData.filter((p) => {
        const processedName = p.name.toLowerCase();
        return processedName.includes(cleanQ);
      });
      return { type: "perk", data: filteredPerks };
    case "item":
      const filteredItems = allData.itemsData.filter((p) => {
        const processedName = p.name.toLowerCase();
        return processedName.includes(cleanQ);
      });
      return { type: "item", data: filteredItems };
    default:
      const filteredAddons = allData.addonsData.filter((p) => {
        const processedName = p.name.toLowerCase();
        return processedName.includes(cleanQ);
      });
      return { type: "addon", data: filteredAddons };
  }
};

const Inventory = () => {
  const activeType = useSelector(
    (state: RootState) => state.inventory.currentInventory
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
    setCurrentPage(1);
  }, [activeType]);

  const queryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setQuery(event.target.value);
  };

  const decPage = () => {
    setCurrentPage((prev) => {
      return --prev;
    });
  };
  const incPage = () => {
    setCurrentPage((prev) => {
      return ++prev;
    });
  };

  const cleanQuery = query.trim().toLowerCase();
  const filteredInvIems = getFilteredData(activeType, cleanQuery);
  const maxPage = Math.floor(filteredInvIems.data.length / 15) + 1;

  return (
    <section className={classes.inventory}>
      <div className={classes.title}>
        <h3>INVENTORY</h3>
        <h4>CURRENT ACTIVE</h4>
      </div>
      <form className={classes.search}>
        <label htmlFor="invSearch">Search</label>
        <input
          onChange={queryHandler}
          type="search"
          id="invSearch"
          style={{ color: "black" }}
        />
      </form>
      <button
        disabled={currentPage === 1}
        onClick={decPage}
        className={classes.prev}
      >
        &lt;
      </button>
      <InventorySelect
        inventoryDisplay={filteredInvIems}
        inventoryPosition={classes.invDisplay}
        page={currentPage}
      />
      <h5 className={classes.pages}>
        {currentPage}/{maxPage}
      </h5>
      <button
        disabled={currentPage === maxPage}
        onClick={incPage}
        className={classes.next}
      >
        &gt;
      </button>
    </section>
  );
};

export default Inventory;
