import React from 'react';
import { CgYoutube } from 'react-icons/cg';
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsTiktok } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { motion } from 'framer-motion';
const SignUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      animate={{ x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 1 }}
      className='text-white font-quicksand px-4 bg-[#0C0C0C] py-24'
    >
      <h1 className='text-center text-3xl font-bold sm:text-4xl'>SIGN UP FOR MORE INFORMATION & GREAT OFFERS</h1>
      <button className='bg-white py-2 px-14 block mx-auto text-black font-bold rounded-xl mt-8'>SUBSCRIBE</button>
      <div className='flex gap-4 justify-center items-center mt-8 sm:gap-8'>
        <CgYoutube size={35} className='cursor-pointer' tabIndex={0} />
        <AiOutlineFacebook size={30} className='cursor-pointer' tabIndex={0} />
        <BsTiktok size={25} className='cursor-pointer' tabIndex={0} />
        <BsInstagram size={25} className='cursor-pointer' tabIndex={0} />
        <BsTwitter size={25} className='cursor-pointer' tabIndex={0} />
      </div>
    </motion.div>
  );
};

export default SignUp;
