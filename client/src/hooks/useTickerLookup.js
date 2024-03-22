import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export const useTickerLookup = () => {
  const [sendSuccess, setSendSuccess] = useState(null);
  const [sendError, setSendError] = useState(null);
  const [sendLoading, setSendLoading] = useState(false);

  const { setActiveTicker } = useContext(FinanceContext);

  const tickerLookup = async (ticker) => {
    setSendLoading(true);
    setSendSuccess(null);
    setSendError(null);

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
      setSendLoading(false);
      setSendSuccess(null);
      setSendError(data.error);
    } else {
      setSendLoading(false);
      setSendSuccess("Message sent successfully");
      setSendError(null);
      setActiveTicker(data[0]);
    }
  };

  return {
    tickerLookup,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  };
};
