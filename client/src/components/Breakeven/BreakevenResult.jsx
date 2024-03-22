import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CalculatorIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { FinanceContext } from "../../context/FinanceContext";

export default function BreakevenResult({
  ticker,
  breakeven,
  percentMove,
  open,
  setOpen,
}) {
  const { optionStrategy } = useContext(FinanceContext);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 transition-opacity bg-clip-padding backdrop-filter backdrop-blur bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-gray-200 px-4 pb-4 pt-5 text-left shadow-2xl shadow-gray-900 transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-green-200 text-green-600 hover:text-green-800 hover:ring-2 hover:ring-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-200 sm:mx-0 sm:h-10 sm:w-10">
                    <CalculatorIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6 text-gray-950"
                    >
                      Result:
                    </Dialog.Title>
                    <div className="mt-2">
                      {optionStrategy === "Long Call Breakeven" && (
                        <>
                          <p className="text-md text-gray-800">
                            <span className="font-semibold text-green-600">
                              {ticker}{" "}
                            </span>
                            needs to trade up to{" "}
                            <span className="font-semibold text-green-600">
                              {breakeven.toFixed(2)}
                            </span>{" "}
                            by expiration for you to breakeven.
                          </p>
                          <p className="mt-4 text-md text-gray-800">
                            That's a{" "}
                            <span className="font-semibold text-green-600">
                              {percentMove.toFixed(2)}%
                            </span>{" "}
                            move.
                          </p>
                        </>
                      )}
                      {optionStrategy === "Long Put Breakeven" && (
                        <>
                          <p className="text-md text-gray-800">
                            <span className="font-semibold text-green-600">
                              {ticker}{" "}
                            </span>
                            needs to trade down to{" "}
                            <span className="font-semibold text-green-600">
                              {breakeven.toFixed(2)}
                            </span>{" "}
                            by expiration for you to breakeven.
                          </p>
                          <p className="mt-4 text-md text-gray-800">
                            That's a{" "}
                            <span className="font-semibold text-green-600">
                              -{percentMove.toFixed(2)}%
                            </span>{" "}
                            move.
                          </p>
                        </>
                      )}
                      {optionStrategy === "Short Call Breakeven" && (
                        <>
                          <p className="text-md text-gray-800">
                            If{" "}
                            <span className="font-semibold text-green-600">
                              {ticker}{" "}
                            </span>
                            is trading above{" "}
                            <span className="font-semibold text-green-600">
                              {breakeven.toFixed(2)}
                            </span>{" "}
                            at expiration, buying back the contract will incur a
                            loss.
                          </p>
                          <p className="mt-4 text-md text-gray-800">
                            That's a{" "}
                            <span className="font-semibold text-green-600">
                              {percentMove.toFixed(2)}%
                            </span>{" "}
                            move.
                          </p>
                        </>
                      )}
                      {optionStrategy === "Short Put Breakeven" && (
                        <>
                          <p className="text-md text-gray-800">
                            If{" "}
                            <span className="font-semibold text-green-600">
                              {ticker}{" "}
                            </span>
                            is trading below{" "}
                            <span className="font-semibold text-green-600">
                              {breakeven.toFixed(2)}
                            </span>{" "}
                            at expiration, buying back the contract will incur a
                            loss.
                          </p>
                          <p className="mt-4 text-md text-gray-800">
                            That's a{" "}
                            <span className="font-semibold text-green-600">
                              -{percentMove.toFixed(2)}%
                            </span>{" "}
                            move.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
