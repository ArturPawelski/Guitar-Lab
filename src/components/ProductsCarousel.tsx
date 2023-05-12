import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AcusticGuitar from './images/acoustic-guitar-product.png';
import BasessGuitar from './images/basess-guitar-product.png';
import ElectricGuitar from './images/electric-guitar-product.png';
import HollowGuitar from './images/hollow-bodies-guitar-products.png';

interface Slide {
  url: string;
  text: string;
}

const ProductsCarousel = () => {
  const slides: Slide[] = [
    { url: AcusticGuitar, text: 'Acoustics' },
    { url: BasessGuitar, text: 'basses' },
    { url: ElectricGuitar, text: 'electric guitars' },
    { url: HollowGuitar, text: 'hollow bodies' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    appendDots: (dots: any) => (
      <div>
        <ul className='text-red-500 flex justify-center bg-white bg-opacity-70 py-1 rounded-full shadow-2xl  max-w-[130px] mx-auto'> {dots} </ul>
      </div>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className='my-24 max-w-[80%] mx-auto  '>
        <h1 className='uppercase my-24 text-4xl font-bold '>Products</h1>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <img src={slide.url} alt={slide.text} className='mx-auto' />
              <h2 className='text-center uppercase mt-4 mb-8'>{slide.text}</h2>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default ProductsCarousel;
