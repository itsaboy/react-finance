import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export const useDeleteTicker = () => {
  const [sendSuccess, setSendSuccess] = useState(null);
  const [sendError, setSendError] = useState(null);
  const [sendLoading, setSendLoading] = useState(false);

  const { setWatchlist } = useContext(FinanceContext);

  const deleteTicker = async (id) => {
    setSendLoading(true);
    setSendSuccess(null);
    setSendError(null);

    const req = `/api/watchlist/${id}`;
    const res = await fetch(req, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();

    if (!res.ok) {
      setSendLoading(false);
      setSendSuccess(null);
      setSendError(data.error);
    } else {
      setSendLoading(false);
      setSendSuccess("Ticker removed from watchlist");
      setSendError(null);
    }
  };

  return {
    deleteTicker,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  };
};
