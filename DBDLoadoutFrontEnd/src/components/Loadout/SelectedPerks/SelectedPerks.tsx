import PerkData from "../../../models/PerkData";
import PerksDisplay from "./PerksDisplay";

type Props = {
  onPerkClick: (n: number) => void;
  isActive: boolean;
  selectedPerks: (PerkData | null)[];
  activeIndex: number;
};

const SelectedPerks = (props: Props) => {
  return (
    <article>
      <h3>PERKS</h3>
      <PerksDisplay
        onPerkClick={props.onPerkClick}
        isActive={props.isActive}
        activeIndex={props.activeIndex}
        currentSelected={props.selectedPerks}
      />
    </article>
  );
};

export default SelectedPerks;
