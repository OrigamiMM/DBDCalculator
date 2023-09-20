import Item from "../../UI/Item/Item";
import classes from "./ItemAddonsSelect.module.css";
import ItemData from "../../../models/ItemData";
import AddonData from "../../../models/AddonData";
import EmptyItemAddon from "./EmptyItemAddon";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import ItemDisplay from "./ItemDisplay";
import AddonsDisplay from "./AddonsDisplay";

const ItemAddonsSelect = () => {
  const active = useSelector(
    (state: RootState) => state.inventory.currentInventory
  );
  const itemData = useSelector(
    (state: RootState) => state.inventory.selectedItem
  );
  const index = useSelector((state: RootState) => state.inventory.currentIndex);

  let passedIndex;
  if (active === "addon") passedIndex = index;
  return (
    <article>
      <h3>ITEM and ADD-ONS</h3>
      <section className={classes.stack}>
        <hr className={classes.bar} />
        <section className={classes.ItemAddonDisplay}>
          <ItemDisplay active={active === "item"} item={itemData} />
          <AddonsDisplay
            index={passedIndex}
            addonSizing={classes.addonSizing}
            slots={classes.slots}
          />
        </section>
      </section>
    </article>
  );
};

export default ItemAddonsSelect;
