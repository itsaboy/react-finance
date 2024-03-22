import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export const useFormLookup = () => {
  const [sendSuccess, setSendSuccess] = useState(null);
  const [sendError, setSendError] = useState(null);
  const [sendLoading, setSendLoading] = useState(false);

  const { setSECData } = useContext(FinanceContext);

  const formLookup = async (ticker, form, numberOfResults) => {
    setSendLoading(true);
    setSendSuccess(null);
    setSendError(null);

    const req = "/api/getForm";
    const res = await fetch(req, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ticker, form, numberOfResults}),
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
      setSECData(data);
    }
  };

  return {
    formLookup,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  };
};
