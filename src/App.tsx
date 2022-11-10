import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';

import downArrow from './assets/images/downArrow.png'

function App() {
  return (
      <div className='bg-[url(./assets/images/gridTop.png)] bg-repeat-x'>
        <Navbar />
        <HeroBanner />
        <img src={downArrow} alt='downArrow' className='mx-auto my-5' />
        <div className='max-w-[920px] mx-auto text-center bg-[url(./assets/images/gridTop.png)] p-5 borderBlur'>
          <h2 className='text-white text-[40px] font-bold'>Projects built with grants</h2>
          <p className='text-greyTh text-[18px] my-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus,< br/> consectetur ut bibendum non, gravida non libero.</p>
          <a className='text-purpleTh text-[18px]' href='#a'>View all funded projects</a>
        </div>
      </div>
  );
}

export default App;
