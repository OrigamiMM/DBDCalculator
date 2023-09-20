import PerkData from "../../../models/PerkData";
import AddPerk from "./AddPerk";

import classes from "./DisplaySelected.module.css";

import { useDispatch } from "react-redux";
import { updateInventory } from "../../../store/inventorySlice";
import Perk from "../../UI/Perk/Perk";

type Props = {
  current?: number;
  selectedPerks: (PerkData | null)[];
};

const DisplaySelected = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <ul className={classes.perkSelection}>
      {props.selectedPerks.map((p, i) => {
        let activeSelect = props.current === i;
        if (p) {
          let dir = "right";
          if (i >= 2) dir = "left";
          return (
            <Perk
              key={i}
              data={p}
              onClick={() =>
                dispatch(updateInventory({ type: "perk", newI: i }))
              }
              selected={activeSelect}
              position=""
              direction={[dir, "lowest"]}
            />
          );
        } else {
          return (
            <AddPerk
              key={i}
              selected={activeSelect}
              onSetActive={() =>
                dispatch(updateInventory({ type: "perk", newI: i }))
              }
            />
          );
        }
      })}
    </ul>
  );
};

export default DisplaySelected;
