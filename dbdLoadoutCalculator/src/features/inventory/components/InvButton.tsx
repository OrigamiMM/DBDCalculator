import React from "react";

type Props = {
  positionString: string;
} & React.ComponentPropsWithoutRef<"button">;

export const InvButton = ({
  positionString,
  onClick,
  disabled,
  children,
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${positionString} w-10 bg-dark self-center justify-self-center`}
    >
      {children}
    </button>
  );
};
