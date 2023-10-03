type Props = {
  name: string;
  text: string;
  position: string;
  source?: string;
};

export const Description = ({ name, text, position, source }: Props) => {
  let sourceText = "";
  if (source !== undefined) {
    sourceText = `VERY RARE ${
      source !== "Any" ? source.toUpperCase() : ""
    } PERK`;
  }
  return (
    <section
      className={`z-50 absolute peer-hover:scale-100 bg-black/90 border-l-[10px] border-l-rare w-[40ch] md:w-[50ch] px-6 py-4 ${position} transition-all scale-0`}
    >
      <header className="pb-2">
        <h3 className="text-3xl font-bold">{name}</h3>
        {source && (
          <h4 className="text-sm font-bold text-gray-400">{sourceText}</h4>
        )}
      </header>
      <div
        className=" [&_.luaClr.clr.clr9]:text-sm [&_.luaClr.clr.clr9]:tracking-tighter [&>br]:mb-5 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:my-2 [&>ul>li]:my-1 [&>p]:my-3"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </section>
  );
};
