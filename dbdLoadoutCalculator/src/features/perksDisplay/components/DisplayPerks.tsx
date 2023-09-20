import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { Perk } from "../../DBDData/components";
import { getLoadoutState, updateActive } from "../../loadout";
import { AddPerk } from "./AddPerk";
import {
  setPage,
  updateList,
  updateQuery,
} from "../../inventory/inventorySlice";
import { getDataState } from "../../DBDData/dbdDataSlice";

type Props = {
  current?: number;
};

const span = " col-span-2 row-span-2 sm:col-span-1 sm:row-span-1";

const positions = [
  "col-start-1 row-start-1" + span,
  "col-start-2 row-start-2" + span,
  "col-start-3 row-start-1" + span,
  "col-start-4 row-start-2" + span,
];

export const DisplayPerks = ({ current }: Props) => {
  const dispatch = useAppDispatch();
  const perkList = useAppSelector((state) => getDataState(state).allPerks);
  const perkNames = perkList.map((p) => p.name);
  const activePerks = useAppSelector(
    (state) => getLoadoutState(state).selectedPerks
  );

  const perkClickHandler = (index: number, perkName: string) => {
    const perkIndex = perkNames.findIndex((p) => p === perkName);
    const calcPage = Math.floor(perkIndex / 15) + 1;
    dispatch(updateList(perkNames));
    dispatch(setPage(calcPage));
    dispatch(updateQuery(""));
    dispatch(updateActive({ type: "perk", newI: index }));
  };
  const emptyPerkClickHandler = (index: number) => {
    if (current === undefined) {
      dispatch(setPage(1));
      dispatch(updateQuery(""));
    }
    dispatch(updateList(perkNames));
    dispatch(updateActive({ type: "perk", newI: index }));
  };
  return (
    <ul className="pb-2 grid gap-y-8 sm:gap-y-0 sm:grid-cols-4 sm:px-6 place-items-center">
      {activePerks.map((perkName, i) => {
        const poisiton = positions[i];
        const activeSelect = current === i;
        if (perkName) {
          return (
            <div key={i} className={poisiton}>
              <Perk
                onClick={perkClickHandler.bind(null, i, perkName)}
                key={i}
                selected={activeSelect}
                name={perkName!}
              />
            </div>
          );
        }
        return (
          <div key={i} className={poisiton}>
            <AddPerk
              selected={activeSelect}
              onAddPerkClick={emptyPerkClickHandler.bind(null, i)}
            />
          </div>
        );
      })}
    </ul>
  );
};
