import classes from "./EmptyItemAddon.module.css";
import addSquareSlot from "../../../assets/otherImgs/EmptyPerkAddon.svg";
import selectedOverlay from "../../../assets/otherImgs/SquareSelected.svg";
import hoverOverlay from "../../../assets/otherImgs/SquareHover.svg";

type Props = {
  onClick: () => void;
  selected: boolean;
  styling: string;
};

function EmptyItemAddon(props: Props) {
  const overlay = props.selected ? (
    <img className={classes.selected} src={selectedOverlay} alt="" />
  ) : (
    <img className={classes.hover} src={hoverOverlay} alt="" />
  );
  return (
    <li onClick={props.onClick} className={`${props.styling} ${classes.stack}`}>
      {overlay}
      <img src={addSquareSlot} alt="" />
    </li>
  );
}

export default EmptyItemAddon;
