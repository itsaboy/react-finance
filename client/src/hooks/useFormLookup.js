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

    const req = "https://api.sec-api.io";
    const res = await fetch(req, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          query_string: {
            query: `ticker:${ticker} AND formType:"${form}"`,
          },
        },
        from: "0",
        size: numberOfResults,
        sort: [{ filedAt: { order: "desc" } }],
      }),
    });
    const data = await res.json();
    const formattedData = data.filings

    if (!res.ok) {
      setSendLoading(false);
      setSendSuccess(null);
      setSendError(data.error);
    } else {
      setSendLoading(false);
      setSendSuccess("Message sent successfully");
      setSendError(null);
      setSECData(formattedData);
      console.log(formattedData);
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
