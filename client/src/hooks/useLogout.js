import { useContext } from "react";
import { useAuthContext } from "./useAuthContext";
import { FinanceContext } from "../context/FinanceContext";
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { setActiveTicker, setWatchlist } = useContext(FinanceContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    setActiveTicker("None");
    setWatchlist([]);
    navigate('/');
  };

  return { logout };
};
