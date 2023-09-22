import selectedOverlay from "../../../assets/generalParts/perkSelected.svg";
import hoverOverlay from "../../../assets/generalParts/perkHover.svg";
import addImage from "../../../assets/generalParts/AddPerk.svg";

type Props = {
  selected: boolean;
  onAddPerkClick: () => void;
};

export const AddPerk = ({ onAddPerkClick, selected }: Props) => {
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
    <div
      onClick={onAddPerkClick}
      className={`group grid grid-rows-1 grid-cols-1 place-items-center w-20 md:w-24 [&>*]:col-span-full [&>*]:row-span-full`}
    >
      {overlay}
      <img className="z-10 w-11/12" src={addImage} alt="" />
    </div>
  );
};
