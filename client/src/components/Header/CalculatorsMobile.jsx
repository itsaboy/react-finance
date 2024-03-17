import { useContext } from "react";
import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FinanceContext } from "../../context/FinanceContext";
import { BREAKEVEN_CALCS } from "../../data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CalculatorsMobile({ setMobileMenuOpen }) {
  const { setOptionStrategy } = useContext(FinanceContext);

  const handleClick = (strategy) => {
    setOptionStrategy(strategy);
    setMobileMenuOpen(false);
  };

  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-200 hover:animate-pulse">
            Calculators
            <ChevronDownIcon
              className={classNames(
                open ? "rotate-180" : "",
                "h-5 w-5 flex-none"
              )}
              aria-hidden="true"
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {[...BREAKEVEN_CALCS].map((item) => (
              <Link key={item.name} to={item.to} onClick={() => handleClick(item.name)}>
                <Disclosure.Button
                  as="div"
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-100 hover:animate-pulse"
                >
                  {item.name}
                </Disclosure.Button>
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
