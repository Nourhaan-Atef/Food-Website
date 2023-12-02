import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import TopTab from "../../components/TopTab";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <TopTab />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
