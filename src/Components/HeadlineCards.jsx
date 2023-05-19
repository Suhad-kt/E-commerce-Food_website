import React from "react";
import HeadlineCardimage_1 from "../assets/headlineBurger-1.jpg";
import HeadlineCardimage_2 from "../assets/headlineBurger-2.jpg";
import HeadlineCardimage_3 from "../assets/headlineBurger-3.jpg";

const HeadlineCards = () => {
  return (
    <div className="max-w-[2685px] mx-auto p-4 py-4 grid md:grid-cols-3 gap-6">
      {/* card ---1*/}
      <div className="rounded-xl bg-[gray] hover:scale-105 duration-300 relative ">
        {/* overlay */}
        <div
          className="absolute w-full h-full
         bg-black/50 rounded-xl text-white"
         >
          <p className="font-bold text-2xl px-2 pt-2">sun's out BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img className="max-h-[160px] md:max-h-[230px] lg:max-h-[300px] xl:max-h-[360px]  w-full object-cover rounded-xl" src={HeadlineCardimage_1} alt="" />
      </div>

      {/* card  ----2 */}
      <div className="rounded-xl bg-[gray] hover:scale-105 duration-300 relative">
        {/* overlay */}
        <div
          className="absolute w-full h-full
         bg-black/50 rounded-xl text-white"
        >
          <p className="font-bold text-2xl px-2 pt-2">sun's out BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img className="max-h-[160px] md:max-h-[230px] lg:max-h-[300px] xl:max-h-[360px]  w-full object-cover rounded-xl" src={HeadlineCardimage_2} alt="" />
      </div>

      {/* card ---3 */}
      <div className="rounded-xl bg-[gray] hover:scale-105 duration-300 relative">
        {/* overlay */}
        <div
          className="absolute w-full h-full
         bg-black/50 rounded-xl text-white"
        >
          <p className="font-bold text-2xl px-2 pt-2">sun's out BOGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            order now
          </button>
        </div>
        <img className="max-h-[160px] md:max-h-[230px] lg:max-h-[300px] xl:max-h-[360px]  w-full object-cover rounded-xl" src={HeadlineCardimage_3} alt="" />
      </div>
    </div>
  );
};

export default HeadlineCards;
