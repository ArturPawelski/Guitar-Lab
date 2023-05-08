import React, { useState } from 'react';
import BlueGuitarImg from './images/new-model-blue.png';
import GreenGuitarImg from './images/new-guitar-green.png';
import VioletGuitarImg from './images/new-model-violet.png';

const New = () => {
  const [blueGuitar, setBlueGuiatr] = useState<boolean>(true);
  const [GreenGuitar, setGreenGuiatr] = useState<boolean>(false);
  const [VioletGuitar, setVioletGuiatr] = useState<boolean>(false);

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
    <>
      {blueGuitar && (
        <main className='  bg-gradient-to-b   from-[#094349] from-5% to-[#0C0C0C]] to-80% text-white font-quicksand w-full px-2 border-t-[1px] min-h-[750px]'>
          <h1 className='uppercase font-bold text-4xl text-center mt-36'>the newest model</h1>
          <p className='font-[300] text-center mt-16 max-w-[750px] mx-auto'>
            Our newest guitar model offers a stylish design and exceptional sound quality. Perfect for players of all levels, it's a versatile and reliable instrument that will elevate your playing
            experience.
          </p>
          <div className=' hidden lg:block lg:w-full lg:mt-8 lg:mx-auto '>
            <img src={BlueGuitarImg} alt='new guitar ' className='w-[80%] h-full mx-auto' />
          </div>
          <section className='relative'>
            <ul className='flex gap-8 justify-center'>
              <li onClick={chooseGreenGuitar} className='cursor-pointer w-8 h-8 bg-[#00A257] border-[1px] rounded-3xl'></li>
              <li onClick={chooseVioletGuitar} className='cursor-pointer w-8 h-8 bg-[#76084C] border-[1px] rounded-3xl'></li>
              <li onClick={chooseBlueGuitar} className='cursor-pointer w-8 h-8 bg-[#1D99A1] border-[1px] rounded-3xl'></li>
            </ul>
            <button className=' absolute right-20 top-0 bg-[#134548]  border-[1px] border-[#1D99A1] px-8 py-2 rounded-3xl '>more information</button>
          </section>
        </main>
      )}

      {GreenGuitar && (
        <main className='  bg-gradient-to-b   from-[#073926] from-5% to-[#0C0C0C]] to-80% text-white font-quicksand w-full px-2 border-t-[1px] min-h-[750px]'>
          <h1 className='uppercase font-bold text-4xl text-center mt-36'>the newest model</h1>
          <p className='font-[300] text-center mt-16 max-w-[750px] mx-auto'>
            Our newest guitar model offers a stylish design and exceptional sound quality. Perfect for players of all levels, it's a versatile and reliable instrument that will elevate your playing
            experience.
          </p>
          <div className=' hidden lg:block lg:w-full lg:mt-8 lg:mx-auto '>
            <img src={GreenGuitarImg} alt='new guitar ' className='w-[73.5%] h-full mx-auto' />
          </div>
          <section className='relative'>
            <ul className='flex gap-8 justify-center'>
              <li onClick={chooseGreenGuitar} className='cursor-pointer w-8 h-8 bg-[#00A257] border-[1px] rounded-3xl'></li>
              <li onClick={chooseVioletGuitar} className='cursor-pointer w-8 h-8 bg-[#76084C] border-[1px] rounded-3xl'></li>
              <li onClick={chooseBlueGuitar} className='cursor-pointer w-8 h-8 bg-[#1D99A1] border-[1px] rounded-3xl'></li>
            </ul>
            <button className=' absolute right-20 top-0 bg-[#134548]  border-[1px] border-[#1D99A1] px-8 py-2 rounded-3xl '>more information</button>
          </section>
        </main>
      )}

      {VioletGuitar && (
        <main className='  bg-gradient-to-b   from-[#490b4b] from-5% to-[#0C0C0C]] to-80% text-white font-quicksand w-full px-2 border-t-[1px] min-h-[750px]'>
          <h1 className='uppercase font-bold text-4xl text-center mt-36'>the newest model</h1>
          <p className='font-[300] text-center mt-16 max-w-[750px] mx-auto'>
            Our newest guitar model offers a stylish design and exceptional sound quality. Perfect for players of all levels, it's a versatile and reliable instrument that will elevate your playing
            experience.
          </p>
          <div className=' hidden lg:block lg:w-full lg:mt-8 lg:mx-auto '>
            <img src={VioletGuitarImg} alt='new guitar ' className='w-[80%] h-full mx-auto' />
          </div>
          <section className='relative'>
            <ul className='flex gap-8 justify-center'>
              <li onClick={chooseGreenGuitar} className='cursor-pointer w-8 h-8 bg-[#00A257] border-[1px] rounded-3xl'></li>
              <li onClick={chooseVioletGuitar} className='cursor-pointer w-8 h-8 bg-[#76084C] border-[1px] rounded-3xl'></li>
              <li onClick={chooseBlueGuitar} className='cursor-pointer w-8 h-8 bg-[#1D99A1] border-[1px] rounded-3xl'></li>
            </ul>
            <button className=' absolute right-20 top-0 bg-[#134548]  border-[1px] border-[#1D99A1] px-8 py-2 rounded-3xl '>more information</button>
          </section>
        </main>
      )}
    </>
  );
};

export default New;
