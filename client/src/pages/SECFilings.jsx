import { useState, useContext, useEffect } from "react";
import SECSearch from "../components/SECFilings/SECSearch";
import { FinanceContext } from "../context/FinanceContext";
import {
  MagnifyingGlassCircleIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useFormLookup } from "../hooks/useFormLookup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SECFilings() {
  const [openSearch, setOpenSearch] = useState(false);
  const { setActivePage, SECForm, SECData, setOptionStrategy } = useContext(FinanceContext);

  useEffect(() => {
    setActivePage("sec-filings");
    setOptionStrategy("None");
  }, []);

  const { sendLoading } = useFormLookup();

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

      <div className="divide-y-2 divide-gray-300 overflow-hidden rounded-lg bg-gray-100 shadow-lg shadow-gray-900/40 w-full sm:w-4/5">
        {SECData.length === 0 ? null : (
          <>
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Search Results:
              </h2>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow sm:grid sm:grid-cols-2 gap-2">
                {!SECData ? (
                  null || sendLoading
                ) : (
                  <>
                    {SECData.map((filing, actionIdx) => (
                      <div
                        key={filing.id}
                        className={classNames(
                          actionIdx === 0
                            ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                            : "",
                          actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                          actionIdx === SECData.length - 2
                            ? "sm:rounded-bl-lg"
                            : "",
                          actionIdx === SECData.length - 1
                            ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                            : "",
                          "group relative bg-gray-200 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-600 border-gray-300 border-2 hover:border-gray-400"
                        )}
                      >
                        <div>
                          <span className="inline-flex rounded-lg p-3 ring-2 ring-green-600 bg-green-200">
                            <DocumentMagnifyingGlassIcon
                              className="h-6 w-6 text-gray-600"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="mt-8">
                          <h3 className="text-base font-semibold leading-6 text-gray-900">
                            <a
                              href={filing.linkToHtml}
                              target="_blank"
                              className="focus:outline-none"
                            >
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              {filing.companyName}
                            </a>
                          </h3>
                          <p className="mt-2 text-md font-base leading-6 text-gray-800">
                            {filing.description}
                          </p>
                          <p className="mt-2 text-sm text-gray-500">
                            {filing.periodOfReport}
                          </p>
                        </div>
                        <span
                          className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                          aria-hidden="true"
                        >
                          <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                          </svg>
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <SECSearch openSearch={openSearch} setOpenSearch={setOpenSearch} />
    </div>
  );
}
