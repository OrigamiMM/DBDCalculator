import { useAppSelector } from "../../../app/hooks";
import { DisplayCard } from "../../../components/UI/DisplayCard";
import { Inventory } from "../../inventory";
import { ItemAddonDisplay } from "../../ItemAddonDisplay";
import { PerksDisplay } from "../../perksDisplay";

type Props = {};

export const Loadout = () => {
  const current = useAppSelector(state => state.loadout.currentActive);
  return (
    <DisplayCard title="LOADOUT">
      <ItemAddonDisplay />
      <PerksDisplay />
      <Inventory current={current}/>
    </DisplayCard>
  );
};
