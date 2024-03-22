import { useContext, useEffect } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { FolderOpenIcon, FolderMinusIcon } from "@heroicons/react/20/solid";
import { useTickerLookup } from "../../hooks/useTickerLookup";
import { useDeleteTicker } from "../../hooks/useDeleteTicker";

export default function SavedTickers({ loadTicker, setLoadTicker, tickerID, setTickerID }) {
  const { watchlist, setWatchlist } = useContext(FinanceContext);
  const {
    tickerLookup,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  } = useTickerLookup();

  const { deleteTicker } = useDeleteTicker();

  useEffect(() => {
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
  }, []);

  const handleChange = (e) => {
    const ticker = e.target.value;
    const id = e.target.options[e.target.selectedIndex].dataset.id;
    setLoadTicker(ticker);
    setTickerID(id);
  };

  const handleSubmit = async (ticker) => {
    await tickerLookup(ticker);
  };

  const handleDelete = async (id) => {
    await deleteTicker(id);
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
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-100 shadow">
      <h2 className="px-4 py-5 sm:px-6">Saved tickers</h2>
      {watchlist.length > 0 ? (
        <div className="px-4 py-5 sm:p-6 bg-gray-200">
          <div className="grid grid-cols-1 grid-rows-3">
            <label
              htmlFor="ticker"
              className="hidden text-sm font-medium leading-6 text-gray-900"
            >
              Ticker Symbol
            </label>
            <select
              id={tickerID}
              name="location"
              className="px-2 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleChange}
              value={loadTicker}
            >
              {watchlist.length > 0 &&
                watchlist.map((ticker) => (
                  <option
                    key={ticker._id}
                    value={ticker.ticker}
                    data-id={ticker._id}
                  >
                    {ticker.ticker}
                  </option>
                ))}
            </select>
            <br />
            <div className="flex flex-row justify-between">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer place-self-start"
                onClick={() => handleSubmit(loadTicker)}
              >
                Load
                <FolderOpenIcon
                  className="-mr-0.5 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-lg bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 hover:cursor-pointer place-self-start"
                onClick={() => handleDelete(tickerID)}
              >
                Delete
                <FolderMinusIcon
                  className="-mr-0.5 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 grid-rows-1 place-items-center h-2/3">
          <h3>No saved tickers</h3>
        </div>
      )}
    </div>
  );
}
