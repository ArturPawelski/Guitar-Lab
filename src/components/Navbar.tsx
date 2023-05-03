import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(true);

  const toggleMenu = (): void => {
    setMenu(!menu);
  };

  return (
    <div className='text-white font-quicksand  w-full '>
      <header className='py-8 lg:px-20 md:px-4'>
        {menu ? (
          <GiHamburgerMenu
            onClick={toggleMenu}
            className=' absolute left-4 sm:left-8 top-[38px] md:hidden z-40 cursor-pointer hover:scale-[1.1] transition duration-500 active:translate-y-4 '
            size={25}
          />
        ) : (
          <AiOutlineClose
            onClick={toggleMenu}
            className=' absolute left-4 sm:left-8 top-[38px] md:hidden z-40 cursor-pointer hover:scale-[1.1] transition duration-500 active:translate-y-4 '
            size={25}
          />
        )}

        <h1 className=' font-bold text-3xl md:text-6xl text-center mx-auto  '>GuitarLab</h1>
        <AiOutlineShoppingCart className=' absolute right-4 top-[38px] md:hidden' size={25} />

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

      {!menu && (
        <nav className='fixed left-0 top-[0%] h-full w-[40%] bg-[#0C0C0C]  bg-opacity-0 z-0 md:hidden'>
          <ul className=' flex flex-col gap-8 px-4 sm:px-8 mt-24   '>
            <li className='border-b py-2 w-full min-w-[140px]'>NEW</li>
            <li className='border-b py-2 w-full min-w-[140px]'>PRODUCTS</li>
            <li className='border-b py-2 w-full min-w-[140px]'>PERSONALIZE</li>
            <li className='border-b py-2 w-full min-w-[140px]'> INFORMATIONS</li>
            <div className='flex items-center lg:gap-4 '>
              <input type='text' placeholder='search...' className='py-2 px-2 max-w-[130px] text-white rounded-3xl bg-[#0C0C0C] border-[1px] border-white focus:outline-none' />
            </div>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
