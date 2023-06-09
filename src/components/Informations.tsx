import React from 'react';
import Icon1 from './images/contact icon.png';
import Icon2 from './images/faq icon.png';
import Icon3 from './images/opinions icon.png';
import Icon4 from './images/catalogs icon.png';
import { motion } from 'framer-motion';

const Informations = () => {
  return (
    <div className='text-white font-quicksand px-3 pb-16 bg-[#0C0C0C] mt-[-2rem] md:mt-0  md:pb-20 ' id='informations'>
      <div className=' mx-auto max-w-[95%] sm:max-w-[85%] md:max-w-[80%]'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='uppercase text-3xl sm:text-4xl font-bold text-center md:text-left  '
        >
          informations
        </motion.h1>
      </div>
      <section className='max-w-[80%] mx-auto mt-16 gap-12 grid grid-cols-2 place-items-center md:grid-cols-4   '>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className='grid place-items-center gap-4 cursor-pointer  '
          tabIndex={0}
        >
          <div className='bg-[#0C0C0C] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.1)] shadow-[#8e8e8e] p-3 w-[120px] h-[120px] rounded-full transition-all  hover:translate-y-[-10px] '>
            <img src={Icon1} alt='' className='w-full h-full' />
          </div>
          <h2>CONTACT</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='grid place-items-center gap-4 cursor-pointer '
          tabIndex={0}
        >
          <div className='bg-[#0C0C0C] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.1)] shadow-[#8e8e8e] p-3 w-[120px] h-[120px] rounded-full  transition-all  hover:translate-y-[-10px]'>
            <img src={Icon2} alt='' className='w-full h-full' />
          </div>
          <h2>FAQ</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className='grid place-items-center gap-4 cursor-pointer'
          tabIndex={0}
        >
          <div className='bg-[#0C0C0C] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.1)] shadow-[#8e8e8e] p-5 w-[120px] h-[120px] rounded-full transition-all  hover:translate-y-[-10px] '>
            <img src={Icon3} alt='' className='w-full h-full' />
          </div>
          <h2>OPINIONS</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className='grid place-items-center gap-4 cursor-pointer '
          tabIndex={0}
        >
          <div className='bg-[#0C0C0C] shadow-[inset_0px_3px_4px_rgba(0,0,0,0.1)] shadow-[#8e8e8e] p-3 w-[120px] h-[120px] rounded-full transition-all  hover:translate-y-[-10px]'>
            <img src={Icon4} alt='' className='w-full h-full' />
          </div>
          <h2>CATALOGS</h2>
        </motion.div>
      </section>
    </div>
  );
};

export default Informations;
