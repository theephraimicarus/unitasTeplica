// components/Slideshow.js
import Image from "next/image";
import { useState, useEffect } from 'react';
import Image1 from "../../public/assets/heroslideshowimage.jpg"
import Image2 from "../../public/assets/kraftimage.jpg"
import Image3 from "../../public/assets/lwc.jpg"

export default function Slideshow(){

const images = [
  Image1,
  Image2,
  Image3,
  // Add more image URLs here
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative h-full lg:h-[600px] lg:flex lg:mt-24">
      <div className="overflow-hidden rounded-lg">
      <Image
            src={images[currentSlide]}
            alt="hero image"
            className="object-cover lg:rounded-bl-[10px] lg:hover:rounded-bl-[50px] lg:rounded-tr-[10px] lg:hover:rounded-tr-[50px]"
          />
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
          onClick={prevSlide}
        >
          {'<'}
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
          onClick={nextSlide}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

