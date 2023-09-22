import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Item } from "../../DBDData/components/DBDItem";
import { updateItem } from "../../loadout";
type Props = {
  itemNames: string[];
  descriptionPosition: string[];
};

export const ItemInventory = ({ itemNames, descriptionPosition }: Props) => {
  const dispatch = useAppDispatch();
  const selectedItem = useAppSelector((state) => state.loadout.selectedItem);

  return (
    <ul className="grid grid-cols-3 sm:grid-cols-5 place-items-center">
      {itemNames.map((itemName, i) => {
        return (
          <Item
            key={i}
            descriptionPosition={descriptionPosition[i]}
            onClick={() => dispatch(updateItem(itemName))}
            name={itemName}
            selected={selectedItem === itemName}
          />
        );
      })}
    </ul>
  );
};
