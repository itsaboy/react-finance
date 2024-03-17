import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { FinanceContext } from "./context/FinanceContext";
import "./App.css";

function App() {
  const [optionStrategy, setOptionStrategy] = useState("Long Call Breakeven");
  const [SECForm, setSECForm] = useState("Form 10-K");

  return (
    <div className="body-container">
      <FinanceContext.Provider
        value={{ optionStrategy, setOptionStrategy, SECForm, setSECForm }}
      >
        <Header />
        <main className="bg-transparent">
          <Outlet />
        </main>
        <Footer />
      </FinanceContext.Provider>
    </div>
  );
}

export default App;
