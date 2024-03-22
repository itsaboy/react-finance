import { useContext } from "react";
import { FinanceContext } from "../../context/FinanceContext";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useFormLookup } from "../../hooks/useFormLookup";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SECOutput() {
  const { SECData } = useContext(FinanceContext);

  const { sendLoading } = useFormLookup();

  return (
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
  );
}
