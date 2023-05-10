import React, { useState } from 'react';
import AcusticGuitar from './images/acoustic-guitar-product.png';
import BasessGuitar from './images/basess-guitar-product.png';
import ElectricGuitar from './images/electric-guitar-product.png';
import HollowGuitar from './images/hollow-bodies-guitar-products.png';
import { text } from 'stream/consumers';

interface Slide {
  url: { [key: string]: string };
  text: string;
}

const Products = () => {
  const slides: Slide[] = [
    { url: { AcusticGuitar }, text: 'Acoustics' },
    { url: { BasessGuitar }, text: 'electric guitars' },
    { url: { ElectricGuitar }, text: 'basses' },
    { url: { HollowGuitar }, text: 'hollow bodies' },
  ];

  return (
    <div className=' text-white font-quicksand w-full px-3 border-t-[1px] bg-[#0C0C0C] '>
      <h1 className='uppercase mt-36 text-4xl font-bold ml-8'>Products</h1>
      <section className='mt-36'>
        <div>
          <div>
            <img src='' alt='' />
          </div>
          <h2 className='uppercase'>Electric guitars</h2>
        </div>
      </section>
    </div>
  );
};

export default Products;
