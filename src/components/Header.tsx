import React from 'react';

import MainRedGuitar from './images/main-guitar-red.png';

const Header = () => {
  return (
    <main className='relative text-white font-quicksand w-full bg-footer-texture bg-cover bg-center min-h-[2200px] px-2 '>
      <h1 className='uppercase font-bold text-xl max-w-[400px] mx-auto text-center mt-8  sm:text-4xl sm:max-w-[500px] md:mt-16 lg:absolute lg:block lg:text-4xl lg:font-bold  lg:top-[0px]  lg:left-[5%] xl:left-[12.5%] 2xl:left-[17%]   lg:max-w-[420px]'>
        A new generation of guitars is coming...
      </h1>

      <div className=' rotate-90   w-[33%] mt-[-25%]   mx-auto sm:mt-[-25%] md:mt-[-28%] lg:flex lg:justify-center lg:items-center  lg:w-full lg:min-h-screen lg:mt-16   lg:rotate-0'>
        <img src={MainRedGuitar} alt='new guitar ' className=' max-w-full max-h-full' />
      </div>

      <h2 className='text-center text-xl mt-[-20%] mx-auto max-w-[400px] font-[300] sm:mt-[-25%]  sm:text-3xl   sm:max-w-[500px] md:mt-[-28%] md:top-[400px] lg:mt-0 lg:absolute lg:block lg:text-right lg:max-w-[400px] lg:right-[5%] xl:right-[12.5%] 2xl:right-[17%] '>
        Our store is proud to present some of the most innovative guitars on the market
      </h2>
      <h3 className='  lg:block lg:text-3xl lg:max-w-[400px] lg:absolute lg:top-[800px] lg:left-[5%] xl:left-[12.5%] 2xl:left-[17%] '>
        Whether you're a beginner or a seasoned pro, our selection of guitars has something for everyone.{' '}
      </h3>
      <h4 className='hidden text-right font-[300] lg:block md:text-3xl sm:absolute  lg:top-[1350px]  lg:right-[4.5%] xl:right-[10.5%] 2xl:right-[16%]    md:max-w-[300px]  lg:max-w-[250px] xl:max-w-[300px]'>
        CHOOSE your guitar and go into the world!
      </h4>
      <h5 className='hidden  font-[400] lg:block md:text-3xl sm:absolute md:top-[1830px] lg:left-[5%] xl:left-[12.5%] 2xl:left-[17%]    md:max-w-[300px]  lg:max-w-[400px]'>
        PERSONALIZE your own guitar that will capture your heart and the hearts of others
      </h5>
    </main>
  );
};

export default Header;
