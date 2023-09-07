import classes from './EmptyPerk.module.css'
import emptyBackground from '../../../../assets/EmptyPerk.svg'

type Props = {
  className?: string;
};

const EmptyPerk = (props: Props) => {
  return (
    <li className={`${props.className}`}>
      <img
        className={classes.emptyPerk}
        src={emptyBackground}
        alt="Empty Perk"
      />
    </li>
  );
};

export default EmptyPerk;
