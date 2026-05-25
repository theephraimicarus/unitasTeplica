// components/Slideshow.js
import Image from "next/image";
import { useState, useEffect } from 'react';
import Image1 from "../../public/assets/heroslideshowimage.jpg"
import Image2 from "../../public/assets/kraftimage.jpg"
import Image3 from "../../public/assets/lwc.jpg"
import Image4 from "../../public/assets/warehouse1.jpg"
import Image5 from "../../public/assets/warehouse2.jpg"

export default function Slideshow(){

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5
];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-24 fade-in-up">
      <div className="overflow-hidden rounded-lg w-full h-full">
        <div className="relative w-full h-full">
          <Image
            key={currentSlide}
            src={images[currentSlide]}
            alt="slideshow image"
            fill
            className="object-cover lg:rounded-bl-[10px] lg:rounded-tr-[10px] image-hover-effect transition-opacity duration-500 ease-smooth"
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 976px) 100vw, 100vw"
            priority={currentSlide === 0}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2 p-3 bg-bluenitas hover:bg-opacity-80 text-whitenitas rounded-full transition-all duration-300 ease-smooth focus:outline-none focus:ring-2 focus:ring-whitenitas shadow-md-depth hover:shadow-lg-depth"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <span className="text-lg font-bold">{'<'}</span>
        </button>

        <button
          className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2 p-3 bg-bluenitas hover:bg-opacity-80 text-whitenitas rounded-full transition-all duration-300 ease-smooth focus:outline-none focus:ring-2 focus:ring-whitenitas shadow-md-depth hover:shadow-lg-depth"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="text-lg font-bold">{'>'}</span>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ease-smooth ${
                index === currentSlide 
                  ? 'bg-whitenitas w-6' 
                  : 'bg-whitenitas bg-opacity-50 hover:bg-opacity-75'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

