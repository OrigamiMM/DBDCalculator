import type { RootState } from "../../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { updateItem } from "../../../../store/inventorySlice";

import classes from "./ItemsAddonInventory.module.css";
import ItemData from "../../../../models/ItemData";
import Item from "../../../UI/Item/Item";
type Props = {
  invPosition: string;
  displayItems: ItemData[];
};

const ItemsInventory = ({ invPosition, displayItems }: Props) => {
  const dispatch = useDispatch();
  const selecteditem = useSelector(
    (state: RootState) => state.inventory.selectedItem
  );

  let row = -1;
  const leftPositions = [3, 4, 8, 9, 13, 14];
  return (
    <ul className={`${invPosition} ${classes.itemsAddonInventory}`}>
      {displayItems.map((item, i) => {
        if (i % 5 == 0) row++;
        let direction = "right";
        if (leftPositions.includes(i)) direction = "left";
        return (
          <Item
            key={i}
            onClick={() => dispatch(updateItem(item))}
            selected={item === selecteditem}
            direction={[direction, row.toString()]}
            data={item}
          />
        );
      })}
    </ul>
  );
};

export default ItemsInventory;
