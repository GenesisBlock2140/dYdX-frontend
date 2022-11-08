import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

function App() {
  return (

      <div className='bg-[url("../public/images/gridTop.png")] bg-repeat-x'>
        <Navbar />
        <HeroBanner />
      </div>

  );
}

export default App;
