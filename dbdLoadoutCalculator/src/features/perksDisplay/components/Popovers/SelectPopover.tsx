type Props = {
  value: number;
  changeValue: (n: number) => void;
};

export const SelectPopover = ({ value, changeValue }: Props) => {
  const onOptionChange = (event: any) => {
    changeValue(+event.target.value);
  };
  return (
    <fieldset>
      <div className=" flex flex-col">
        <div className="flex gap-4">
          <input
            type="radio"
            name="perkEffect"
            id="none"
            value={0}
            checked={value === 0}
            onChange={onOptionChange}
          />
          <label htmlFor="none">Not Active</label>
        </div>
        <div className="flex gap-4">
          <input
            type="radio"
            name="perkEffect"
            id="ten"
            value={0.1}
            checked={value === 0.1}
            onChange={onOptionChange}
          />
          <label htmlFor="ten">10%</label>
        </div>
        <div className="flex gap-4">
          <input
            type="radio"
            name="perkEffect"
            id="twenty"
            value={0.2}
            checked={value === 0.2}
            onChange={onOptionChange}
          />
          <label htmlFor="twenty">20%</label>
        </div>
      </div>
    </fieldset>
  );
};
