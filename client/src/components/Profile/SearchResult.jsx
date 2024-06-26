import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { DocumentArrowDownIcon } from "@heroicons/react/20/solid";
import { useSaveTicker } from "../../hooks/useSaveTicker";
import Notification from "../Notification";
import ResultGridItem from "./ResultGridItem";
import spinner2 from "../../assets/spinner2.svg";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);

export default function SearchResult({ setLoadTicker, setTickerID }) {
  const { activeTicker, watchlist, setWatchlist } = useContext(FinanceContext);
  const { user } = useAuthContext();

  const {
    saveTicker,
    saveTickerSuccess,
    saveTickerError,
    setSaveTickerError,
    saveTickerLoading,
  } = useSaveTicker();

  const handleSave = async (ticker) => {
    console.log(watchlist);
    console.log(ticker);
    if (watchlist.some((obj) => obj.ticker === ticker)) {
      setSaveTickerError("This ticker is already in your watchlist");
      return;
    } else {
      await saveTicker(ticker);
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
    }
  };

  return (
    <div className="lg:col-span-2 row-span-4 sm:row-span-2 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow-lg shadow-gray-800/40">
      <div className="px-4 py-5 sm:px-6 bg-gray-100 border-b-2 border-gray-300">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3 className="font-bold text-gray-900">{activeTicker.name}</h3>
          <h4>
            {dayjs
              .utc(activeTicker.timestamp * 1000)
              .tz("America/New_York")
              .format("MM-DD-YYYY hh:mm a")}
          </h4>
          <button
            className="inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer"
            onClick={() => handleSave(activeTicker.symbol)}
          >
            Save
            {saveTickerLoading ? (
              <img
                src={spinner2}
                className="-mr-0.5 h-5 w-5"
                aria-hidden="true"
              />
            ) : (
              <DocumentArrowDownIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <div className="px-4 py-5 sm:p-6 grid grid-cols-1 sm:grid-cols-4 place-items-center text-center grid-rows-12 sm:grid-rows-3 gap-8">
        <ResultGridItem title={"Price"} data={activeTicker.price} />
        <ResultGridItem title={"Change"} data={activeTicker.change} />
        <ResultGridItem
          title={"% Change"}
          data={activeTicker.changesPercentage.toFixed(2)}
        />
        <ResultGridItem title={"Volume"} data={activeTicker.volume} />
        <ResultGridItem title={"Open"} data={activeTicker.open} />
        <ResultGridItem
          title={"Prev Close"}
          data={activeTicker.previousClose}
        />
        <ResultGridItem title={"LOD"} data={activeTicker.dayLow} />
        <ResultGridItem title={"HOD"} data={activeTicker.dayHigh} />
        <ResultGridItem
          title={"50DMA"}
          data={activeTicker.priceAvg50.toFixed(2)}
        />
        <ResultGridItem
          title={"200DMA"}
          data={activeTicker.priceAvg200.toFixed(2)}
        />
        <ResultGridItem title={"LOY"} data={activeTicker.yearLow} />
        <ResultGridItem title={"HOY"} data={activeTicker.yearHigh} />
      </div>
      {saveTickerSuccess && (
        <Notification text={saveTickerSuccess} color={"green"} />
      )}
      {saveTickerError && <Notification text={saveTickerError} color={"red"} />}
    </div>
  );
}
