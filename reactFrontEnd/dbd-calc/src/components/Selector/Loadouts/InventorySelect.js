import PerkInventory from "./perkInventory/PerkInventory"

const InventorySelect = () => {
  return (
    <article className="inventory">
      <div className="inventoryBar">
        <div className="title">
          <h3>INVENTORY</h3>
          <h4>PERKS</h4>
        </div>
        <div className="search">
          <label className="darkLabel" htmlFor="inventorySearch">
            Search:{" "}
          </label>
          <input className="darkInput" id="inventorySearch" type="text" />
        </div>
      </div>

      {/* <!-- could also be item-inventory or addon-inventory --> */}
      <section className="maininventory">
        <button className="prev">&lt</button>
        <PerkInventory></PerkInventory>
        <nav className="pages">
          <button className="current">1</button>
          <button>2</button>
        </nav>
        <button className="next">&gt</button>
      </section>
    </article>
  );
};

export default InventorySelect;
