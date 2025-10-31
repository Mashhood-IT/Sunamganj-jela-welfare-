import React, { useEffect } from 'react';
import Navbar from './header/Navbar';
import Footer from './footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const AppLayout = () => {
  const location = useLocation()
  const pathname = location.pathname
  useEffect(()=>window.scrollTo({top:0, behavior: 'smooth'}),
  [pathname])
  return (
    <div >
      <Navbar />
        <div >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
