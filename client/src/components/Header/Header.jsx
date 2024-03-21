import { useState } from "react";
import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  UserIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/20/solid";
import Calculators from "./Calculators";
import SECForms from "./SECForms";
import MobileMenu from "./MobileMenu";
import AALogo from "../../assets/AALogo.svg";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [popoverVisible, setPopoverVisible] = useState(false);

  return (
    <header className="bg-green-200 border-b-2 border-green-300 h-full w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <div href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {!mobileMenuOpen && (
              <img className="h-10 w-auto" src={AALogo} alt="" />
            )}
            {mobileMenuOpen && (
              <h1 className="text-4xl text-gray-800">
                <span className="text-green-800">A</span>sset{" "}
                <span className="text-green-800">A</span>tlus
              </h1>
            )}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <button className="relative">
            <Link
              to="/"
              className="text-sm font-semibold leading-6 text-gray-800 inline-flex items-center gap-x-1.5 hover:animate-pulse"
            >
              <HomeIcon
                className="-ml-0.5 h-5 w-5 text-green-600"
                aria-hidden="true"
              />
              Home
            </Link>
          </button>

          <Calculators />

          <SECForms />

          <button className="relative">
            <Link
              to="/disclaimer"
              className="text-sm font-semibold leading-6 text-red-800 inline-flex items-center gap-x-1.5 hover:animate-pulse"
            >
              <ExclamationTriangleIcon
                className="-ml-0.5 h-5 w-5 text-red-600"
                aria-hidden="true"
              />
              Disclaimer
            </Link>
          </button>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="inline-flex items-center gap-x-2 rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800"
          >
            Log in <UserIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </nav>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
