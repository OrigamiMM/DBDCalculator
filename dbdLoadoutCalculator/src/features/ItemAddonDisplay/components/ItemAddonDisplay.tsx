import { useAppSelector } from "../../../app/hooks";
import { DisplayCardSection } from "../../../components/UI/DisplayCard";
import { ItemDisplay } from "./ItemDisplay";
import { AddonDisplay } from "./AddonDisplay";
type Props = {};

export const ItemAddonDisplay = (props: Props) => {
  const currentInv = useAppSelector((state) => state.loadout.currentActive);
  const currentIndex = useAppSelector((state) => state.loadout.currentIndex);

  let passedIndex;
  if (currentInv === "addon") passedIndex = currentIndex;
  return (
    <DisplayCardSection title="ITEM and ADDON">
      <div className="grid grid-rows-1 grid-flow-col items-center w-fit m-auto [&>*]:col-span-full [&>*]:row-span-full py-2 md:py-4">
        <hr className="border-0 bg-dark h-1 md:h-2 w-10/12 mx-auto" />
        <section className="flex justify-center items-center gap-4">
          <ItemDisplay active={currentInv === "item"} />
          <AddonDisplay activeIndex={passedIndex} />
        </section>
      </div>
    </DisplayCardSection>
  );
};
