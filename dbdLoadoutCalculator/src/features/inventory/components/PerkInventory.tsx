import { updatePerks } from "../../loadout";
import { Perk } from "../../DBDData/components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

type Props = {
  perkNames: string[];
};

const span = " col-span-2 row-span-2";
const rowMarkers: string[] = ["row-start-1", "row-start-2 sm:row-start-1"];
const colMarkers: string[] = [
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
  "col-start-8",
  "col-start-9",
  "col-start-10",
];

const perkPositions = [
  "col-start-1 row-start-1",
  "col-start-3 row-start-1",
  "col-start-5 row-start-1",
  "col-start-2 sm:col-start-7 row-start-2 sm:row-start-1",
  "col-start-4 sm:col-start-9 row-start-2 sm:row-start-1",
  "col-start-6 sm:col-start-2 row-start-2",
  "col-start-1 sm:col-start-4 row-start-3 sm:row-start-2",
  "col-start-3 sm:col-start-6 row-start-3 sm:row-start-2",
  "col-start-5 sm:col-start-8 row-start-3 sm:row-start-2",
  "col-start-2 sm:col-start-10 row-start-4 sm:row-start-2",
  "col-start-4 sm:col-start-1 row-start-4 sm:row-start-3",
  "col-start-6 sm:col-start-3 row-start-4 sm:row-start-3",
  "col-start-1 sm:col-start-5 row-start-5 sm:row-start-3",
  "col-start-3 sm:col-start-7 row-start-5 sm:row-start-3",
  "col-start-5 sm:col-start-9 row-start-5 sm:row-start-3",
];

export const PerkInventory = ({ perkNames }: Props) => {
  const dispatch = useAppDispatch();
  const selectedPerks = useAppSelector((state) => state.loadout.selectedPerks);
  return (
    <ul className="sm:px-2 grid place-items-center py-6 gap-y-14 gap-x-2">
      {perkNames.map((perkName, i) => {
        return (
          <Perk
            key={i}
            onClick={() => dispatch(updatePerks(perkName))}
            name={perkName}
            gridPosition={perkPositions[i] + span}
            selected={selectedPerks.includes(perkName)}
          />
        );
      })}
    </ul>
  );
};
