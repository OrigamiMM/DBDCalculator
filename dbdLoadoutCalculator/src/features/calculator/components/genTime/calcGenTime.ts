const calcObjTime = (objCharges: number, speed: (c: number) => number) => {
  let seconds = 0;
  for (let c = 1; c < Math.floor(objCharges) + 1; c++) {
    seconds += 1 / speed(c);
  }
  if (objCharges % 1 > 0) {
    seconds += (objCharges % 1) / speed(Math.ceil(objCharges));
  }
  seconds = Math.floor(seconds * 100) / 100;
  return seconds;
};

export const calcTeamGenTime = (
  perkInstance: {
    repairBonusSpeed: number;
    fastTrackBonus: number;
    genBonus?: number;
    hasProve: boolean;
  },
  itemInstance: {
    speed: number;
    charges: number;
    hasBNP: boolean;
  },
  numTeammates: number
) => {
  let fastBonus = 0;
  if (perkInstance.fastTrackBonus > 0)
    fastBonus = perkInstance.fastTrackBonus + 0.01;

  const genCharges = itemInstance.hasBNP ? 80 : 90;

  const progressionBonus =
    genCharges * fastBonus + genCharges * (perkInstance.genBonus || 0);
  const repairPen = numTeammates * 0.15;
  const proveBonus = perkInstance.hasProve ? 0.1 * numTeammates : 0;
  const playerBase =
    (1 + perkInstance.repairBonusSpeed + proveBonus) * (1 - repairPen);
  // const otherPlayerSpeed = (numTeammates * (1 - repairPen)) * (1 + proveBonus);
  const otherPlayerSpeed = (1 + proveBonus) * (1 - repairPen) * numTeammates;
  const speed = (c: number) => {
    if (c <= itemInstance.charges) {
      return playerBase + itemInstance.speed + otherPlayerSpeed;
    }
    return playerBase + otherPlayerSpeed;
  };
  const time = calcObjTime(genCharges - progressionBonus, speed);
  return Math.floor(time * 100) / 100;
};

export const calcGenTime = (
  perkInstance: {
    repairBonusSpeed: number;
    fastTrackBonus?: number;
    genBonus?: number;
  },
  itemInstance: {
    speed: number;
    charges: number;
    hasBNP: boolean;
  },
  skillChecks: number
) => {
  const genCharges = itemInstance.hasBNP ? 80 : 90;
  const progressionBonus =
    genCharges * 0.01 * skillChecks +
    (skillChecks > 0 ? genCharges * (perkInstance.fastTrackBonus || 0) : 0) +
    genCharges * (perkInstance.genBonus || 0);
  const baseSpeed = 1 + perkInstance.repairBonusSpeed;
  const speed = (c: number) => {
    if (c <= itemInstance.charges) {
      return baseSpeed + itemInstance.speed;
    }
    return baseSpeed;
  };

  const time = calcObjTime(genCharges - progressionBonus, speed);
  return Math.floor(time * 100) / 100;
};
