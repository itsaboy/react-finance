import { useEffect, useContext } from "react";
import landing from "../assets/landing.webp";
import BGGradient from "./BGGradient";
import { FinanceContext } from "../context/FinanceContext";

export default function Home() {
  const { setSECForm, setOptionStrategy } = useContext(FinanceContext);

  useEffect(() => {
    setOptionStrategy("None");
    setSECForm("None");
  });

  return (
    <div className="relative">
      <BGGradient />
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Data to help inform your investment and trading decisions.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              "The stock market is designed to transfer money from the active to
              the patient." -{" "}
              <span className="font-semibold">Warren Buffett</span>
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:rounded-tl-3xl lg:rounded-bl-3xl"
            src={landing}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-green-800 opacity-40 lg:rounded-tl-3xl lg:rounded-bl-3xl"></div>
        </div>
      </div>
    </div>
  );
}
