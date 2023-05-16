import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill, BsHeart } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#52baff] to-[#ff0000a6] max-w-[2685px]  mx-auto flex justify-around items-center p-4">
      {/* left side */}
      <div className="flex items-center">
        <div onClick={() => setnav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-base font-medium m-2 first-letter:text-[#a80e0e]  md:text-2xl xl:text-4xl ">Burger
        <span>Spot</span>
        </h1>
        <div className="hidden lg:flex items-center bg-[gray] rounded-full p-1 text-[18px]">
          <p className="bg-black rounded-full p-2 text-white">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] 2xl:w-[600px] xl:py-2">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none focus:w-14 xl:p-1"
          type="text"
          placeholder="search foods "
          
        />
      </div>

      {/* cart buttons */}
      <div className="text-[black] flex items-center px-2 md:gap-5">
        <BsFillCartFill size={25} className="m-2 hover:fill-[#009dff] "/>
        <BsHeart size={25} className="m-2 hover:fill-[#fa0000]" />
      </div>

      {/* mobile menu */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 " onClick={()=>setnav(!nav)}></div>
      ) : (
        ""
      )}
      {/* side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[270px] h-screen bg-gradient-to-b from-[#adeef7] to-white z-10 duration-700 ease-in"
            : "fixed top-0 -left-full w-[270px] h-screen z-10 duration-700 ease-in"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
          onClick={() => setnav(!nav)}
        />
        <h2 className="text-3xl first-letter:text-[#d800c6aa] p-4 font-extrabold ">
          Burgerspot
        </h2>
        <div>
          <ul className="flex flex-col p-4 text-black">
            <li className="text-xl px-2 py-2 flex bg-[#0a0a91] text-white rounded-md mt-3">
              <TbTruckDelivery size={22} className="mr-4" />
              orders
            </li>
            <li className="text-xl px-2 py-2 flex hover:bg-gray-700 rounded-md hover:text-white cursor-pointer mt-3  focus:text-white  ">
              <MdFavorite size={22} className="mr-4" />
              Favourite
            </li>
            <li className="text-xl px-2 py-2 flex hover:bg-gray-700 rounded-md hover:text-white cursor-pointer mt-3  ">
              <FaWallet size={22} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl px-2 py-2 flex hover:bg-gray-700 rounded-md hover:text-white cursor-pointer mt-3  ">
              <MdHelp size={22} className="mr-4" />
              Help
            </li>
            <li className="text-xl px-2 py-2 flex hover:bg-gray-700 rounded-md hover:text-white cursor-pointer mt-3  ">
              <AiFillTag size={22} className="mr-4" />
              Promoters
            </li>
            <li className="text-xl px-2 py-2 flex hover:bg-gray-700 rounded-md hover:text-white cursor-pointer mt-3  ">
              <BsFillSaveFill size={22} className="mr-4" />
              Best Ones
            </li>
            <li className="text-xl px-2 py-2 flex hover:bg-gray-700 rounded-md hover:text-white cursor-pointer mt-3  ">
              <FaUserFriends size={22} className="mr-4" />
              invite friends
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
