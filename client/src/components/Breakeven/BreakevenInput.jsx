import { useState, useContext } from "react";
import {
  QuestionMarkCircleIcon,
  CalculatorIcon,
} from "@heroicons/react/20/solid";
import { FinanceContext } from "../../context/FinanceContext";

export default function BreakevenInput({
  ticker,
  setTicker,
  setBreakeven,
  setPercentMove,
  setResultOpen
}) {
  const [underlyingPrice, setunderlyingPrice] = useState(0);
  const [strikePrice, setstrikePrice] = useState(0);
  const [premiumPrice, setpremiumPrice] = useState(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const { optionStrategy } = useContext(FinanceContext);

  const calculateCall = (underlyingPrice, strikePrice, premiumPrice) => {
    const breakevenCalc = parseFloat(strikePrice) + parseFloat(premiumPrice);
    const percentMoveCalc =
      ((parseFloat(breakevenCalc) - parseFloat(underlyingPrice)) /
        parseFloat(underlyingPrice)) *
      100;
    setBreakeven(breakevenCalc);
    setPercentMove(percentMoveCalc);
    setResultOpen(true);
  };

  const calculatePut = (underlyingPrice, strikePrice, premiumPrice) => {
    const breakevenCalc = parseFloat(strikePrice) - parseFloat(premiumPrice);
    const percentMoveCalc =
      ((parseFloat(underlyingPrice) - parseFloat(breakevenCalc)) /
        parseFloat(underlyingPrice)) *
      100;
    setBreakeven(breakevenCalc);
    setPercentMove(percentMoveCalc);
    setResultOpen(true);
  };

  return (
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
          htmlFor="underlying"
          className="block text-md font-medium leading-6 text-gray-100"
        >
          Underlying Price
        </label>
        <div className="mt-2">
          <input
            id="underlying"
            name="underlying"
            type="number"
            autoComplete="underlying"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
            onChange={(e) => setunderlyingPrice(e.target.value)}
            value={underlyingPrice}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="strike"
          className="block text-md font-medium leading-6 text-gray-100"
        >
          Strike Price
        </label>
        <div className="mt-2">
          <input
            id="strike"
            name="strike"
            type="number"
            autoComplete="strike"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
            onChange={(e) => setstrikePrice(e.target.value)}
            value={strikePrice}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="premium"
          className="block text-md font-medium leading-6 text-gray-100"
        >
          {optionStrategy === "Long Call Breakeven" && "Premium Paid"}
          {optionStrategy === "Long Put Breakeven" && "Premium Paid"}
          {optionStrategy === "Short Call Breakeven" && "Premium Recieved"}
          {optionStrategy === "Short Put Breakeven" && "Premium Recieved"}
        </label>
        <div className="relative mt-2">
          <input
            id="premium"
            name="premium"
            type="number"
            autoComplete="premium"
            step="0.01"
            min="0"
            required
            className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-950 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-900 focus:ring-2 focus:ring-inset focus:ring-gray-800 sm:text-sm sm:leading-6"
            onChange={(e) => setpremiumPrice(e.target.value)}
            value={premiumPrice}
          />
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => setTooltipOpen(!tooltipOpen)}
          >
            <QuestionMarkCircleIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </button>
        </div>
        {tooltipOpen ? (
          <p className="mt-2 -mb-8 text-md text-green-400 text-center">
            Format according to options pricing notation.
          </p>
        ) : null}
      </div>

      <br />

      <div className="flex items-center justify-center">
        <button
          type="button"
          className="inline-flex items-center gap-x-2 rounded-lg bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-gray-200 shadow-md shadow-gray-800/60 hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-800 hover:cursor-pointer"
          onClick={
            optionStrategy === "Long Call Breakeven" ||
            optionStrategy === "Short Call Breakeven"
              ? () => calculateCall(underlyingPrice, strikePrice, premiumPrice)
              : optionStrategy === "Long Put Breakeven" ||
                optionStrategy === "Short Put Breakeven"
              ? () => calculatePut(underlyingPrice, strikePrice, premiumPrice)
              : null
          }
          disabled={
            underlyingPrice === 0 || strikePrice === 0 || premiumPrice === 0
          }
        >
          Calculate{" "}
          <CalculatorIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
