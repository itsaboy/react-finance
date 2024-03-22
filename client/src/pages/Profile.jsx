import { useEffect, useContext } from "react";
import ProfileNav from "../components/Profile/ProfileNav";
import MyAccount from "../components/Profile/MyAccount";
import { FinanceContext } from "../context/FinanceContext";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Profile() {
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
      <ProfileNav />
      <MyAccount />
    </div>
  );
}
