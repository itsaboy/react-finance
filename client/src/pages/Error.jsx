import { useEffect, useContext } from "react";
import { FinanceContext } from "../context/FinanceContext";

export default function Error() {
  const { setActivePage, setSECForm, setOptionStrategy } =
    useContext(FinanceContext);

  useEffect(() => {
    setActivePage("error");
    setOptionStrategy("None");
    setSECForm("None");
  }, []);

  return (
    <div className="text-center">
      <p className="text-6xl font-semibold text-red-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-800 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-6 text-base leading-7 text-gray-700">
        Sorry, we couldn't find the page you're looking for.
      </p>
    </div>
  );
}
