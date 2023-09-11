import PerkData from "../../../models/PerkData";
import classes from "./PerkDescription.module.css";
type Props = {
  hovered: boolean;
  data: PerkData;
  position: string[];
};

const PerkDescription = ({ hovered, data, position }: Props) => {
  let scaleDirection = classes.right;
  if (position[0] === "left") {
    scaleDirection = classes.left;
  }

  let row = classes.topRow;
  if (position[1] === "1") {
    row = classes.midRow;
  } else if (position[1] === "2") {
    row = classes.bottomRow;
  }

  const sourceText = `VERY RARE ${
    data.source !== "Any" ? data.source.toUpperCase() : ""
  } PERK`;

  return (
    <section
      className={`${hovered && classes.descActive} ${
        classes.description
      } ${scaleDirection} ${row}`}
    >
      <header className={classes.header}>
        <h3 className={classes.perkName}>{data.name}</h3>
        <h4 className={classes.source}>{sourceText}</h4>
      </header>
      <div
        className={classes.perkText}
        dangerouslySetInnerHTML={{ __html: data.description }}
      ></div>
    </section>
  );
};

export default PerkDescription;
