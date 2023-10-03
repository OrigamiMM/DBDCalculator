import { DisplayCardSection } from "../../../components/UI/DisplayCard";
import { DisplayPerks } from "./DisplayPerks";
import { useAppSelector } from "../../../app/hooks";

export const PerksDisplay = () => {
  const activeInv = useAppSelector(state=>state.loadout.currentActive)
  const currentIndex = useAppSelector(state=>state.loadout.currentIndex)

  let perkIndex;
  if(activeInv === "perk"){
    perkIndex = currentIndex
  }

  return (
    <DisplayCardSection title="PERKS">
      <section className="m-auto">
        <DisplayPerks current={perkIndex}/>
      </section>
    </DisplayCardSection>
  );
};
