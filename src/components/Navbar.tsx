import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  return (
    <div className='text-white font-quicksand  w-full '>
      <header className='py-8 lg:px-20 md:px-4'>
        <GiHamburgerMenu className=' absolute left-4 top-[38px] md:hidden' size={25} />
        <h1 className='font-bold text-3xl md:text-6xl text-center mx-auto'>GuitarLab</h1>

        <nav className=' hidden md:flex items-center justify-between relative md:bottom-12'>
          <div className='flex items-center lg:gap-4 '>
            <input type='text' placeholder='search...' className='py-2 px-2 text-white rounded-3xl bg-[#0C0C0C] border-[1px] border-white focus:outline-none' />
            <AiOutlineSearch size={30} />
          </div>
          <AiOutlineShoppingCart size={30} />
        </nav>
      </header>

      <ul className=' hidden md:flex justify-center text-lg font-thin mt-[-20px] py-4 gap-16 w-full border-t-[1px] border-b-[1px]'>
        <li>NEW</li>
        <li>PRODUCTS</li>
        <li>PERSONALIZE</li>
        <li>INFORMATIONS</li>
      </ul>

      <ul className=' md:hidden'></ul>
    </div>
  );
};

export default Navbar;
