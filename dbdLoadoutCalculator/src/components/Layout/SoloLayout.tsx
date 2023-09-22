import { Header } from "../Header";
import { Loadout } from "../../features/loadout";
import { Calculator } from "../../features/calculator";
import { ButtonModal } from "../UI";

export const SoloLayout = () => {
  return (
    <>
      <Header />
      <main className="flex flex-wrap-reverse items-center justify-center gap-8 mt-8 px-4 sm:px-8">
        <Loadout />
        <Calculator />
      </main>
    </>
  );
};
