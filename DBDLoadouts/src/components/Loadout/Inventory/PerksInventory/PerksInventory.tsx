import classes from "./PerksInventory.module.css";
import perks from "../../../../assets/PerksData";
import Perk from "../../../UI/Perk/Perk";
type Props = {
  className: string;
  page: number;
};

const PerksInventory = (props: Props) => {
  let row = -1;
  const leftPositions = [3, 4, 8, 9, 13, 14];
  const displaySlice = perks.slice(15 * (props.page - 1), 15 * props.page);
  return (
    <ul className={`${props.className} ${classes.perkInventory}`}>
      {displaySlice.map((perk, i) => {
        if (i % 5 == 0) row++;
        let direction = "right";
        const position = `perk${i + 1}`;
        if (leftPositions.includes(i)) direction = "left";
        return (
          <Perk
            direction={[direction, row.toString()]}
            selected={i === 1}
            position={classes[position]}
            data={perk}
          />
        );
      })}
    </ul>
  );
};

export default PerksInventory;
