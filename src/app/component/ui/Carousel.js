// components/Carousel.js
import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => {
          if (prevSlide === images.length - 1) {
            setIsAtEnd(true);
            setIsAtStart(false);
            return 0;
          } else {
            setIsAtEnd(false);
            setIsAtStart(false);
            return prevSlide + 1;
          }
        });
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [images]);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === images.length - 1) {
          setIsAtEnd(true);
          setIsAtStart(false);
          return 0;
        } else {
          setIsAtEnd(false);
          setIsAtStart(false);
          return prevSlide + 1;
        }
      });
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === 0) {
          setIsAtEnd(false);
          setIsAtStart(true);
          return images.length - 1;
        } else {
          setIsAtEnd(false);
          setIsAtStart(false);
          return prevSlide - 1;
        }
      });
    };
  return (
    <div className="relative w-full lg:h-[35rem] h-[15rem] border-2 border-black  ">
         <div className={`flex h-full  ${isAtStart || isAtEnd ? '' : ' transition-transform duration-1000 ease-out border-2 border-green-500'}`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-auto object-cover  object-center "
          />
        ))}
    
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-transparent text-white font-bold text-lg z-10"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent text-white font-bold text-lg z-10"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
