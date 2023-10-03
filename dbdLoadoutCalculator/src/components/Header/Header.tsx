import { useState } from "react";
import { ModalManager } from "./ModalManager";

export const Header = () => {
  const [ModalInfo, setModalInfo] = useState<"none" | "help" | "info">("help");
  const buttonHandler = (type: "help" | "info") => {
    setModalInfo(type)
  };
  const resetModal = () => {
    setModalInfo('none')
  }
  return (
    <>
      {ModalInfo !== "none" && <ModalManager onConfirm={resetModal} type={ModalInfo}/>}
      <header className="bg-main flex flex-col justify-between items-center pt-4 pb-2 md:pb-4 md:flex-row md:pl-6 md:pr-6">
        <h1 className="text-4xl font-bold  lg:text-5xl text-center md:text-left">
          DBD Loadout Calculator
        </h1>
        <div className="flex gap-6 mt-2 md:mr-12 md:mt-0">
          <button onClick={buttonHandler.bind(null, 'help')} className="bg-dark hover:bg-black font-bold py-2 px-4 rounded-full">
            Help
          </button>
          <button onClick={buttonHandler.bind(null, 'info')} className="bg-dark hover:bg-black font-bold py-2 px-4 rounded-full">
            Info
          </button>
        </div>
      </header>
    </>
  );
};
