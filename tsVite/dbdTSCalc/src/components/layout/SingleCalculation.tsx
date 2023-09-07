import Calculator from '../Calculator/Calculator'
import Loadout from '../Loadout/Loadout'

import classes from './SingleCalculation.module.css'

type Props = {}

function SingleCalculation({}: Props) {
  return (
    <main className={classes.mainContent}>
      <Loadout />
      <Calculator />
    </main>
  )
}

export default SingleCalculation

