import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import Breakeven from "./components/Breakeven.jsx";
import SECFilings from "./components/SECFilings/SECFilings.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "/breakeven",
        element: <Breakeven />,
      },
      {
        index: true,
        path: "/secfilings",
        element: <SECFilings />,
      },
      {
        index: true,
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        index: true,
        path: "/login",
        element: <Login />,
      },
      {
        index: true,
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
