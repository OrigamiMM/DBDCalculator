import Perk from "../../UI/Perk/Perk";
import classes from "./PerksDisplay.module.css";
import PerkData from "../../../models/PerkData";
import AddPerk from "./AddPerk";

type Props = {
  onPerkClick: (n: number) => void;
  isActive: boolean;
  currentSelected: (PerkData | null)[];
  activeIndex: number;
};

const PerksDisplay = (props: Props) => {
  console.log(props.currentSelected.length);
  return (
    <ul className={classes.perkSelection}>
      {props.currentSelected.map((p, i) => {
        const isSelect = props.isActive && props.activeIndex === i;
        if (p) {
          return (
            <Perk
              className={classes.perkPositioning}
              onPerkClick={props.onPerkClick.bind(null, i)}
              key={i}
              Perk={p}
              selected={isSelect}
            />
          );
        }
        return (
          <AddPerk
            onSetActive={props.onPerkClick.bind(null, i)}
            key={i}
            selected={isSelect}
          />
        );
      })}
    </ul>
  );
};

export default PerksDisplay;
