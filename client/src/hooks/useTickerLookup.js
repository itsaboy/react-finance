import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export const useTickerLookup = () => {
  const [tickerLookupSuccess, setTickerLookupSuccess] = useState(null);
  const [tickerLookupError, setTickerLookupError] = useState(null);
  const [tickerLookupLoading, setTickerLookupLoading] = useState(false);

  const { setActiveTicker } = useContext(FinanceContext);

  const tickerLookup = async (ticker) => {
    setTickerLookupLoading(true);
    setTickerLookupSuccess(null);
    setTickerLookupError(null);

    const req = "/api/getData";
    const res = await fetch(req, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ticker }),
    });
    const data = await res.json();

    if (!res.ok) {
      setTickerLookupLoading(false);
      setTickerLookupSuccess(null);
      setTickerLookupError(data.error);
    } else {
      setTickerLookupLoading(false);
      setTickerLookupSuccess("Search was successful!");
      setTickerLookupError(null);
      setActiveTicker(data[0]);
    }
  };

  return {
    tickerLookup,
    tickerLookupSuccess,
    setTickerLookupSuccess,
    tickerLookupError,
    setTickerLookupError,
    tickerLookupLoading,
    setTickerLookupLoading,
  };
};
