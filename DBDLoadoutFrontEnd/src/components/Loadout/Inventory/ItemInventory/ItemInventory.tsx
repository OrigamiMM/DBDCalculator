import React from "react";
import classes from "./ItemInventory.module.css";
import ItemData from "../../../../models/Itemdata";

type Props = {
  className?: string;
  displayItems: (ItemData | null)[];
};

const ItemInventory = (props: Props) => {
  console.log(props.displayItems.length);
  return <ul className={`${props.className} ${classes.itemsList}`}></ul>;
};

export default ItemInventory;
