import classes from "./EmptyPerk.module.css";
import emptyBackground from "/src/assets/perkImages/allPerkAssets/EmptyPerk.svg";
type Props = {
  className?: string;
};

const EmptyPerk = (props: Props) => {
  return (
    <li className={`${props.className}`}>
      <div className={classes.emptyPerkDisplay}>
        <img
          className={classes.emptyPerk}
          src={emptyBackground}
          alt="Empty Perk"
        />
      </div>
    </li>
  );
};

export default EmptyPerk;
