import React from 'react';

const Footer = () => {
  return (
    <div className='text-white font-quicksand px-4 bg-[#0C0C0C] pb-8 border-t-[1px]'>
      <h1 className=' text-3xl text-center font-bold sm:text-4xl mt-8'>GuitarLab</h1>
      <ul className='grid grid-cols-2 mx-auto  place-items-center  gap-8  mt-8 sm:max-w-[950px] sm:grid-cols-4 sm:gap-2 '>
        <li className='font-[100] underline underline-offset-4 '> Our Company</li>
        <li className='font-[100] underline underline-offset-4 '>Terms & Conditions</li>
        <li className='font-[100] underline underline-offset-4 '>Contact</li>
        <li className='font-[100] underline underline-offset-4 '>Privacy Policy</li>
      </ul>
      <p className='text-center mt-8 text-[0.7rem] font-[500]'>Copyright © 2023 GuitarLab. All right reserved.</p>
    </div>
  );
};

export default Footer;
