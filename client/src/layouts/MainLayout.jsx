import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import BGGradient from "../components/BGGradient";

export default function MainLayout() {
  return (
    <div className="body-container">
      <Header />
      <main className="bg-transparent">
        <BGGradient />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
