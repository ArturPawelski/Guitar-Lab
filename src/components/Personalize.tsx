import React from 'react';
import GuitarPhoto from './images/guitar-personalize.png';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
const Personalize = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className='text-white font-quicksand px-3  bg-[#0C0C0C] pt-8  md:py-24 '
      id='personalize'
    >
      <div className='max-w-[95%] mx-auto sm:max-w-[85%] md:max-w-[80%] md:flex  md:max-h-[600px]'>
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.6, duration: 0.5 }}>
          <h1 className='uppercase text-4xl font-bold text-center md:text-left  '>
            <Typed backSpeed={100} typeSpeed={100} loop strings={['personalize']} />
          </h1>
          <p className='font-[300] text-center mt-12 text-sm md:text-xl md:max-w-[380px] md:text-left lg:max-w-[480px] lg:mt-20 lg:text-x;  xl:max-w-[570px] 2xl:max-w-[700px] '>
            At our shop, we offer custom-made guitars tailored to your unique preferences and specifications. Our team of skilled specialists has the expertise to create a one-of-a-kind instrument
            that perfectly suits your playing style and musical taste. Whether you're looking for a specific wood type, pickup configuration, or other custom features, we can work with you to bring
            your vision to life. Don't hesitate to contact us to learn more about our custom guitar options and speak with one of our specialists today.
          </p>
          <button className='bg-white bg-opacity-40 font-bold py-2 px-8 rounded-2xl mt-12  mx-auto block md:mx-0 lg:mt-20 '>CONTACT</button>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1, duration: 0.5 }}
          className='max-w-[30%] mt-[-20%] mx-auto md:mt-0 md:w-auto md:mx-auto md:relative'
        >
          <img src={GuitarPhoto} alt='' className=' rotate-90 mx-auto md:rotate-0 md:hover:rotate-12 md:transition-all md:w-full md:h-full md:mx-auto md:relative md:bottom-[30px] ' />
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Personalize;
