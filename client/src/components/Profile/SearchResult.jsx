import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import { useSaveTicker } from "../../hooks/useSaveTicker";

export default function SearchResult({
  setLoadTicker,
  setTickerID,
}) {
  const { activeTicker, setWatchlist } = useContext(FinanceContext);
  const { saveTicker } = useSaveTicker();

  const handleSave = async (ticker) => {
    await saveTicker(ticker);
    const getWatchlist = async () => {
      const req = "/api/watchlist";
      const res = await fetch(req);
      const data = await res.json();

      if (!res.ok) {
        console.log(data.error);
      } else {
        setWatchlist(data);
        if (data.length > 0) {
          setLoadTicker(data[0].ticker);
          setTickerID(data[0]._id);
        }
      }
    };
    getWatchlist();
  };

  return (
    <div className="lg:col-span-2 row-span-2 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow">
      <div className="px-4 py-5 sm:px-6 bg-gray-100">
        <div className="flex flex-row justify-between items-center">
          <h3>{activeTicker.symbol}</h3>
          <button
            className="inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer"
            onClick={() => handleSave(activeTicker.symbol)}
          >
            Save
            <DocumentArrowDownIcon
              className="-mr-0.5 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6 grid grid-cols-2 grid-rows-4 place-items-center h-3/4">
        <h3 className="font-semibold">Price</h3>
        <h3 className="font-semibold">Volume</h3>
        <p>{activeTicker.price}</p>
        <p>{activeTicker.volume}</p>
      </div>
    </div>
  );
}
