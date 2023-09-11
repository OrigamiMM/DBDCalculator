import PerksInventory from "./PerksInventory/PerksInventory";
type Props = {
  invPosition: string;
  pagesPosition: string;
};

const InventoryDisplay = (props: Props) => {
  return (
    <>
      <PerksInventory className={props.invPosition} page={1}/>
      <h5 className={props.pagesPosition}> 1/5</h5>
    </>
  );
};

export default InventoryDisplay;
