import { useState, useContext, useEffect } from "react";
import { FinanceContext } from "../context/FinanceContext";
import BreakevenInput from "../components/Breakeven/BreakevenInput";
import BreakevenResult from "../components/Breakeven/BreakevenResult";

export default function Breakeven() {
  const [ticker, setTicker] = useState("XYZ");
  const [breakeven, setBreakeven] = useState(0);
  const [percentMove, setPercentMove] = useState(0);
  const [resultOpen, setResultOpen] = useState(false);

  const { setActivePage, optionStrategy, setSECForm } = useContext(FinanceContext);

  useEffect(() => {
    setActivePage("calculators");
    setSECForm("None");
  }, []);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-800">
          {optionStrategy === "Long Call Breakeven" && "Long Call Option"}
          {optionStrategy === "Long Put Breakeven" && "Long Put Option"}
          {optionStrategy === "Short Call Breakeven" && "Short Call Option"}
          {optionStrategy === "Short Put Breakeven" && "Short Put Option"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-gray-600 w-full px-6 py-12 shadow-lg sm:rounded-2xl sm:px-12 shadow-gray-950/60 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-80">
          {optionStrategy === "None" ? (
            <h3 className="text-2xl text-left p-10 text-gray-300">
              Select a strategy from the Calculator dropdown menu.
            </h3>
          ) : (
            <BreakevenInput ticker={ticker} setTicker={setTicker} setBreakeven={setBreakeven} setPercentMove={setPercentMove} setResultOpen={setResultOpen} />
          )}
        </div>
      </div>
      <BreakevenResult
        ticker={ticker}
        breakeven={breakeven}
        percentMove={percentMove}
        open={resultOpen}
        setOpen={setResultOpen}
      />
    </div>
  );
}
