import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(true);
  const [isNavFixed, setIsNavFixed] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navClass: string = `hidden md:flex justify-center text-lg font-thin mt-[-60px] py-4 gap-16 w-full border-t-[1px] border-b-[1px] ${isNavFixed ? 'md:fixed md:top-[60px] md:bg-black ' : ''}`;

  const toggleMenu = (): void => {
    setMenu(!menu);
  };

  useEffect(() => {
    function handleScroll(): void {
      if (window.scrollY > 108) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(true);
      }
    }
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className='text-white bg-[#0C0C0C]   font-quicksand w-full sticky md:relative top-0 z-50 '>
      <header className='py-8 lg:px-20 md:px-4'>
        {menu ? (
          <GiHamburgerMenu
            onClick={toggleMenu}
            className=' absolute left-4 sm:left-8 top-[38px] md:hidden z-40 cursor-pointer hover:scale-[1.1] transition duration-500 active:translate-y-4 '
            size={25}
            tabIndex={0}
          />
        ) : (
          <AiOutlineClose
            onClick={toggleMenu}
            className=' absolute left-4 sm:left-8 top-[38px] md:hidden z-50 cursor-pointer hover:scale-[1.1] transition duration-500 active:translate-y-4 '
            size={25}
            tabIndex={0}
          />
        )}

        <h1 className=' font-bold text-3xl md:text-6xl text-center mx-auto  '>GuitarLab</h1>
        <AiOutlineShoppingCart className=' absolute right-4 top-[38px] md:hidden  cursor-pointer hover:scale-[1.1] transition duration-500 active:translate-y-4' size={25} />

        <nav className=' hidden md:flex items-center justify-between relative md:bottom-12'>
          <div className='flex items-center lg:gap-4 '>
            <input type='text' placeholder='search...' className='py-2 px-2 text-white rounded-3xl bg-[#0C0C0C] border-[1px] border-white focus:outline-none' />
            <AiOutlineSearch size={30} />
          </div>
          <AiOutlineShoppingCart size={30} tabIndex={0} className=' cursor-pointer hover:scale-[1.1] transition duration-500  ' />
        </nav>
      </header>

      <ul className={navClass}>
        <button className='hover:text-red-500 hover:scale-110 transition-all'>
          <Link to='new' spy={true} smooth={true} offset={-70} duration={700}>
            NEW
          </Link>
        </button>
        <button className='hover:text-red-500 hover:scale-110 transition-all'>
          <Link to='products' spy={true} smooth={true} offset={-60} duration={700}>
            PRODUCTS
          </Link>
        </button>
        <button className='hover:text-red-500 hover:scale-110 transition-all'>
          <Link to='personalize' spy={true} smooth={true} offset={-60} duration={700}>
            PERSONALIZE
          </Link>
        </button>
        <button className='hover:text-red-500 hover:scale-110 transition-all'>
          {' '}
          <Link to='informations' spy={true} smooth={true} offset={-60} duration={700}>
            INFORMATIONS
          </Link>
        </button>
      </ul>
      <AnimatePresence>
        {!menu && (
          <motion.nav
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className='fixed left-0 top-[0%] h-full w-[60%] bg-[#0C0C0C]  bg-opacity-80 z-40 md:hidden'
            ref={menuRef}
          >
            <ul className=' flex flex-col gap-8 px-4 sm:px-8 mt-24   '>
              <button className='border-b py-2 w-full min-w-[140px] hover:text-red-500 hover:scale-110 transition-all'>
                <Link to='new' spy={true} smooth={true} offset={-70} duration={700}>
                  NEW
                </Link>
              </button>
              <button className='border-b py-2 w-full min-w-[140px] hover:text-red-500 hover:scale-110 transition-all'>
                <Link to='products' spy={true} smooth={true} offset={-60} duration={700}>
                  PRODUCTS
                </Link>
              </button>
              <button className='border-b py-2 w-full min-w-[140px] hover:text-red-500 hover:scale-110 transition-all'>
                <Link to='personalize' spy={true} smooth={true} offset={-80} duration={700}>
                  PERSONALIZE
                </Link>
              </button>
              <button className='border-b py-2 w-full min-w-[140px] hover:text-red-500 hover:scale-110 transition-all'>
                <Link to='informations' spy={true} smooth={true} offset={-100} duration={700}>
                  INFORMATIONS
                </Link>
              </button>
              <div className='flex items-center gap-2 sm:gap-4 '>
                <input type='text' placeholder='search...' className='py-2 px-2 max-w-[80px] sm:max-w-[120px] text-white rounded-3xl bg-[#0C0C0C] border-[1px] border-white focus:outline-none' />
                <AiOutlineSearch size={30} className='min-w-[25px]' />
              </div>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
