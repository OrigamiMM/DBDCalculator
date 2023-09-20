import classes from "./PerkDescription.module.css";
type Props = {
  hovered: boolean;
  data: { name: string; text: string; source?: string };
  position: string[];
};

const Description = ({ hovered, data, position }: Props) => {
  let scaleDirection = classes.right;
  if (position[0] === "left") {
    scaleDirection = classes.left;
  }

  let row = classes.topRow;
  console.log("is top");
  console.log(position);

  if (position[1] === "1") {
    row = classes.midRow;
  } else if (position[1] === "2") {
    row = classes.bottomRow;
  } else if (position[1] === "none") {
    row = classes.none;
  } else if (position[1] === "lowest") {
    console.log("isLowest");

    row = classes.lowest;
  }

  let sourceText = "";
  if (data.source) {
    sourceText = `VERY RARE ${
      data.source !== "Any" ? data.source.toUpperCase() : ""
    } PERK`;
  }

  return (
    <section
      className={`${hovered && classes.descActive} ${
        classes.description
      } ${scaleDirection} ${row}`}
    >
      <header className={classes.header}>
        <h3 className={classes.perkName}>{data.name}</h3>
        {data.source && <h4 className={classes.source}>{sourceText}</h4>}
      </header>
      <div
        className={classes.perkText}
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></div>
    </section>
  );
};

export default Description;
