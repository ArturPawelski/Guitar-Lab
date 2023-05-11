import React, { useState } from 'react';

import ProductsCarousel from './ProductsCarousel';

const Products = () => {
  return (
    <div className=' text-white font-quicksand px-3 border-t-[1px] bg-[#0C0C0C] min-h-[1000px] '>
      <ProductsCarousel />
    </div>
  );
};

export default Products;
