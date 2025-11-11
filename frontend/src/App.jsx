import React, { useEffect } from "react";
import AppLayout from "./AppLayout";
import About from "./pages/About";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Donations from "./Donations";
import DonationForm from "./components/DonationForm";
import { Toaster } from "react-hot-toast";
import MemberShipPage from "./pages/MemberShipPage";
const App = () => {
   const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div>
      <Toaster  />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membershipform" element={<MemberShipPage />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donation-form" element={<DonationForm />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
