import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MainRedGuitar from './images/main-guitar-red.png';

const Header = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth >= 1024);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <main className='relative min-h-[900px] pb-12 text-white font-quicksand w-full bg-footer-texture bg-cover bg-center px-2 lg:min-h-[2200px] '>
      <motion.h1
        initial={{ opacity: isMobile ? 0 : 0 }}
        animate={{ opacity: isMobile ? 1 : 0 }}
        transition={{ delay: isMobile ? 0.3 : 0, duration: 1 }}
        exit={{}}
        className='uppercase font-bold text-xl max-w-[400px] mx-auto text-center mt-16  sm:text-4xl sm:max-w-[500px] md:mt-16 lg:absolute lg:block lg:text-4xl lg:font-bold  lg:top-[0px]  lg:left-[5%] xl:left-[12.5%] 2xl:left-[17%]   lg:max-w-[420px]'
      >
        A new generation of guitars is coming...
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=' rotate-90   w-[33%] mt-[-25%]   mx-auto sm:mt-[-25%] md:mt-[-28%] lg:flex lg:justify-center lg:items-center  lg:w-full lg:min-h-screen lg:mt-16   lg:rotate-0'
      >
        <img src={MainRedGuitar} alt='new guitar ' className=' max-w-full max-h-full' />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className='text-center text-xl mt-[-20%] mx-auto max-w-[400px] font-[500] sm:mt-[-25%]  sm:text-3xl   sm:max-w-[500px] md:mt-[-28%] md:top-[400px] lg:font-[300] lg:mt-0 lg:absolute lg:block lg:text-right lg:max-w-[400px] lg:right-[5%] xl:right-[12.5%] 2xl:right-[17%] '
      >
        Our store is proud to present some of the most innovative guitars on the market
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        viewport={{ once: true }}
        className='text-xl font-[300] text-center max-w-[400px]  mx-auto mt-20 sm:text-2xl sm:max-w-[600px] lg:mt-0 lg:block lg:text-3xl lg:max-w-[400px] lg:absolute lg:top-[800px] lg:left-[5%] xl:left-[12.5%] 2xl:left-[17%]   '
      >
        Whether you're a beginner or a seasoned pro, our selection of guitars has something for everyone.{' '}
      </motion.h3>
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        viewport={{ once: true }}
        className='text-xl font-[700] text-center max-w-[400px]  mx-auto mt-20 sm:text-2xl sm:max-w-[600px]  lg:block lg:text-3xl lg:absolute lg:text-right lg:font-[300] lg:top-[1350px]  lg:right-[4%]  lg:max-w-[250px] xl:right-[9%]  xl:max-w-[300px] 2xl:right-[16%]'
      >
        CHOOSE your guitar and go into the world!
      </motion.h4>
      <motion.h5
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 1 }}
        viewport={{ once: true }}
        className='text-xl font-[300] text-center max-w-[400px]  mx-auto mt-20 sm:text-2xl sm:max-w-[600px] lg:font-[300] lg:block lg:text-3xl lg:absolute lg:top-[1830px] lg:left-[5%] lg:max-w-[400px] xl:left-[12.5%] 2xl:left-[17%] '
      >
        PERSONALIZE your own guitar that will capture your heart and the hearts of others
      </motion.h5>
    </main>
  );
};

export default Header;
