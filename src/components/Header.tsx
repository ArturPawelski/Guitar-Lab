import React from 'react';

import MainRedGuitar from './images/main-guitar-red.png';

const Header = () => {
  return (
    <main className='relative text-white font-quicksand w-full bg-footer-texture bg-cover bg-center '>
      <h1 className='hidden sm:block sm:absolute md:top-[0px] md:left-[0%] lg:left-[5%] xl:left-[12.5%] 2xl:left-[15%] md:text-4xl  max-w-[400px]'>A new generation of guitars is coming...</h1>
      <div className='flex mt-16 justify-center items-center min-h-screen'>
        <img src={MainRedGuitar} alt='new guitar ' className='max-w-full max-h-full' />
      </div>
      <h2 className='hidden sm:block sm:absolute md:top-[400px] md:right-[0%] lg:right-[5%] xl:right-[12.5%] 2xl:right-[15%]  md:text-3xl text-right  max-w-[400px]'>
        Our store is proud to present some of the most innovative guitars on the market
      </h2>
      <h3 className='absolute top-40 left-0'>Whether you're a beginner or a seasoned pro, our selection of guitars has something for everyone. </h3>
      <h4 className='absolute top-60 left-0'>CHOOSE your guitar and go into the world!</h4>
      <h5 className='absolute top80 left-0'>PERSONALIZE your own guitar that will capture your heart and the hearts of others</h5>
    </main>
  );
};

export default Header;
