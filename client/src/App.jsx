import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Breakeven from "./pages/Breakeven";
import SECFilings from "./pages/SECFilings";
import Disclaimer from "./pages/Disclaimer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import { FinanceContext } from "./context/FinanceContext";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />,
      <Route index path="/breakeven" element={<Breakeven />} />,
      <Route index path="/sec-filings" element={<SECFilings />} />,
      <Route index path="/disclaimer" element={<Disclaimer />} />,
      <Route index path="/login" element={<Login />} />,
      <Route index path="/signup" element={<Signup />} />,
      <Route index path="*" element={<Error />} />,
    </Route>
  )
);

function App() {
  const [activePage, setActivePage] = useState("home");
  const [optionStrategy, setOptionStrategy] = useState("None");
  const [SECForm, setSECForm] = useState("None");
  const [SECData, setSECData] = useState([]);

  return (
    <div className="body-container">
      <FinanceContext.Provider
        value={{
          activePage,
          setActivePage,
          optionStrategy,
          setOptionStrategy,
          SECForm,
          setSECForm,
          SECData,
          setSECData,
        }}
      >
        <RouterProvider router={router} />
      </FinanceContext.Provider>
    </div>
  );
}

export default App;
