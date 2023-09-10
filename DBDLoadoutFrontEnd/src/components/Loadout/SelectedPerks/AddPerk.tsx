import classes from "./AddPerk.module.css";
import selectedOverlay from "/src/assets/perkImages/allPerkAssets/Selected.svg";
import hoverOverlay from "/src/assets/perkImages/allPerkAssets/Hover.svg";
import addImage from "/src/assets/perkImages/allPerkAssets/EmptyPerk.svg";

type Props = {
  onSetActive: () => void;
  selected: boolean;
};

const AddPerk = (props: Props) => {
  const overlay = props.selected ? (
    <img className={classes.selected} src={selectedOverlay} alt="" />
  ) : (
    <img className={classes.hover} src={hoverOverlay} alt="" />
  );
  return (
    <li onClick={props.onSetActive}>
      <div className={classes.perkInteractable}>
        <div className={classes.perkDisplay}>
          {overlay}
          <img className={classes.addPerk} src={addImage} alt="Add Perk" />
        </div>
      </div>
    </li>
  );
};

export default AddPerk;
