import React from "react";

type Props = {
  title: string;
  min: number;
  max: number;
  val: number;
  changeValue: React.Dispatch<React.SetStateAction<number>>;
};

export const NumberInput = ({ title, min, max, val, changeValue }: Props) => {
  return (
    <div className="custom-number-input w-32 mt-3 m-auto">
      <label
        htmlFor="custom-input-number"
        className="w-full text-sm font-semibold"
      >
        {title}
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          disabled={val === min}
          onClick={() => changeValue((prev) => (prev -= 1))}
          className=" bg-dark hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none disabled:opacity-70 disabled:hover:bg-dark disabled:hover:text-white disabled:cursor-auto"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          className="focus:outline-none text-center w-full bg-dark font-semibold text-md hover:text-zinc-200 focus:text-zinc-200  md:text-basecursor-default flex items-center  outline-none"
          name="custom-input-number"
          min={min}
          max={max}
          onChange={(e) => {
            const val = +e.target.value > 20 ? 20 : +e.target.value;
            changeValue(val);
          }}
          value={val}
        ></input>
        <button
          disabled={val === max}
          onClick={() => changeValue((prev) => (prev += 1))}
          className="bg-dark hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer outline-none disabled:opacity-70 disabled:hover:bg-dark disabled:hover:text-white disabled:cursor-auto"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};
