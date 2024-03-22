import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useTickerLookup } from "../../hooks/useTickerLookup";

export default function TickerSearch() {
  const [newTicker, setNewTicker] = useState("");

  const {
    tickerLookup,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  } = useTickerLookup();

  const handleSubmit = async (ticker) => {
    await tickerLookup(ticker);
  };

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-100 shadow">
      <h2 className="px-4 py-5 sm:px-6">Ticker search</h2>
      <div className="px-4 py-5 sm:p-6 bg-gray-200">
        <div className="grid grid-cols-1 grid-rows-3">
          <label
            htmlFor="ticker"
            className="hidden text-sm font-medium leading-6 text-gray-900"
          >
            Ticker Symbol
          </label>
          <input
            type="text"
            name="ticker"
            id="ticker"
            className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setNewTicker(e.target.value)}
            value={newTicker}
            placeholder="stock, etf, crypto"
          />
          <br />
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer place-self-start"
            onClick={() => handleSubmit(newTicker)}
          >
            Search
            <MagnifyingGlassIcon
              className="-mr-0.5 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
