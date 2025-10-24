import React from 'react'
import AppLayout from './AppLayout'
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './pages/Contact';
import DonationForm from './components/DonationForm';
import Donations from './Donations';

const App = () => {
  return (
    <div >
    <Routes>
      <Route path='/' element={<AppLayout/>}  >
      <Route path='/' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/donations' element={<Donations/>}  />
      <Route path='/support-form' element={<DonationForm/>}  />
      <Route path='/contact' element={<Contact/>}  />
      </Route>
    </Routes>
    </div>
  );
};


export default App