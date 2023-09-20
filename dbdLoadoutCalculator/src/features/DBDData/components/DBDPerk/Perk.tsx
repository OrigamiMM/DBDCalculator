import { useAppSelector } from "../../../../app/hooks";
import { selectPerkByName } from "../../dbdDataSlice";

import purpleBack from "../../../../assets/generalParts/PurpleBackgroundProper.svg";
import perkHover from "../../../../assets/generalParts/perkHover.svg";
import perkSelect from "../../../../assets/generalParts/perkSelected.svg";

import { CloudImage } from "../../../../components/CloudImage";

type Props = {
  onClick: () => void;
  name: string;
  gridPosition?: string;
  selected: boolean;
};

export const Perk = ({ onClick, gridPosition, name, selected }: Props) => {
  const overlay = selected ? (
    <img
      loading="lazy"
      className="z-0 peer-hover:scale-110 transition-all scale-100 duration-200 ease-in-out"
      src={perkSelect}
      alt=""
    />
  ) : (
    <img
      loading="lazy"
      className="z-0 peer-hover:opacity-100 transition-opacity opacity-0 duration-200"
      src={perkHover}
      alt=""
    />
  );
  const perk = useAppSelector((state) => selectPerkByName(state, name))!;
  const cloutName = perk.imgUrl.split('.')[0];
  const perkImgID = `perkImages/${cloutName}`;
  return (
    <li
      className={`${gridPosition} relative w-20 md:w-24 grid grid-rows-1 grid-cols-1 place-items-center [&>*]:col-span-full [&>*]:row-span-full`}
    >
      <div
        onClick={onClick}
        className="peer w-12 h-12 md:w-16 md:h-16 rotate-45 z-20"
      ></div>
      {overlay}
      <img loading="lazy" className="w-11/12 z-10" src={purpleBack} alt="" />
      <div className="w-11/12 z-10">
        <CloudImage cloudImgID={perkImgID}/>
      </div>
    </li>
  );
};
