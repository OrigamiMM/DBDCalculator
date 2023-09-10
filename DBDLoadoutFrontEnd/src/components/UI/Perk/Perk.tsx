import { useState } from "react";
import purpleBackground from "/src/assets/perkImages/allPerkAssets/PurpleBackground.svg";
import hoverOverlay from "/src/assets/perkImages/allPerkAssets/Hover.svg";
import selectedOverlay from "/src/assets/perkImages/allPerkAssets/Selected.svg";

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

  const sourceText = `VERY RARE ${
    props.Perk.source !== "Any" ? props.Perk.source.toUpperCase() : ""
  } PERK`;

  const imgName = props.Perk.imgUrl.split("/").pop();
  const perkImg = `/src/assets/perkImages/${imgName}`;
  return (
    <li
      className={`${props.className} ${showDesc ? classes.active : ""} ${
        classes.stack
      }`}
    >
      <div
        onClick={props.onPerkClick}
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
      <div className={`${classes.description} ${classes.topRow}`}>
        <header className={classes.header}>
          <h3 className={classes.descHeader}>{props.Perk.name}</h3>
          <h4 className={classes.source}>{sourceText}</h4>
        </header>
        <div
          className={classes.descText}
          dangerouslySetInnerHTML={{ __html: props.Perk.description }}
        ></div>
      </div>
    </li>
  );
};

export default Perk;
