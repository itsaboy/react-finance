import { useState, useContext, useEffect } from "react";
import SECSearch from "../components/SECFilings/SECSearch";
import SECOutput from "../components/SECFilings/SECOutput";
import { FinanceContext } from "../context/FinanceContext";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

export default function SECFilings() {
  const [openSearch, setOpenSearch] = useState(false);
  const { setActivePage, SECForm, SECData, setOptionStrategy } =
    useContext(FinanceContext);

  useEffect(() => {
    setActivePage("sec-filings");
    setOptionStrategy("None");
  }, []);

  return (
    <div className="mx-auto flex flex-col max-w-7xl items-center justify-between px-8 mt-2">
      {SECForm === "None" ? (
        <div className="bg-gray-600 max-w-lg px-6 py-12 shadow-lg sm:rounded-2xl sm:px-12 shadow-gray-950/60 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80">
          <h3 className="text-2xl text-left p-10 text-gray-300">
            Select a form from the SEC Filings dropdown menu.
          </h3>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-semibold text-gray-800 text-center p-4">
            Form {SECForm}
          </h1>
          <button
            className="mb-12 inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
            onClick={() => setOpenSearch(true)}
          >
            New Search
            <MagnifyingGlassCircleIcon
              className="-mr-0.5 h-5 w-5"
              aria-hidden="true"
            />
          </button>
        </>
      )}
      <SECOutput />
      <SECSearch openSearch={openSearch} setOpenSearch={setOpenSearch} />
    </div>
  );
}
