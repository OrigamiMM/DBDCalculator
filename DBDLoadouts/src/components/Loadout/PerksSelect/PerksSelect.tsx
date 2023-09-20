import PerkData from "../../../models/PerkData";
import DisplaySelected from "./DisplaySelected";

import type { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

const PerksSelect = () => {
  const currentActive = useSelector(
    (state: RootState) => state.inventory.currentInventory
  );
  const currentIndex = useSelector(
    (state: RootState) => state.inventory.currentIndex
  );
  const selectedPerks = useSelector(
    (state: RootState) => state.inventory.selectedPerks
  );
  let passedIndex;
  if (currentActive === "perk") passedIndex = currentIndex;

  return (
    <article>
      <h3>PERKS</h3>
      <DisplaySelected
        current={passedIndex}
        selectedPerks={selectedPerks}
      />
    </article>
  );
};

export default PerksSelect;
