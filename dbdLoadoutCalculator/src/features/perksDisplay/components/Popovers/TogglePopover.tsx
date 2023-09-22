import * as Switch from "@radix-ui/react-switch";

type Props = {
  changeValue: (n: number) => void;
  value: number;
  perk: string;
};

export const TogglePopover = ({ perk, changeValue, value }: Props) => {
  let val = 0.06;
  if (perk === "Resilience") val = 0.09;
  else if (perk === "Friendly Competition") val = 0.05;

  const switchHandler = (e: boolean) => {
    if (e) {
      changeValue(val);
    } else {
      changeValue(0);
    }
  };
  return (
    <form className="mt-4">
      <div className="flex items-center gap-6">
        <label className="" htmlFor="toggle-perk">
          {`Toggle Perk for ${val * 100}% Boost`}
        </label>
        <Switch.Root
          checked={value !== 0}
          onCheckedChange={switchHandler}
          id="perk-toggle"
          className="w-9 h-4 outline outline-offset-4 outline-2 outline-white rounded-full relative transition-colors duration-100 data-[state=checked]:bg-[#6e2493] cursor-default"
        >
          <Switch.Thumb className="block w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-5" />
        </Switch.Root>
      </div>
    </form>
  );
};
