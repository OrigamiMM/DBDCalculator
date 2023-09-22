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
import { PerkPopover } from "./PerkPopover";

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
const descriptionPositions = [
  "ml-20 translate-x-1/2 translate-y-[min(20%,calc(27em-50%))]",
  "ml-20 translate-x-1/2 translate-y-[min(20%,calc(27em-50%))]",
  "mr-20 -translate-x-1/2 translate-y-[min(20%,calc(27em-50%))]",
  "mr-20 -translate-x-1/2 translate-y-[min(20%,calc(27em-50%))]",
];

const popoverPerks = [
  "Deja Vu",
  "Friendly Competition",
  "Object of Obsession",
  "Resilience",
  "Spine Chill",
  "Overzealous",
  "Potential Energy",
  "Fast Track",
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
            <li
              key={i * 1000}
              className={`relative ${poisiton} grid grid-rows-1 grid-cols-1 place-items-center [&>*]:col-span-full [&>*]:row-span-full`}
            >
              <Perk
                descriptionPosition={descriptionPositions[i]}
                onClick={perkClickHandler.bind(null, i, perkName)}
                selected={activeSelect}
                name={perkName!}
              />
              {popoverPerks.includes(perkName) && (
                <PerkPopover index={i} perk={perkName} />
              )}
              {perkName === "Prove Thyself" && (
                <div className="z-10 absolute mr-12 mt-14 md:ml-14 md:mr-0 bg-[#6e2493] text-xs text-white w-9 h-9 drop-shadow-md border-dark outline-1  border-4 rounded-full font-bold hover:scale-110 transition-all duration-150 ease-in-out">
                  <p className="text-2xl text-center">✓</p>
                </div>
              )}
            </li>
          );
        }
        return (
          <li key={i} className={poisiton}>
            <AddPerk
              selected={activeSelect}
              onAddPerkClick={emptyPerkClickHandler.bind(null, i)}
            />
          </li>
        );
      })}
    </ul>
  );
};
