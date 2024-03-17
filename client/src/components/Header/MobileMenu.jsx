import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import CalculatorsMobile from "./CalculatorsMobile";
import SECFormsMobile from "./SECFormsMobile";
import AALogo from "../../assets/AALogo.svg";

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-200 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
        <div className="flex items-center justify-between">
          <div href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-10 w-auto"
              src={AALogo}
              alt=""
            />
          </div>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2 bg-green-400 text-green-800 hover:text-gray-900 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-white hover:ring-2 hover:ring-gray-900"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-800/60">
            <div className="space-y-2 py-6">
              <Link
                to="/"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 hover:animate-pulse"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <CalculatorsMobile
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <SECFormsMobile
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <Link
                to="/disclaimer"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-red-800 hover:bg-gray-50 hover:animate-pulse"
                onClick={() => setMobileMenuOpen(false)}
              >
                Disclaimer
              </Link>
            </div>
            <div className="py-6">
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-green-700 text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
