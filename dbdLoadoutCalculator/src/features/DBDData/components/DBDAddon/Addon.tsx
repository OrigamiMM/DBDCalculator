import { useAppSelector } from "../../../../app/hooks";
import { selectAddonByName } from "../../dbdDataSlice";
import squareHover from "../../../../assets/generalParts/squareHover.svg";
import squareSelect from "../../../../assets/generalParts/squareSelected.svg";
import { CloudImage } from "../../../../components/CloudImage";
import { Description } from "../Description";

type Props = {
  onClick: () => void;
  name: string;
  active?: boolean;
  selected: boolean;
  descritpionPosition: string;
};

export const Addon = ({
  name,
  active,
  selected,
  onClick,
  descritpionPosition,
}: Props) => {
  const addon = useAppSelector((state) => selectAddonByName(state, name))!;
  const overlay = selected ? (
    <img
      loading="lazy"
      className=" z-0 w-5/6 peer-hover:scale-110 transition-all scale-100 duration-100"
      src={squareSelect}
      alt=""
    />
  ) : (
    <img
      loading="lazy"
      className=" z-0 w-5/6  peer-hover:opacity-100 transition-opacity duration-100 opacity-0"
      src={squareHover}
      alt=""
    />
  );
  const addonImgName = addon.imgUrl.split(".")[0];
  const addonImg = `addonImages/${addonImgName}`;

  return (
    <li className="relative w-20 h-20 md:w-24 md:h-24 grid grid-rows-1 grid-cols-1 place-items-center [&>*]:col-span-full [&>*]:row-span-full">
      {active ? (
        <div onClick={onClick} className="peer w-[95%] z-10">
          <CloudImage cloudImgID={addonImg} />
        </div>
      ) : (
        <div className="opacity-50 w-[95%] z-10">
          <CloudImage cloudImgID={addonImg} />
        </div>
      )}
      {overlay}
      <Description
        name={addon.name}
        text={addon.description}
        position={descritpionPosition}
      />
    </li>
  );
};
