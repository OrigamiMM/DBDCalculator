import { useState } from "react";

import classes from "./DBDAddon.module.css";
import Description from "../Description";
import AddonData from "../../../models/AddonData";

type Props = {
  isActive: boolean;
  direction: string[];
  data: AddonData;
};

function DBDAddon({ isActive, direction, data }: Props) {
  const descData = {
    name: data.name,
    text: data.description,
  };
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered((prev) => !prev);
  };
  const itemImg = `/src/assets/addonImages/${data.imgUrl}`;
  return (
    <li className={classes.stack}>
      <img className={classes.mainItemImg} src={itemImg} alt="" />
      {isActive && (
        <div
          className={classes.hoverArea}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        ></div>
      )}
      <Description data={descData} hovered={hovered} position={direction} />
    </li>
  );
}

export default DBDAddon;
