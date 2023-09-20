import { useState } from "react";

import classes from "./Item.module.css";
import ItemData from "../../../models/ItemData";
import Description from "../Description";

import selectedOverlay from "../../../assets/otherImgs/SquareSelected.svg";
import hoverOverlay from "../../../assets/otherImgs/SquareHover.svg";

type Props = {
  onClick: () => {};
  direction: string[];
  selected: boolean;
  data: ItemData;
};

function Item({ onClick, direction, selected, data }: Props) {
  const overlay = selected ? (
    <img className={classes.selected} src={selectedOverlay} alt="" />
  ) : (
    <img className={classes.hover} src={hoverOverlay} alt="" />
  );
  const descData = {
    name: data.name,
    text: data.description,
  };
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered((prev) => !prev);
  };
  const itemImg = `/src/assets/itemImages/${data.imgUrl}`;
  console.log(itemImg);
  return (
    <li className={classes.stack}>
      {overlay}
      <img className={classes.mainItemImg} src={itemImg} alt="" />
      <div
        onClick={onClick}
        className={classes.hoverArea}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      ></div>
      <Description data={descData} hovered={hovered} position={direction} />
    </li>
  );
}

export default Item;
