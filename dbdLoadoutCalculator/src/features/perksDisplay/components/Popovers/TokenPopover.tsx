import React from "react";

type Props = { changeValue: (n: number) => void; value: number; perk: string };

export const TokenPopover = ({ perk, changeValue, value }: Props) => {
  let maxTokens = 27;
  if (perk === "Potential Energy") maxTokens = 20;

  const inputHandler = (event: React.FormEvent<HTMLInputElement>) => {
    let token: number = +event.currentTarget.value;
    if (token < 0) token = 0;
    if (token > maxTokens) token = maxTokens;
    const overflowPercent = token * 0.01;
    const percentValue = Math.ceil(overflowPercent * 100) / 100;

    changeValue(percentValue);
  };

  return (
    <fieldset className="flex justify-between gap-4">
      <label htmlFor="set-token">Set Token Value</label>
      <input
        className="bg-dark border-gray-800 border-2 w-14"
        type="number"
        id="set-token"
        min={0}
        max={maxTokens}
        value={value*100}
        onChange={inputHandler}
      />
    </fieldset>
  );
};
