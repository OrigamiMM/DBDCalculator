import React from "react";
import { DisplayCardBreak } from "./DisplayCardBreak";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const DisplayCardSection = ({ title, children }: Props) => {
  return (
    <>
      <DisplayCardBreak />
      <article>
        <h3 className="text-gray-200 font-bold text-lg">{title}</h3>
        {children}
      </article>
    </>
  );
};
