import Item from "../../UI/Item/Item";
import ItemData from "../../../models/ItemData";
import EmptyItemAddon from "./EmptyItemAddon";
import { useDispatch } from "react-redux";
import { updateInventory } from "../../../store/inventorySlice";

import classes from "./ItemDisplay.module.css";

type Props = {
  active: boolean;
  item: ItemData | null;
};

const ItemDisplay = (props: Props) => {
  const dispatch = useDispatch();
  const itemDisplay = props.item ? (
    <Item
      selected={props.active}
      data={props.item}
      onClick={() => dispatch(updateInventory({ type: "item", newI: 0 }))}
      direction={["", ""]}
    />
  ) : (
    <EmptyItemAddon
      onClick={() => dispatch(updateInventory({ type: "item", newI: 0 }))}
      selected={props.active}
      styling={classes.itemSizing}
    />
  );
  return <ul>{itemDisplay}</ul>;
};

export default ItemDisplay;
