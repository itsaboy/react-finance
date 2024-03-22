import { useEffect, useContext } from "react";
import ProfileNav from "../components/Profile/ProfileNav";
import MyAccount from "../components/Profile/MyAccount";
import { FinanceContext } from "../context/FinanceContext";

export default function Profile() {
  const { setActivePage, setSECForm, setOptionStrategy } =
    useContext(FinanceContext);

  useEffect(() => {
    setActivePage("profile");
    setOptionStrategy("None");
    setSECForm("None");
  }, []);

  return (
    <div className="profile-container">
      <ProfileNav />
      <MyAccount />
    </div>
  );
}
