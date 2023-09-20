import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const DisplayCard = ({ title, children }: Props) => {
  return (
    <>
      <article className="bg-main px-8 pt-2 pb-6 rounded-3xl w-fit">
        <h2 className="text-center text-3xl font-bold py-2">{title}</h2>
        {children}
      </article>
    </>
  );
};
