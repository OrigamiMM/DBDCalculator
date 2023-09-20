import type { RootState } from "../../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { updatePerks } from "../../../../store/inventorySlice";

import classes from "./PerksInventory.module.css";
import Perk from "../../../UI/Perk/Perk";
import PerkData from "../../../../models/PerkData";
type Props = {
  invPosition: string;
  displayPerks: PerkData[];
};

const PerksInventory = ({ invPosition, displayPerks }: Props) => {
  const selectedPerks = useSelector(
    (state: RootState) => state.inventory.selectedPerks
  );
  console.log(selectedPerks);

  const dispatch = useDispatch();
  let row = -1;
  const leftPositions = [3, 4, 8, 9, 13, 14];
  return (
    <ul className={`${invPosition} ${classes.perkInventory}`}>
      {displayPerks.map((perk, i) => {
        if (i % 5 == 0) row++;
        let direction = "right";
        const position = `perk${i + 1}`;
        if (leftPositions.includes(i)) direction = "left";
        return (
          <Perk
            key={i}
            onClick={() => dispatch(updatePerks(perk))}
            direction={[direction, row.toString()]}
            selected={selectedPerks.includes(perk)}
            position={classes[position]}
            data={perk}
          />
        );
      })}
    </ul>
  );
};

export default PerksInventory;
