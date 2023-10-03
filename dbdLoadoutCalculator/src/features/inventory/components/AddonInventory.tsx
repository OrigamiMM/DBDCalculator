import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { getLoadoutState, updateAddon } from "../../loadout";
import { selectItemByName } from "../../DBDData/dbdDataSlice";
import { Addon } from "../../DBDData/components/DBDAddon/Addon";

type Props = {
  page: number;
  addonNames: string[][];
  descriptionPosition: string[];
};

export const AddonInventory = ({
  page,
  addonNames,
  descriptionPosition,
}: Props) => {
  const dispatch = useAppDispatch();
  let selectedItem = useAppSelector(
    (state) => getLoadoutState(state).selectedItem
  );
  const selectedAddons = useAppSelector(
    (state) => getLoadoutState(state).selectedAddons
  );

  if (!selectedItem) selectedItem = "";
  const item = useAppSelector((state) =>
    selectItemByName(state, selectedItem!)
  );
  let type = "none";
  if (item) {
    type = item.type;
  }

  let organizedList: [boolean, string][] = [];
  const activeItems = addonNames.filter((pair) => pair[0] == type);

  const inactiveItems = addonNames.filter((pair) => pair[0] != type);
  organizedList = organizedList.concat(
    activeItems.map((pair) => [true, pair[1]])
  );
  organizedList = organizedList.concat(
    inactiveItems.map((pair) => [false, pair[1]])
  );
  const displayList = organizedList.slice(15 * (page - 1), 15 * page);

  return (
    <ul className=" grid grid-cols-3 sm:grid-cols-5 place-items-center">
      {displayList.map((pair, i) => {
        const addonActive = pair[0];
        const addonName = pair[1];
        return (
          <Addon
            descritpionPosition={descriptionPosition[i]}
            key={i}
            name={addonName}
            onClick={() => dispatch(updateAddon(addonName))}
            selected={selectedAddons.includes(addonName)}
            active={addonActive}
          />
        );
      })}
    </ul>
  );
};
