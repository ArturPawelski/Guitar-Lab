import React from 'react';

import MainRedGuitar from './images/main-guitar-red.png';

const Header = () => {
  return (
    <main className='relative text-white font-quicksand w-full bg-footer-texture bg-cover bg-center min-h-[2200px] '>
      <h1 className='hidden uppercase md:absolute md:block md:text-4xl md:font-bold  md:top-[0px] md:left-[3%] lg:left-[5%] xl:left-[12.5%] 2xl:left-[17%]   max-w-[420px]'>
        A new generation of guitars is coming...
      </h1>

      <div className='flex mt-16 justify-center items-center min-h-screen'>
        <img src={MainRedGuitar} alt='new guitar ' className='max-w-full max-h-full' />
      </div>

      <h2 className='hidden text-right font-[300] lg:block md:text-3xl sm:absolute md:top-[400px]  lg:right-[5%] xl:right-[12.5%] 2xl:right-[17%]    md:max-w-[300px]  lg:max-w-[400px]'>
        Our store is proud to present some of the most innovative guitars on the market
      </h2>
      <h3 className='hidden  font-[400] lg:block md:text-3xl sm:absolute md:top-[800px] lg:left-[5%] xl:left-[12.5%] 2xl:left-[17%]    md:max-w-[300px]  lg:max-w-[400px]'>
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
