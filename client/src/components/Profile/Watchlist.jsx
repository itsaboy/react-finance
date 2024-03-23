import { useState, useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import TickerSearch from "./TickerSearch";
import SavedTickers from "./SavedTickers";
import SearchResult from "./SearchResult";
import { useTickerLookup } from "../../hooks/useTickerLookup";

export default function Watchlist() {
  const [loadTicker, setLoadTicker] = useState("none");
  const [tickerID, setTickerID] = useState("none");
  const { activeTicker } = useContext(FinanceContext);

  const {
    tickerLookup,
    tickerLookupSuccess,
    setTickerLookupSuccess,
    tickerLookupError,
    setTickerLookupError,
    tickerLookupLoading,
    setTickerLookupLoading,
  } = useTickerLookup();

  return (
    <div className="lg:mt-24 p-12 mx-auto grid grid-cols-1 grid-rows-6 lg:grid-cols-2 lg:grid-rows-2 gap-12 max-w-6xl">
      <TickerSearch />
      <SavedTickers
        loadTicker={loadTicker}
        setLoadTicker={setLoadTicker}
        tickerID={tickerID}
        setTickerID={setTickerID}
      />
      {activeTicker !== "None" && (
        <SearchResult
          loadTicker={loadTicker}
          setLoadTicker={setLoadTicker}
          tickerID={tickerID}
          setTickerID={setTickerID}
        />
      )}
    </div>
  );
}
