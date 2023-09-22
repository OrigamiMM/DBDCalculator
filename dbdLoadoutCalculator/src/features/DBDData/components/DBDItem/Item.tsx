import { useAppSelector } from "../../../../app/hooks";
import { selectItemByName } from "../../dbdDataSlice";
import squareSelect from "../../../../assets/generalParts/squareSelected.svg";
import squareHover from "../../../../assets/generalParts/squareHover.svg";
import { CloudImage } from "../../../../components/CloudImage";
import { Description } from "../Description";

type Props = {
  onClick: () => void;
  name: string;
  selected: boolean;
  descriptionPosition: string;
};

export const Item = ({
  onClick,
  name,
  selected,
  descriptionPosition,
}: Props) => {
  const item = useAppSelector((state) => selectItemByName(state, name))!;
  const overlay = selected ? (
    <img
      loading="lazy"
      className=" group-hover:scale-110 transition-all scale-100 duration-100 z-0"
      src={squareSelect}
      alt=""
    />
  ) : (
    <img
      loading="lazy"
      className=" group-hover:opacity-100 transition-opacity duration-100 opacity-0"
      src={squareHover}
      alt=""
    />
  );

  const itemNameId = item.imgUrl.split(".")[0];
  const itemId = `itemImages/${itemNameId}`;

  return (
    <li
      onClick={onClick}
      className="group w-20 h-20 md:w-24 md:h-24 grid grid-rows-1 grid-cols-1 place-items-center [&>*]:col-span-full [&>*]:row-span-full"
    >
      {overlay}
      {/* <img loading="lazy" className="z-10 w-11/12" src={itemImg} alt="" /> */}
      <div className="peer z-10 w-11/12">
        <CloudImage cloudImgID={itemId} />
      </div>
      <Description
        name={item.name}
        text={item.description}
        position={descriptionPosition}
      />
    </li>
  );
};
