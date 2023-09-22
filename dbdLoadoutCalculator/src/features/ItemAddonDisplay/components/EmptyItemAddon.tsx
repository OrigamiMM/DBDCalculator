import addSquare from "../../../assets/generalParts/EmptyPerkAddon.svg";
import hoverOverlay from "../../../assets/generalParts/squareHover.svg";
import selectedOverlay from "../../../assets/generalParts/squareSelected.svg";
type Props = {
  onClick: () => void;
  selected: boolean;
  type: "item" | "addon";
};

export const EmptyItemAddon = ({ selected, type, onClick }: Props) => {
  const overlay = selected ? (
    <img
      className="group-hover:scale-110 transition-all scale-100 duration-100 z-0"
      src={selectedOverlay}
      alt=""
    />
  ) : (
    <img
      className="group-hover:opacity-100 transition-opacity duration-100 opacity-0"
      src={hoverOverlay}
      alt=""
    />
  );
  return (
    <li
      onClick={onClick}
      className={`group ${
        type === "item" ? "" : 'px-2'
      } w-20 md:w-24 grid grid-rows-1 grid-cols-1 place-items-center [&>*]:col-span-full [&>*]:row-span-full`}
    >
      {overlay}
      <img className="z-10 w-11/12" src={addSquare} alt="" />
    </li>
  );
};
