import * as Popover from "@radix-ui/react-popover";
import { useState, useEffect } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { setModifier } from "../../loadout";
import { SelectPopover, TogglePopover, TokenPopover } from "./Popovers";

type Props = {
  index: number;
  perk: string;
};

const togglePerks = [
  "Deja Vu",
  "Friendly Competition",
  "Object of Obsession",
  "Resilience",
  "Spine Chill",
  'Sole Survivor'
];

const tokenPerks = ["Fast Track", "Potential Energy"];

const selectPerk = "Overzealous";

export const PerkPopover = ({ index, perk }: Props) => {
  const [effectValue, setEffectValue] = useState(0);
  let buttonVal = `+${effectValue * 100}%`;
  let type = ["repair"];
  if (perk === "Fast Track") {
    type = ["progression-bonus"];
    buttonVal = `p+${effectValue * 100}%`;
  } else if (perk === "Potential Energy") {
    type = ["repair-progression"];
    buttonVal = `p+${effectValue * 100}%`;
  }

  useEffect(() => {
    setEffectValue(0);
  }, [perk]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setModifier({
        index,
        modifier: { type, value: effectValue },
      })
    );
  }, [effectValue]);

  const updateValHandler = (n: number) => {
    setEffectValue(n);
  };

  let content;
  if (perk === selectPerk) {
    content = (
      <SelectPopover changeValue={updateValHandler} value={effectValue} />
    );
  } else if (tokenPerks.includes(perk)) {
    content = (
      <TokenPopover
        changeValue={updateValHandler}
        perk={perk}
        value={effectValue}
      />
    );
  } else if (togglePerks.includes(perk)) {
    content = (
      <TogglePopover
        changeValue={updateValHandler}
        perk={perk}
        value={effectValue}
      />
    );
  }
  return (
    <div className="z-20 absolute mr-12 mt-14 md:ml-14 md:mr-0 ">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="bg-[#6e2493] text-xs text-white w-9 h-9 drop-shadow-md border-dark outline-1 outline-white hover:outline border-4 rounded-full font-bold hover:scale-110 transition-all duration-150 ease-in-out">
            {buttonVal}
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className=" z-30 rounded-lg p-4 bg-[#1c1f21] border-gray-800 border-4 duration-100">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between gap-7">
                <h2 className="text-xl font-medium">Select Active Effect</h2>
                <Popover.Close
                  className=" top-3 right-3 hover:bg-[#101000] px-2"
                  aria-label="Close"
                >
                  X
                </Popover.Close>
              </div>
            </div>
            {content}
            <Popover.Arrow className="fill-gray-800" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};
