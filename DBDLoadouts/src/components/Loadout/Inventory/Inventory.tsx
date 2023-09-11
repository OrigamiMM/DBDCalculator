import classes from "./Inventory.module.css";
import InventoryDisplay from "./InventoryDisplay";
const Inventory = () => {
  return (
    <section className={classes.inventory}>
      <div className={classes.title}>
        <h3>INVENTORY</h3>
        <h4>CURRENT ACTIVE</h4>
      </div>
      <form className={classes.search}>
        <label htmlFor="invSearch">Search</label>
        <input type="search" id="invSearch" />
      </form>
      <button className={classes.prev}>&lt;</button>
      <InventoryDisplay
        invPosition={classes.invDisplay}
        pagesPosition={classes.pages}
      />
      <button className={classes.next}>&gt;</button>
    </section>
  );
};

export default Inventory;
