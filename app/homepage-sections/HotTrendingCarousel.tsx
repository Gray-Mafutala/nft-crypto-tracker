"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  sliders: { img: string; alt: string; id: string }[];
};

const HotTrendingCarousel = ({ sliders }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide + 1 < sliders.length ? prevSlide + 1 : 0
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : sliders.length - 1
    );
  };

  const goToSpecificSlide = (numSlide: number) => setCurrentSlide(numSlide);

  useEffect(() => {
    if (autoPlay === false) return;
    const clear = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide + 1 < sliders.length ? prevSlide + 1 : 0
      );
    }, 2000);

    return () => clearInterval(clear);
  }, [autoPlay, sliders]);

  return (
    <div
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      className="relative w-full h-full"
    >
      {/* left button */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full
        bg-gradient-yellow text-slate-800 active:scale-95 duration-300 ease-out
        hover:text-grey hover:shadow-[0_0px_8px_2px_#cbfe00] z-10"
      >
        <MdKeyboardArrowLeft className="text-[1.5rem] mobileM:text-[2rem]" />
      </button>

      {/* right button */}
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full 
        bg-gradient-yellow text-slate-800 active:scale-95 duration-300 ease-out
        hover:text-grey hover:shadow-[0_0px_8px_2px_#cbfe00] z-10"
      >
        <MdKeyboardArrowRight className="text-[1.5rem] mobileM:text-[2rem]" />
      </button>

      {/* dots navigation */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 
          flex items-center gap-x-[6px] z-10"
      >
        {sliders.map(({ id }, index) => (
          <span
            key={id}
            onClick={() => goToSpecificSlide(index)}
            className={
              index === currentSlide
                ? "h-2 w-5 rounded-md cursor-pointer bg-gradient-yellow"
                : `h-2 w-2 rounded-full cursor-pointer bg-white
                hover:bg-yellow hover:shadow-[0_0px_8px_2px_#cbfe00]
                duration-200`
            }
          ></span>
        ))}
      </div>

      {/* slides */}
      <div
        className="relative flex h-full overflow-x-hidden rounded-3xl
        overflow-hidden"
      >
        {sliders.map(({ img, alt, id }, index) => (
          <Image
            key={id}
            src={img}
            alt={alt}
            className={
              index === currentSlide
                ? `absolute w-full left-0 top-0 object-cover 
                    transition-all duration-500 ease-out hover:scale-110`
                : index > currentSlide
                ? `absolute w-full left-0 top-0 object-cover
                    translate-x-[100%] transition-transform duration-500
                    ease-in-out`
                : `absolute w-full left-0 top-0 object-cover 
                    -translate-x-[100%] transition-transform duration-500
                    ease-in-out`
            }
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
};

export default HotTrendingCarousel;
