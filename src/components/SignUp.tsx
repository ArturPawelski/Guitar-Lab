import React from 'react';
import { CgYoutube } from 'react-icons/cg';
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsTiktok } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

const SignUp = () => {
  return (
    <div className='text-white font-quicksand px-4 bg-[#0C0C0C] py-36'>
      <h1 className='text-center text-4xl font-bold'>SIGN UP FOR MORE INFORMATION & GREAT OFFERS</h1>
      <button className='bg-white py-2 px-14 block mx-auto text-black font-bold rounded-xl mt-8'>SUBSCRIBE</button>
      <div className='flex justify-center items-center mt-8 gap-8'>
        <CgYoutube size={35} />
        <AiOutlineFacebook size={30} />
        <BsTiktok size={25} />
        <BsInstagram size={25} />
        <BsTwitter size={25} />
      </div>
    </div>
  );
};

export default SignUp;
