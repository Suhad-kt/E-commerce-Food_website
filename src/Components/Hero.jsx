import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Hero = () => {
  const Slide = [
    {
      url: "https://images.pexels.com/photos/750075/pexels-photo-750075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/2702674/pexels-photo-2702674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      url: "https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [CurrentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = CurrentIndex === 0;
    const newIndex = isFirstSlide ? Slide.length - 1 : CurrentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(newIndex);
  };

  const nextSlide = () => {
    const lastindex = CurrentIndex === Slide.length - 1;
    const newIndex = lastindex ? 0 : CurrentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [nextSlide]); // Empty dependency array to run the effect only once
 
  return (
    <div className="max-w-[2685px] h-[350px] md:h-[500px]  lg:h-[600px] xl:h-[700px] 2xl:h-[800px]  mx-auto p-4 relative group">
      <div
        style={{ backgroundImage: `url(${Slide[CurrentIndex].url})` }}
        className=" w-full h-full rounded-2xl bg-center bg-cover duration-500"
       >
        {/* left arrow */}
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute -translate-x-0 -translate-y-1/2 ease-in top-2/4 left-6 bg-black/20 rounded-lg p-2 text-white text-2xl cursor-pointer hover:text-black hover:bg-black/30 hover:scale-x-105 "
        >
          <BsChevronCompactLeft size={30} />
        </div>

        {/* right arrow */}
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute -translate-x-0 -translate-y-1/2 ease-in top-2/4 right-6 bg-black/20 rounded-lg p-2 text-white text-2xl cursor-pointer hover:text-black hover:bg-black/30 hover:scale-x-105"
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
      {/* bottom slider movement */}
      <div className="absolute bottom-9 right-0 left-0">
        <div className="flex flex-row justify-center items-center gap-3">
          {Slide.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                CurrentIndex === i ? "p-2" : "opacity-30"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
