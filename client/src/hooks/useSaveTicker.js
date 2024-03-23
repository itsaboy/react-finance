import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export const useSaveTicker = () => {
  const [saveTickerSuccess, setSaveTickerSuccess] = useState(null);
  const [saveTickerError, setSaveTickerError] = useState(null);
  const [saveTickerLoading, setSaveTickerLoading] = useState(false);

  const { setWatchlist } = useContext(FinanceContext);

  const saveTicker = async (ticker) => {
    setSaveTickerLoading(true);
    setSaveTickerSuccess(null);
    setSaveTickerError(null);

    const req = "/api/watchlist";
    const res = await fetch(req, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticker }),
      });
    const data = await res.json();

    if (!res.ok) {
      setSaveTickerLoading(false);
      setSaveTickerSuccess(null);
      setSaveTickerError(data.error);
    } else {
      setSaveTickerLoading(false);
      setSaveTickerSuccess("Ticker added to watchlist");
      setSaveTickerError(null);
      setWatchlist(data);
    }
  };

  return {
    saveTicker,
    saveTickerSuccess,
    setSaveTickerSuccess,
    saveTickerError,
    setSaveTickerError,
    saveTickerLoading,
    setSaveTickerLoading,
  };
};