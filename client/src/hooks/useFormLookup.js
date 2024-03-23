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
      body: JSON.stringify({ticker, form, numberOfResults}),
    });
    const data = await res.json();

    if (!res.ok) {
      setFormLookupLoading(false);
      setFormLookupSuccess(null);
      setFormLookupError(data.error);
    } else {
      setFormLookupLoading(false);
      setFormLookupSuccess("Message sent successfully");
      setFormLookupError(null);
      setSECData(data);
    }
  };

  return {
    formLookup,
    formLookupSuccess,
    setFormLookupSuccess,
    formLookupError,
    setFormLookupError,
    formLookupLoading,
    setFormLookupLoading
  };
};
