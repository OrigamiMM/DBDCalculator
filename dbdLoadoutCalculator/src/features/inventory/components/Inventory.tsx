import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { DisplayCardBreak } from "../../../components/UI/DisplayCard";
import { InvButton } from "./InvButton";

import { InventorySelect } from "./InventorySelect";
import { setPage, incrementPage, updateQuery } from "../inventorySlice";

type Props = {
  current: "perk" | "item" | "addon";
};

export const Inventory = ({ current }: Props) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.inventory.currentPage);
  const query = useAppSelector((state) => state.inventory.query);
  const listNames = useAppSelector((state) => state.inventory.listNames);

  const setPageHangler = (val: number) => {
    dispatch(incrementPage(val));
  };
  const queryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPage(1));
    dispatch(updateQuery(event.target.value));
  };

  const cleanQuery = query.trim().toLowerCase();
  const filteredData = listNames.filter((p) =>
    p.toLowerCase().includes(cleanQuery)
  );
  const maxPage = Math.floor(filteredData.length / 15) + 1;
  return (
    <>
      <DisplayCardBreak />
      <article className="grid grid-cols-2 lg:grid-cols-[min-content_1fr_min-content] ">
        <div className="col-span-full flex justify-between flex-wrap">
          <section className="">
            <h3 className="text-gray-200 font-bold text-lg">INVENTORY</h3>
            <h4 className="text-gray-400 font-bold leading-3">PERKS</h4>
          </section>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchQuery">Search </label>
            <input
              value={query}
              onChange={queryHandler}
              className="bg-dark border-gray-800 border-2 w-fit"
              type="search"
              id="searchQuery"
            />
          </form>
        </div>
        <section className="sm:w-[32em] sm:h-64 md:w-[36em] md:h-80 grid place-items-center col-span-full lg:col-start-2 lg:col-span-1">
          <InventorySelect
            page={currentPage}
            type={current}
            data={filteredData}
          />
        </section>
        <InvButton
          disabled={currentPage === 1}
          onClick={() => setPageHangler(-1)}
          positionString="lg:row-start-2 lg:col-start-1"
        >
          &lt;
        </InvButton>
        <InvButton
          disabled={currentPage === maxPage}
          onClick={() => setPageHangler(1)}
          positionString="lg:row-start-2 lg:col-start-3"
        >
          &gt;
        </InvButton>
        <h5 className="col-span-full text-center">
          {currentPage}/{maxPage}
        </h5>
      </article>
    </>
  );
};
