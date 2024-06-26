import { useState, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export const useFormLookup = () => {
  const [formLookupSuccess, setFormLookupSuccess] = useState(null);
  const [formLookupError, setFormLookupError] = useState(null);
  const [formLookupLoading, setFormLookupLoading] = useState(false);

  const { setSECData } = useContext(FinanceContext);

  const formLookup = async (ticker, form, numberOfResults) => {
    setFormLookupLoading(true);
    setFormLookupSuccess(null);
    setFormLookupError(null);

    const req = "/api/getForm";
    const res = await fetch(req, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ticker, form, numberOfResults }),
    });
    const data = await res.json();

    if (!res.ok) {
      setFormLookupLoading(false);
      setFormLookupSuccess(null);
      setFormLookupError(data.error);
    } else {
      if (data.length === 0) {
        setFormLookupLoading(false);
        setFormLookupSuccess(null);
        setFormLookupError("No results found!");
      } else {
        setFormLookupLoading(false);
        setFormLookupSuccess("Results found!");
        setFormLookupError(null);
        setSECData(data);
      }
    }
  };

  return {
    formLookup,
    formLookupSuccess,
    setFormLookupSuccess,
    formLookupError,
    setFormLookupError,
    formLookupLoading,
    setFormLookupLoading,
  };
};
