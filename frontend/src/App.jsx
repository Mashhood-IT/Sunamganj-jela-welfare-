import React from "react";
import AppLayout from "./AppLayout";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./pages/Contact";
import Donations from "./Donations";
import DonationForm from "./components/DonationForm";
import { Toaster } from "react-hot-toast";
import MembershipForm from "./components/MemberShipForm";
const App = () => {
  return (
    <div>
      <Toaster  />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />{" "}
          <Route path="/about" element={<About />} />
          <Route path="/membershipform" element={<MembershipForm />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/donation-form" element={<DonationForm />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
