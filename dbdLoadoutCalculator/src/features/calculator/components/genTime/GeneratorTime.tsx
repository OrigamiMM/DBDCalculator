import { useState } from "react";
import { TimeDisplay } from "../generalParts";
import { calcGenTime, calcTeamGenTime } from "./calcGenTime";
import { NumberInput } from "./NumberInput";

type Props = {
  perkStats: {
    repairBonusSpeed: number;
    fastTrackBonus: number;
    genBonus: number;
    hasProve: boolean;
    soleActive: boolean;
  };
  toolBoxStats: { charges: number; speed: number; hasBNP: boolean };
};

export const GeneratorTime = ({ perkStats, toolBoxStats }: Props) => {
  const [numGreatSkill, setNumGreatSkil] = useState(0);
  const [numTeammates, setTeammates] = useState(0);
  const soloTime = calcGenTime(perkStats, toolBoxStats, numGreatSkill);
  const teamTime = calcTeamGenTime(perkStats, toolBoxStats, numTeammates);

  if (perkStats.soleActive && numTeammates !== 0) {
    setTeammates(0);
  }

  return (
    <div>
      <hr className="m-auto h-1 bg-dark border-0 mt-3 mb-3" />
      <section>
        <div>
          <h3 className="text-center font-bold text-2xl mb-3">Solo</h3>
          <TimeDisplay max={90} calculated={soloTime} />
          <NumberInput
            title="Great Skill Checks"
            min={0}
            max={20}
            val={numGreatSkill}
            changeValue={setNumGreatSkil}
          />
        </div>
      </section>
      <hr className="m-auto h-1 bg-dark border-0 mt-3 mb-3" />
      <section>
        <div className="text-center">
          {perkStats.soleActive && (
            <p className="font-semibold text-red-500">Sole Survivor Active</p>
          )}
          <h3 className="font-bold text-2xl mb-3">Base Kit Surviors</h3>
          <TimeDisplay max={90} calculated={teamTime} />
        </div>
        <div
          className={
            perkStats.soleActive ? "opacity-50 pointer-events-none" : ""
          }
        >
          <NumberInput
            title="Other Survivors"
            min={0}
            max={3}
            val={numTeammates}
            changeValue={setTeammates}
          />
        </div>
      </section>
    </div>
  );
};
