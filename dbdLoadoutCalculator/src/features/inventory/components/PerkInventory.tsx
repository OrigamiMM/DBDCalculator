import { updatePerks } from "../../loadout";
import { Perk } from "../../DBDData/components";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

type Props = {
  perkNames: string[];
  descriptionPositions: string[];
};

const span = " col-span-2 row-span-2";

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

export const PerkInventory = ({ perkNames, descriptionPositions }: Props) => {
  const dispatch = useAppDispatch();
  const selectedPerks = useAppSelector((state) => state.loadout.selectedPerks);
  return (
    <ul className="grid place-items-center gap-y-14 gap-x-2">
      {perkNames.map((perkName, i) => {
        return (
          <li key={i} className={perkPositions[i] + span}>
            <Perk
              descriptionPosition={descriptionPositions[i]}
              onClick={() => dispatch(updatePerks(perkName))}
              name={perkName}
              selected={selectedPerks.includes(perkName)}
            />
          </li>
        );
      })}
    </ul>
  );
};
