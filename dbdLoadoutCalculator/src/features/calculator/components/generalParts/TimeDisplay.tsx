type Props = {
  max: number;
  calculated: number;
};

export const TimeDisplay = ({ max, calculated }: Props) => {
  const timeDifference = Math.round((max - calculated) * 100) / 100;
  const timeSaved = calculated !== max;
  return (
    <div className="flex flex-col text-center text-xl">
      <h5 className="text-zinc-400 font-medium">{`${max.toString()}s`}</h5>
      <h4
        className={`${timeSaved ? "text-gold" : ""} text-4xl font-bold`}
      >{`${calculated.toString()}s`}</h4>
      {timeSaved && (
        <h5 className=" text-gold font-bold">{`${timeDifference}s Saved`}</h5>
      )}
    </div>
  );
};
