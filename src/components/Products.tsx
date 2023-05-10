import React, { useState } from 'react';
import AcusticGuitar from './images/acoustic-guitar-product.png';
import BasessGuitar from './images/basess-guitar-product.png';
import ElectricGuitar from './images/electric-guitar-product.png';
import HollowGuitar from './images/hollow-bodies-guitar-products.png';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import ProductsCarousel from './ProductsCarousel';

interface Slide {
  url: string;
  text: string;
}

const Products = () => {
  const slides: Slide[] = [
    { url: AcusticGuitar, text: 'Acoustics' },
    { url: BasessGuitar, text: 'electric guitars' },
    { url: ElectricGuitar, text: 'basses' },
    { url: HollowGuitar, text: 'hollow bodies' },
  ];

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=' text-white font-quicksand px-3 border-t-[1px] bg-[#0C0C0C] min-h-[1000px] '>
      <h1 className='uppercase mt-36 text-4xl font-bold ml-8'>Products</h1>

      <ProductsCarousel />

      {/* <section className='mt-36'>
        <div className=''>
          <div className='relative max-w-[300px] group '>
            <img src={slides[currentIndex].url} alt='' />
            <BsChevronCompactLeft onClick={prevSlide} size={35} className='hidden group-hover:block absolute top-[50%] left-0' />
            <BsChevronCompactRight onClick={nextSlide} size={35} className='hidden group-hover:block absolute top-[50%] right-0' />
          </div>
          <h2 className='uppercase  '>{slides[currentIndex].text}</h2>
        </div>
      </section> */}
    </div>
  );
};

export default Products;
