import React, { useState } from 'react';
import BlueGuitarImg from './images/new-model-blue.png';
import GreenGuitarImg from './images/new-guitar-green.png';
import VioletGuitarImg from './images/new-model-violet.png';
import { motion, AnimatePresence } from 'framer-motion';

const New = () => {
  const [blueGuitar, setBlueGuiatr] = useState<boolean>(true);
  const [GreenGuitar, setGreenGuiatr] = useState<boolean>(false);
  const [VioletGuitar, setVioletGuiatr] = useState<boolean>(false);
  // usecallback
  //change toggle on class
  const chooseBlueGuitar = (): void => {
    setBlueGuiatr(true);
    setGreenGuiatr(false);
    setVioletGuiatr(false);
  };

  const chooseGreenGuitar = (): void => {
    setBlueGuiatr(false);
    setGreenGuiatr(true);
    setVioletGuiatr(false);
  };

  const chooseVioletGuitar = (): void => {
    setBlueGuiatr(false);
    setGreenGuiatr(false);
    setVioletGuiatr(true);
  };

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.2, duration: 0.8 }} className='pb-4' id='new'>
      <AnimatePresence mode='wait'>
        <motion.main
          initial={{ opacity: 0, display: blueGuitar ? 'block' : 'none' }}
          animate={{ opacity: blueGuitar ? 1 : 0, display: blueGuitar ? 'block' : 'none' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={` bg-gradient-to-b  from-[#094349] from-5% to-[#0C0C0C]] to-80% text-white font-quicksand w-full px-3 border-t-[1px] pb-16`}
        >
          <h1 className='uppercase font-bold text-4xl text-center mt-24'>the newest model</h1>
          <p className='font-[300] text-center mt-8 max-w-[750px] mx-auto'>
            Our newest guitar model offers a stylish design and exceptional sound quality. Perfect for players of all levels, it's a versatile and reliable instrument that will elevate your playing
            experience.
          </p>
          <div className=' -rotate-90 mt-[30%] lg:rotate-0 lg:block lg:w-full lg:mt-8 lg:mx-auto '>
            <img src={BlueGuitarImg} alt='new guitar ' className='w-[80%] h-full mx-auto' />
          </div>
          <section className='relative mt-[30%] lg:mt-0'>
            <ul className='flex gap-8 justify-center'>
              <li onClick={chooseGreenGuitar} className='cursor-pointer w-8 h-8 bg-[#00A257] border-[1px] rounded-3xl' tabIndex={0}></li>
              <li onClick={chooseVioletGuitar} className='cursor-pointer w-8 h-8 bg-[#76084C] border-[1px] rounded-3xl' tabIndex={0}></li>
              <li onClick={chooseBlueGuitar} className='cursor-pointer w-8 h-8 bg-[#1D99A1] border-[1px] rounded-3xl' tabIndex={0}></li>
            </ul>
            <button className=' mx-auto block mt-8  bg-[#134548]  border-[1px] border-[#1D99A1] px-8 py-2 rounded-3xl lg:mt-0 lg:absolute lg:right-20 lg:top-0  '>more information</button>
          </section>
        </motion.main>
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.main
          initial={{ opacity: 0, display: GreenGuitar ? 'block' : 'none' }}
          animate={{ opacity: GreenGuitar ? 1 : 0, display: GreenGuitar ? 'block' : 'none' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={` bg-gradient-to-b   from-[#073926] from-5% to-[#0C0C0C]] to-80% text-white font-quicksand w-full px-3 border-t-[1px]  pb-16`}
        >
          <h1 className='uppercase font-bold text-4xl text-center mt-24'>the newest model</h1>
          <p className='font-[300] text-center mt-8 max-w-[750px] mx-auto'>
            Our newest guitar model offers a stylish design and exceptional sound quality. Perfect for players of all levels, it's a versatile and reliable instrument that will elevate your playing
            experience.
          </p>
          <div className=' -rotate-90 mt-[30%] lg:rotate-0 lg:block lg:w-full lg:mt-8 lg:mx-auto '>
            <img src={GreenGuitarImg} alt='new guitar ' className='w-[73.5%] h-full mx-auto' />
          </div>
          <section className='relative mt-[30%] lg:mt-0'>
            <ul className='flex gap-8 justify-center'>
              <li onClick={chooseGreenGuitar} className='cursor-pointer w-8 h-8 bg-[#00A257] border-[1px] rounded-3xl' tabIndex={0}></li>
              <li onClick={chooseVioletGuitar} className='cursor-pointer w-8 h-8 bg-[#76084C] border-[1px] rounded-3xl' tabIndex={0}></li>
              <li onClick={chooseBlueGuitar} className='cursor-pointer w-8 h-8 bg-[#1D99A1] border-[1px] rounded-3xl' tabIndex={0}></li>
            </ul>
            <button className=' mx-auto mt-8 block  bg-[#1f5139]  border-[1px] border-[#41b24a] px-8 py-2 rounded-3xl lg:mt-0 lg:absolute lg:right-20 lg:top-0 '>more information</button>
          </section>
        </motion.main>
      </AnimatePresence>

      <AnimatePresence mode='wait'>
        <motion.main
          initial={{ opacity: 0, display: VioletGuitar ? 'block' : 'none' }}
          animate={{ opacity: VioletGuitar ? 1 : 0, display: VioletGuitar ? 'block' : 'none' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={` bg-gradient-to-b   from-[#490b4b] from-5% to-[#0C0C0C]] to-80% text-white font-quicksand w-full px-3 border-t-[1px] pb-16`}
        >
          <h1 className='uppercase font-bold text-4xl text-center mt-24'>the newest model</h1>
          <p className='font-[300] text-center mt-8 max-w-[750px] mx-auto'>
            Our newest guitar model offers a stylish design and exceptional sound quality. Perfect for players of all levels, it's a versatile and reliable instrument that will elevate your playing
            experience.
          </p>
          <div className=' -rotate-90 mt-[30%] lg:rotate-0 lg:block lg:w-full lg:mt-8 lg:mx-auto '>
            <img src={VioletGuitarImg} alt='new guitar ' className='w-[80%] h-full mx-auto' />
          </div>
          <section className='relative mt-[30%] lg:mt-0'>
            <ul className='flex gap-8 justify-center'>
              <li onClick={chooseGreenGuitar} className='cursor-pointer w-8 h-8 bg-[#00A257] border-[1px] rounded-3xl' tabIndex={0}></li>
              <li onClick={chooseVioletGuitar} className='cursor-pointer w-8 h-8 bg-[#76084C] border-[1px] rounded-3xl' tabIndex={0}></li>
              <li onClick={chooseBlueGuitar} className='cursor-pointer w-8 h-8 bg-[#1D99A1] border-[1px] rounded-3xl' tabIndex={0}>
                {' '}
              </li>
            </ul>
            <button className='mx-auto block mt-8 bg-[#4e1f3c]  border-[1px] border-[#953a9b] px-8 py-2 rounded-3xl lg:mt-0 lg:absolute lg:right-20 lg:top-0'>more information</button>
          </section>
        </motion.main>
      </AnimatePresence>
    </motion.div>
  );
};

export default New;
