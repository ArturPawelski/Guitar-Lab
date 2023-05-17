import React from 'react';
import { motion } from 'framer-motion';
import ProductsCarousel from './ProductsCarousel';

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className=' text-white font-quicksand px-3 border-t-[1px] bg-[#0C0C0C]  '
      id='products'
    >
      <ProductsCarousel />
    </motion.div>
  );
};

export default Products;
