import React from 'react';
import Icon1 from './images/contact icon.png';
import Icon2 from './images/faq icon.png';
import Icon3 from './images/opinions icon.png';
import Icon4 from './images/catalogs icon.png';

const Informations = () => {
  return (
    <div className='text-white font-quicksand px-3 pb-16 bg-[#0C0C0C] mt-[-2rem] md:mt-0  md:pb-20 ' id='informations'>
      <div className=' mx-auto max-w-[95%] sm:max-w-[85%] md:max-w-[80%]'>
        <h1 className='uppercase text-3xl sm:text-4xl font-bold text-center md:text-left  '>informations</h1>
      </div>
      <section className='max-w-[80%] mx-auto mt-16 gap-12 grid grid-cols-2 place-items-center md:grid-cols-4   '>
        <div className='grid place-items-center gap-4'>
          <div className='bg-[#0C0C0C] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.1)] shadow-[#8e8e8e] p-3 w-[120px] h-[120px] rounded-full '>
            <img src={Icon1} alt='' className='w-full h-full' />
          </div>
          <h2>CONTACT</h2>
        </div>
        <div className='grid place-items-center gap-4'>
          <div className='bg-[black] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.1)] shadow-[#8e8e8e] p-3 w-[120px] h-[120px] rounded-full '>
            <img src={Icon2} alt='' className='w-full h-full' />
          </div>
          <h2>FAQ</h2>
        </div>
        <div className='grid place-items-center gap-4'>
          <div className='bg-[#0C0C0C] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.1)] shadow-[#8e8e8e] p-5 w-[120px] h-[120px] rounded-full '>
            <img src={Icon3} alt='' className='w-full h-full' />
          </div>
          <h2>OPINIONS</h2>
        </div>
        <div className='grid place-items-center gap-4'>
          <div className='bg-[#0C0C0C] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.1)] shadow-[#8e8e8e] p-3 w-[120px] h-[120px] rounded-full '>
            <img src={Icon4} alt='' className='w-full h-full' />
          </div>
          <h2>CATALOGS</h2>
        </div>
      </section>
    </div>
  );
};

export default Informations;
