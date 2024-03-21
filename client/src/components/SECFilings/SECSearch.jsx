import { Fragment, useState, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FinanceContext } from "../../context/FinanceContext";
import { useFormLookup } from "../../hooks/useFormLookup";

export default function SECSearch({ openSearch, setOpenSearch }) {
  const [ticker, setTicker] = useState("XYZ");
  const [numberOfResults, setNumberOfResults] = useState(1);
  const { SECForm } = useContext(FinanceContext);

  const {
    formLookup,
    sendSuccess,
    setSendSuccess,
    sendError,
    setSendError,
    sendLoading,
  } = useFormLookup();

  const handleSubmit = async (ticker, SECForm, numberOfResults) => {
    await formLookup(ticker, SECForm, numberOfResults);
  };

  return (
    <Transition.Root show={openSearch} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenSearch}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-600 shadow-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
                    <div className="bg-green-800 px-4 py-6 sm:px-6 border-b-2 border-green-400">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-200">
                          {SECForm}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-green-400 text-green-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white hover:ring-2 hover:ring-gray-900"
                            onClick={() => setOpenSearch(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="text-sm text-green-200">
                          {SECForm === "10-K" &&
                            "Provides a comprehensive overview of the company's business and financial condition, including audited financial statements, management's discussion and analysis of financial conditions, and disclosures about market risk"}
                          {SECForm === "10-Q" &&
                            "Provides a comprehensive overview of the company's business and financial condition, including audited financial statements, management's discussion and analysis of financial conditions, and disclosures about market risk"}
                          {SECForm === "8-K" &&
                            "Provides a comprehensive overview of the company's business and financial condition, including audited financial statements, management's discussion and analysis of financial conditions, and disclosures about market risk"}
                          {SECForm === "4" &&
                            "Provides a comprehensive overview of the company's business and financial condition, including audited financial statements, management's discussion and analysis of financial conditions, and disclosures about market risk"}
                        </p>
                      </div>
                    </div>
                    <div className="relative flex-1 px-4 py-6 sm:px-6">
                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                        <div className="bg-gray-600 w-full px-6 py-12 shadow-lg sm:rounded-2xl sm:px-12 shadow-gray-950/60 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80">
                          <div className="space-y-6">
                            <div>
                              <label
                                htmlFor="ticker"
                                className="block text-md font-medium leading-6 text-gray-100"
                              >
                                Ticker
                              </label>
                              <div className="mt-2">
                                <input
                                  id="ticker"
                                  name="ticker"
                                  type="text"
                                  autoComplete="ticker"
                                  required
                                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
                                  onChange={(e) => setTicker(e.target.value)}
                                  value={ticker}
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="number-of-results"
                                className="block text-md font-medium leading-6 text-gray-100"
                              >
                                Results
                              </label>
                              <select
                                id="number-of-results"
                                name="number-of-results"
                                type="number"
                                required
                                className="my-2 block w-full rounded-md border-0 py-2.5 pl-2 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6 hover:cursor-pointer"
                                onChange={(e) =>
                                  setNumberOfResults(e.target.value)
                                }
                                value={numberOfResults}
                              >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                              </select>
                            </div>

                            <br />

                            <div className="flex items-center justify-center">
                              <button
                                type="button"
                                className="inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer"
                                onClick={() =>
                                  handleSubmit(ticker, SECForm, numberOfResults)
                                }
                                // disabled={
                                //   underlyingPrice === 0 ||
                                //   strikePrice === 0 ||
                                //   premiumPrice === 0
                                // }
                              >
                                Search
                                <MagnifyingGlassIcon
                                  className="-mr-0.5 h-5 w-5"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
