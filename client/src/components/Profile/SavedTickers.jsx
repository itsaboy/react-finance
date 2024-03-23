import { useContext, useEffect } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FolderOpenIcon, FolderMinusIcon } from "@heroicons/react/20/solid";
import Notification from "../Notification";
import { useTickerLookup } from "../../hooks/useTickerLookup";
import { useDeleteTicker } from "../../hooks/useDeleteTicker";
import spinner2 from "../../assets/spinner2.svg";

export default function SavedTickers({
  loadTicker,
  setLoadTicker,
  tickerID,
  setTickerID,
}) {
  const { watchlist, setWatchlist } = useContext(FinanceContext);
  const { user } = useAuthContext();

  const {
    tickerLookup,
    tickerLookupSuccess,
    tickerLookupError,
    tickerLookupLoading,
  } = useTickerLookup();

  const { deleteTicker, deleteSuccess, deleteError, deleteLoading } =
    useDeleteTicker();

  useEffect(() => {
    const getWatchlist = async () => {
      const req = "/api/watchlist";
      const res = await fetch(req, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
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

    if (user) {
      getWatchlist();
    }
  }, [user]);

  const handleChange = (e) => {
    const ticker = e.target.value;
    const id = e.target.options[e.target.selectedIndex].dataset.id;
    setLoadTicker(ticker);
    setTickerID(id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await tickerLookup(loadTicker);
  };

  const handleDelete = async (id) => {
    await deleteTicker(id);
    const getWatchlist = async () => {
      const req = "/api/watchlist";
      const res = await fetch(req, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
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
    if (user) {
      getWatchlist();
    }
  };

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-lg shadow-gray-800/40 grid-rows-1">
      <h2 className="px-4 py-5 sm:px-6 bg-gray-100 border-b-2 border-gray-300">Saved tickers</h2>
      {watchlist.length > 0 ? (
        <div className="px-4 py-5 sm:p-6">
          <form
            className="grid grid-cols-1 grid-rows-3"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="ticker"
              className="hidden text-sm font-medium leading-6 text-gray-900"
            >
              Ticker Symbol
            </label>
            <select
              id={tickerID}
              name="location"
              className="px-2 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
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
                type="submit"
                className="inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer place-self-start"
              >
                Load
                {tickerLookupLoading ? (
                  <img
                    src={spinner2}
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                ) : (
                  <FolderOpenIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-lg bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800 hover:cursor-pointer place-self-start"
                onClick={() => handleDelete(tickerID)}
              >
                Delete
                {deleteLoading ? (
                  <img
                    src={spinner2}
                    className="-mr-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                ) : (
                  <FolderMinusIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="px-4 py-5 sm:p-6 bg-gray-200">
          <div className="grid grid-cols-1 grid-rows-5 place-items-center">
            <h4 className="w-full h-full flex justify-center items-center m-0">
              No saved tickers
            </h4>
          </div>
        </div>
      )}
      {tickerLookupSuccess && (
        <Notification text={tickerLookupSuccess} color={"green"} />
      )}
      {tickerLookupError && (
        <Notification text={tickerLookupError} color={"red"} />
      )}
      {deleteSuccess && <Notification text={deleteSuccess} color={"green"} />}
      {deleteError && <Notification text={deleteError} color={"red"} />}
    </div>
  );
}
