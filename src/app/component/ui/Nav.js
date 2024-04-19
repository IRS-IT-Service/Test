"use client";
import react, { useState, useRef,useEffect } from "react";
import Menu from "@/MenuData";
import { IoMdArrowDropup } from "react-icons/io";
import Image from "next/image";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaLock } from "react-icons/fa";

import SubNav from "./SubNav";
const Nav = () => {
  const [activePage, setActivePage] = useState(null);
  const [submenuImage, setSubmenuImage] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openSearch , setOpensearch] = useState(false);
  const [navMenu, setShowNavMenu] = useState(false);
  const handleMouserEnter = (e, index) => {
    setActivePage(e);
    setSubmenuImage(index);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouserleave = () => {
    setActivePage(false);
    setSubmenuImage(false);
  };


  return (
 
  <main className="sticky top-0 z-[100] bg-slate-100">
      <div className="lg:flex hidden mt-1 justify-between  w-full   p-1 shadow-lg   ">
    
      <div className="w-[10rem] flex icon justify-center p-1  ">
        <img
          className="w-[30px] h-[30px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
        />
      </div>
      <div className="navigation w-3/4 ">
        <ul className="flex h-full justify-around items-center   ">
          {Menu.map((item) => {
            return (
              <li
                key={item.id}
                className="cursor-pointer p-2  "
                onMouseEnter={() => handleMouserEnter(item.id)}
                onMouseLeave={handleMouserleave}
              >
                <div className="flex gap-1">
        

                  <p
                    className={`${
                      activePage === item.id ? "text-red-800 font-bold text-[1rem]" : ""
                    }font-bold`}
                  >
                    {" "}
                    {item.name}{" "}
                  </p>
                  
     
            <IoMdArrowDropup className={`${
                activePage === item.id ? "rotate-180 text-red-800  " : "rotate-360"
              } transition-all  duration-[0.5s] ease-in-out text-2xl`} />
                </div>
                <div
                  className={`${
                    activePage === item.id ? "block" : "hidden"
                  } absolute flex left-0 right-0 m-auto shadow-2xl p-4  top-[3.1rem] w-4/5 h-[20rem] z-50 bg-[#ffff] px-2 border-2 cursor-default items-center transition-all  duration-[0.5s] ease-in-out`}
                  onMouseEnter={() => handleMouserEnter(item.id)}
                  onMouseLeave={handleMouserleave}
                >
                  <div className="h-full w-1/2 object-cover object-center">
                    <img
                      src={
                        submenuImage
                          ? item.subMenu && item.subMenu[submenuImage].url
                            ? item.subMenu[submenuImage].url
                            : item.url
                          : item.url
                      }
                      className="w-full h-full"
                    />
                  </div>
                  <div className="w-1/2 flex flex-col items-center ">
                    {item.subMenu &&
                      item.subMenu.map((menuItem, index) => {
                        return (
                          <div>
                            <p className="text-red-800 font-bold text-[1rem]">
                              {menuItem.title}
                            </p>
                            <p
                              key={index}
                              onMouseEnter={() =>
                                handleMouserEnter(item.id, index)
                              }
                              className="cursor-pointer hover:text-red-800"
                            >
                              {menuItem.name}
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
 
      <div className=" flex mr-3 items-center gap-2 Icon-main">
      <div className="w-[20rem]">
      <div className="relative w-full">          
              <FaSearch className="w-[1rem] h-[1rem] absolute top-[0.5rem] left-1.5 fontIcon  " /> 
<input className="w-full rounded-xl indent-[2rem] border-1 border-   py-[0.3rem] borderColor" placeholder="Search for Products , Shows or Characters" />
</div>
      </div>
        <div>
     <PiShoppingCartSimpleBold className="w-[1.5rem] h-[1.5rem]" />
        </div>

        <div>
      <IoLocationOutline className="w-[1.5rem] h-[1.5rem]" />
        </div>
        <div>
      <FaRegUser className="w-[1.2rem] h-[1.2rem]"/>
        </div>
      </div>
      </div>
{/* Mobile Responsive */}

<div className="lg:hidden flex flex-col   icon   w-full   p-1 shadow-lg  ">
  <div className="flex justify-between ">
<div onClick={() => setShowNavMenu(!navMenu)} className=' h-8 pt-3'>
          <div
 
            className={`block bg-black w-7  ${
              navMenu ? 'transform rotate-45' : ''
            } duration-300 h-[2px]`}
          ></div>
          <div
           
            className={`block bg-black w-7  ${
              navMenu ? 'transform -rotate-45' : ''
            } duration-300 ${navMenu ? 'mt-0' : 'mt-2'} h-[2px]`}
          ></div>
        </div>
        <div className="w-[10rem] flex  justify-center p-1  ">
        <img
          className="w-[30px] h-[30px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
        />
      </div>
        <div className=" flex mr-3 items-center gap-2 Icon-main">
          <div>
         < FaSearch className="w-[1.5rem] h-[1.5rem] cursor-pointer hover:text-red-800" onClick={()=>setOpensearch(!openSearch)}/>
          </div>
          <div>
         <PiShoppingCartSimpleBold className="w-[1.5rem] h-[1.5rem] " />   
          </div>
          </div>
          </div>
          <div className={`${openSearch ? "block" : "hidden"}  w-[90%] right-0 left-0 m-auto   `}>
            <div className="relative ">          
              <FaSearch className="w-[1.5rem] h-[1.5rem] absolute top-[0.4rem] left-1.5 text-[#999393]" /> 
<input className="w-full rounded-xl indent-[2rem]   py-[0.3rem]" placeholder="Search for Products , Shows or Characters" />
</div>

          </div>
</div>
<div className={`mobileMenu ${navMenu ? "left-0" : "left-[-500rem]"} transition-all  duration-[0.5s] ease absolute flex top-0 w-full h-[100dvh] bg-[rgba(0,0,0,0.5)] z-[100]`}>
<div className="w-4/5 flex flex-col bg-[#ffff]">
<div className="w-full flex gap-2 h-12 p-2 icon ">
<div className="flex w-1/2  text-[#fff] gap-2 justify-center  bg-[rgba(0,0,0,0.5)] items-center p-2">
  <FaLock className="text-[#fff]" />
<p className=" ">Log In</p>
</div>
<div className="flex w-1/2 text-[#fff] gap-2 bg-[rgba(0,0,0,0.5)] justify-center  items-center p-2">
<IoLocationOutline className="text-[#fff]" />
<p className="">Track</p>
</div>
</div>
<div className="flex flex-col  grow ">
<p className="font-bold text-center fontIcon mt-1 p-2">SHOP BY CATEGORY</p>
<div className="overflow-auto h-[90vh]">
{
  Menu.map((item,index)=>{
    return(
      <div key={index} className="divide-y divide-gray-400 ">
    <SubNav item={item} key={index} />

        </div>
    )

  })
}
</div>
</div>
</div>
<div className="grow relative" onClick={()=>setShowNavMenu(false)}>
<ImCross className="text-[#d1d5db] absolute top-[6rem] right-[4rem] hover:text-[#eee] cursor-pointer" />
</div>
</div>
  
    </main> 
  );
};

export default Nav;
