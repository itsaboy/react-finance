import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export const useSaveTicker = () => {
  const [sendSuccess, setSendSuccess] = useState(null);
  const [sendError, setSendError] = useState(null);
  const [sendLoading, setSendLoading] = useState(false);

  const { setWatchlist } = useContext(FinanceContext);

  const saveTicker = async (ticker) => {
    setSendLoading(true);
    setSendSuccess(null);
    setSendError(null);

    const req = "/api/watchlist";
    const res = await fetch(req, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ticker }),
      });
    const data = await res.json();

    if (!res.ok) {
      setSendLoading(false);
      setSendSuccess(null);
      setSendError(data.error);
    } else {
      setSendLoading(false);
      setSendSuccess("Ticker added to watchlist");
      setSendError(null);
      setWatchlist(data);
    }
  };

  return {
    saveTicker,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  };
};