import Calculator from "../Calculator/Calculator";
import Loadout from "../Loadout/Loadout";

import classes from "./SingleCalculation.module.css";

type Props = {};

const SingleCalculation = (props: Props) => {
  return (
    <main className={classes.soloCalcContainer}>
      <Loadout />
      <Calculator />
    </main>
  );
};

export default SingleCalculation;
