import { useState } from "react";

import PerkData from "../../../models/PerkData";
import hoverOutline from "../../../assets/perkImages/allPerkAssets/Hover.svg";
import selectOutline from "../../../assets/perkImages/allPerkAssets/Selected.svg";
import purpleBack from "../../../assets/perkImages/allPerkAssets/PurpleBackground.svg";

import classes from "./Perk.module.css";
import PerkDescription from "./PerkDescription";

type Props = {
  position: string;
  data: PerkData;
  selected: boolean;
  direction: string[];
};

const Perk = (props: Props) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => {
    setHovered((prev) => !prev);
  };
  const outline = props.selected ? (
    <img
      className={classes.selectImg}
      src={selectOutline}
      alt="Perk Selected"
    />
  ) : (
    <img className={classes.hoverImg} src={hoverOutline} alt="Perk Hover" />
  );
  const background = (
    <img className={classes.mainPerkImg} src={purpleBack} alt="Purple Perk" />
  );
  const perkImg = `/src/assets/perkImages/${props.data.imgUrl}`;
  return (
    <li className={`${props.position} ${classes.stack}`}>
      <div className={classes.dropShadow}></div>
      <section
        className={`${classes.perkDisplay} ${hovered && classes.hovered}`}
      >
        {outline}
        {background}
        <img
          className={classes.mainPerkImg}
          src={perkImg}
          alt={props.data.name}
        />
      </section>
      <div
        className={classes.hoverArea}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
      <PerkDescription hovered={hovered} data={props.data} position={props.direction} />
    </li>
  );
};

export default Perk;
