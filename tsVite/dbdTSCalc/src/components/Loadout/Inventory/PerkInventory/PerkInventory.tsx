import PerkData from "../../../../models/PerkData";
import Perk from "../../../UI/Perk/Perk";
import EmptyPerk from "./EmptyPerk";

import classes from "./PerkInventory.module.css";

type Props = {
  activePerks: (PerkData|null)[]
  className?: string;
  onPerkClick: (p: PerkData) => void;
  displayPerks: (PerkData | null)[];
};

function PerkInventory(props: Props) {
  return (
    <ul className={`${props.className} ${classes.itemsList}`}>
      {props.displayPerks.map((selector, i) => {
        const name = `perk${i + 1}`;
        if (!selector) {
          return <EmptyPerk key={i} className={classes[name]} />;
        }
        return (
          <Perk
            onPerkClick={props.onPerkClick.bind(null, selector)}
            key={i}
            className={classes[name]}
            selected={props.activePerks.includes(selector)}
            Perk={selector}
          />
        );
      })}
    </ul>
  );
}

export default PerkInventory;
