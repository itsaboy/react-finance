import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, DocumentIcon } from "@heroicons/react/20/solid";
import { FinanceContext } from "../../context/FinanceContext";
import { SEC_FORMS } from "../../data";

export default function SECForms() {
  const { SECForm ,setSECForm } = useContext(FinanceContext);
  return (
    <Popover className="relative">
      <Popover.Button className="text-sm font-semibold leading-6 text-gray-800 inline-flex items-center gap-x-1.5 hover:animate-pulse">
        <DocumentIcon className="-ml-0.5 h-5 w-5 text-green-600" aria-hidden="true" />
        SEC Filings
        <ChevronDownIcon
          className="h-5 w-5 flex-none text-gray-800"
          aria-hidden="true"
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-200 shadow-lg ring-1 ring-gray-900/5 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80">
          <div className="p-4">
            {SEC_FORMS.map((item) => (
              <div
                key={item.name}
                className={`group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-green-100 ${SECForm === item.name && "bg-gray-400 hover:bg-gray-400  animate-pulse"}`}
              >
                <div className="flex-auto divide-y-2 divide-gray-600">
                  <Link
                    to={item.to}
                    onClick={() => setSECForm(item.name)}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
