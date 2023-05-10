import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AcusticGuitar from './images/acoustic-guitar-product.png';
import BasessGuitar from './images/basess-guitar-product.png';
import ElectricGuitar from './images/electric-guitar-product.png';
import HollowGuitar from './images/hollow-bodies-guitar-products.png';
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
      <section className='mt-36 max-w-[80%] mx-auto  '>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div>
              <div>
                <img src={slide.url} alt={slide.text} className='mx-auto' />
                <h2 className='text-center uppercase mt-4'>{slide.text}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default ProductsCarousel;
