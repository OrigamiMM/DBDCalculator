import classes from "./AddPerk.module.css";
import selectedOverlay from "../../../assets/Selected.svg";
import hoverOverlay from "../../../assets/Hover.svg";
import addImage from "../../../assets/EmptyPerk.svg"

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
          <img
            className={classes.addPerk}
            src={addImage}
            alt="Add Perk"
          />
        </div>
      </div>
    </li>
  );
};

export default AddPerk;
