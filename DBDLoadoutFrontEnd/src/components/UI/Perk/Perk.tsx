import { useState } from "react";
import purpleBackground from "../../../assets/PurpleBackground.svg";
import hoverOverlay from "../../../assets/Hover.svg";
import selectedOverlay from "../../../assets/Selected.svg";

import classes from "./Perk.module.css";
import PerkData from "../../../models/PerkData";

type Props = {
  onPerkClick?: () => void;
  className?: string;
  selected: boolean;
  Perk: PerkData;
};

const Perk = (props: Props) => {
  const [showDesc, setShowDesc] = useState(false);
  const overlay = props.selected ? (
    <img className={classes.selected} src={selectedOverlay} alt="" />
  ) : (
    <img className={classes.hover} src={hoverOverlay} alt="" />
  );

  const descHandlerOn = () => {
    setShowDesc(true);
  };
  const descHandlerOff = () => {
    setShowDesc(false);
  };

  const imgName = props.Perk.imgUrl.split("/").pop();
  const perkImg = `/src/assets/perkImages/${imgName}`;
  return (
    <li onClick={props.onPerkClick} className={`${props.className} ${showDesc ? classes.active : ""}`}>
      <div
        className={`${classes.perkInteractable}`}
        onMouseEnter={descHandlerOn}
        onMouseLeave={descHandlerOff}
      >
        <div className={classes.perkDisplay}>
          {overlay}
          <img src={purpleBackground} alt="perkBackground" />
          <img src={perkImg} alt="" />
        </div>
      </div>
      <div className={classes.description}>
        <p>{props.Perk.name}</p>
      </div>
    </li>
  );
};

export default Perk;
