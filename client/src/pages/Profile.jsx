import { useState, useEffect, useContext } from "react";
import ProfileNav from "../components/Profile/ProfileNav";
import MyAccount from "../components/Profile/MyAccount";
import Watchlist from "../components/Profile/Watchlist";
import { FinanceContext } from "../context/FinanceContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("My Account");

  const { setActivePage, setSECForm, setOptionStrategy } =
    useContext(FinanceContext);

  const { user } = useAuthContext();

  useEffect(() => {
    setActivePage("profile");
    setOptionStrategy("None");
    setSECForm("None");
  }, []);

  return (
    <div className="profile-container">
      <ProfileNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "My Account" ? (
        <MyAccount />
      ) : activeTab === "Watchlist" ? (
        <Watchlist />
      ) : null}
    </div>
  );
}
