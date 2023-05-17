import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='text-white font-quicksand px-4 bg-[#0C0C0C] pb-8 border-t-[1px] '>
      <h1 className=' text-3xl text-center font-bold sm:text-4xl mt-8'>GuitarLab</h1>
      <ul className='grid grid-cols-2 mx-auto  place-items-center  gap-8  mt-8 sm:max-w-[950px] sm:grid-cols-4 sm:gap-2 '>
        <li className='font-[100] underline underline-offset-4 cursor-pointer ' tabIndex={0}>
          Our Company
        </li>
        <li className='font-[100] underline underline-offset-4  cursor-pointer' tabIndex={0}>
          Terms & Conditions
        </li>
        <li className='font-[100] underline underline-offset-4  cursor-pointer' tabIndex={0}>
          Contact
        </li>
        <li className='font-[100] underline underline-offset-4  cursor-pointer' tabIndex={0}>
          Privacy Policy
        </li>
      </ul>
      <section className='mx-auto'>
        <p className='text-center mt-8 text-[0.7rem] font-[500]'>App created by: Artur Pawelski.</p>
        <ul className='flex gap-4 justify-center mt-2 text-[0.7rem] items-center'>
          <li>E-mail: arturpawelski13@gmail.com</li>
          <li>
            <a href='https://github.com/ArturPawelski' target='_blank'>
              <AiFillGithub size={25} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/artur-pawelski-03a07b232/' target='_blank'>
              <AiFillLinkedin size={25} />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
