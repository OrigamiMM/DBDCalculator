import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const DisplayCard = ({ title, children, className }: Props) => {
  return (
    <>
      <article
        className={`${className} bg-main px-8 pt-2 md:px-12 pb-6 rounded-3xl drop-shadow-lg`}
      >
        <h2 className="text-center text-3xl font-bold py-2">{title}</h2>
        {children}
      </article>
    </>
  );
};
