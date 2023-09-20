import AddonData from "../../../../models/AddonData";
import DBDAddon from "../../../UI/DBDAddon/DBDAddon";
import classes from "./ItemsAddonInventory.module.css";

type Props = {
  invPosition: string;
  displayAddon: AddonData[];
};

const AddonInventory = ({ invPosition, displayAddon }: Props) => {
  const leftPositions = [3, 4, 8, 9, 13, 14];
  return (
    <ul className={`${invPosition} ${classes.itemsAddonInventory}`}>
        {displayAddon.map((item, i) => {
          let direction = "right";
          if (leftPositions.includes(i)) direction = "left";
          return (
            <DBDAddon
              direction={[direction, "none"]}
              isActive={true}
              key={i}
              data={item}
            />
          );
        })}
      </ul>
  );
};

export default AddonInventory;
