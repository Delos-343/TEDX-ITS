import React from 'react';
import { Navbar, Hero, Footer } from './components/index';
import Payment from './pages/pay-details';

function App() {
  return (
      <div className='bg-[#f1f1f1] w-full h-full m-0'>
        <Hero />
        <Payment />
      </div>
  );
}

export default App;
