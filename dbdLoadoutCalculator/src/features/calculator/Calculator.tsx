import { useState } from "react";

import { useAppSelector } from "../../app/hooks";
import { DisplayCard } from "../../components/UI/DisplayCard";
import { getLoadoutState } from "../loadout";
import { GeneratorTime } from "./components";
import { selectAddonByName, selectItemByName } from "../DBDData/dbdDataSlice";
type Props = {};

export const Calculator = (props: Props) => {
  const [objectiveTask, setObjectiveTask] = useState("generator");
  const itemName = useAppSelector(
    (state) => getLoadoutState(state).selectedItem
  );
  const item = useAppSelector((state) =>
    selectItemByName(state, itemName || "")
  );
  const selectedAddons = useAppSelector(
    (state) => getLoadoutState(state).selectedAddons
  );
  const activeModifiers = useAppSelector(
    (state) => getLoadoutState(state).perkModifiers
  );
  const hasProve = useAppSelector(state => getLoadoutState(state).selectedPerks).includes('Prove Thyself')

  const addons = [
    useAppSelector((state) =>
      selectAddonByName(state, selectedAddons[0] || "")
    ),
    useAppSelector((state) =>
      selectAddonByName(state, selectedAddons[1] || "")
    ),
  ];

  let objectiveDisplay;
  if (objectiveTask === "generator") {
    const perkInstance = {
      fastTrackBonus: 0,
      repairBonusSpeed: 0,
      genBonus: 0,
      hasProve
    };
    activeModifiers.forEach((m) => {
      if (m?.type.includes("repair")) {
        perkInstance.repairBonusSpeed += m.value;
      } else if (m?.type.includes("progression-bonus")) {
        perkInstance.fastTrackBonus = m.value;
      } else if (m?.type.includes("repair-progression")) {
        perkInstance.genBonus = m.value;
      }
    });
    let BNP = false;
    if (selectedAddons.includes("Brand New Part")) BNP = true;
    const itemStats = { charges: 0, speed: 0, hasBNP: BNP };
    if (item?.stats !== undefined && item.type === "toolbox") {
      itemStats.charges +=
        item.stats.charges +
        (addons[0]?.stats?.charges || 0) +
        (addons[1]?.stats?.charges || 0);
      itemStats.speed +=
        item.stats.speed +
        (addons[0]?.stats?.speed || 0) +
        (addons[1]?.stats?.speed || 0);
    }
    objectiveDisplay = (
      <GeneratorTime perkStats={perkInstance} toolBoxStats={itemStats} />
    );
  } else if (objectiveTask === "selfHeal") {
    objectiveDisplay = <h2>Self Heal Time</h2>;
  } else if (objectiveTask === "aultHeal") {
    objectiveDisplay = <h2>Aulturistic Heal</h2>;
  }

  return (
    <DisplayCard className="z-0" title="OBJECTIVE TIME">
      <label className="font-semibold" htmlFor="obj-select">
        SELECT:
        <select
          className="bg-dark border-gray-800 border-2 w-fit"
          name="objectives"
          id="obj-select"
          value={objectiveTask}
          onChange={(e) => setObjectiveTask(e.target.value)}
        >
          <option value="generator">GENERATOR</option>
          {/* <option value="selfHeal">SELF HEAL</option>
          <option value="aultHeal">ALTURISTIC HEAL</option> */}
        </select>
      </label>
      {objectiveDisplay}
    </DisplayCard>
  );
};
