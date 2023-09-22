import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Item } from "../../DBDData/components/DBDItem";
import { EmptyItemAddon } from "./EmptyItemAddon";
import { getLoadoutState, updateActive } from "../../loadout";
import {
  setPage,
  updateList,
  updateQuery,
} from "../../inventory/inventorySlice";
import { getDataState } from "../../DBDData/dbdDataSlice";

type Props = {
  active: boolean;
};

export const ItemDisplay = ({ active }: Props) => {
  const dispatch = useAppDispatch();
  const itemName = useAppSelector(
    (state) => getLoadoutState(state).selectedItem
  );

  const itemList = useAppSelector((state) => getDataState(state).allItems);
  const itemNames = itemList.map((i) => i.name);

  const itemClickHandler = (itemName: string) => {
    const itemIndex = itemNames.findIndex((item) => item === itemName);
    const calcPage = Math.floor(itemIndex / 15) + 1;
    dispatch(setPage(calcPage));
    dispatch(updateList(itemNames));
    dispatch(updateQuery(""));
    dispatch(updateActive({ type: "item", newI: 0 }));
  };

  const emptyItemClickHandler = () => {
    dispatch(updateQuery(""));
    dispatch(setPage(1));
    dispatch(updateList(itemNames));
    dispatch(updateActive({ type: "item", newI: 0 }));
  };

  const content = itemName ? (
    <Item
      descriptionPosition="ml-20 translate-x-1/2 translate-y-[min(20%,calc(27em-50%))]"
      onClick={itemClickHandler.bind(null, itemName)}
      name={itemName}
      selected={active}
    />
  ) : (
    <EmptyItemAddon
      selected={active}
      type="item"
      onClick={emptyItemClickHandler}
    />
  );
  return content;
};
