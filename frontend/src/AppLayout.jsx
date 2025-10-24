import React from 'react';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div >
      {/* <Navbar /> */}
      <div >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
