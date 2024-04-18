"use client"
import Carousel from "../component/ui/Carousel"
import react, { useState, useRef,useEffect } from "react";
import Slickslider from "../component/ui/Slickslider";

export default function Home(){
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [isFlipped, setIsFlipped] = useState(false);
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

  console.log(isFlipped)

const Image = ["https://www.redwolf.in/image/cache/catalog/banners/redwolf-basics-slider-1920-1920x450.jpg?m=1710297025","https://www.redwolf.in/image/cache/catalog/sliders/t-shirts-for-women-slider-1920-1920x450.jpg?m=1710298060","https://www.redwolf.in/image/cache/catalog/sliders/fullsleeve-t-shirts-slider-1920-1920x450.jpg?m=1710473064","https://www.redwolf.in/image/cache/catalog/marketplace/chess-dot-com/chess-dot-com-slider-1920-1920x450.jpg?m=1711967013","https://www.redwolf.in/image/cache/catalog/sliders/t-shirts-india-slider-1920-1920x450.jpg?m=1710306142"]

const Images = [{
  Front:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-OS-T-Shirts-1706511994.jpg",
  Back:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350-Classic-Fit-T-Shirts-1707280970.jpg"
},
{
  Front:"https://images.bewakoof.com/uploads/grid/app/3rd-Jan-2024-Oversized-T--shirts-1704270296-1706511259.webp",
  Back:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-240x350--2--1706509179.jpg"
},
{
  Front:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-men-1706512292.jpg",
  Back:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Jeans-1704181405.jpg"
},
{
  Front:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Casual-Pants-1706509180.jpg",
  Back:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Joggers-1706509180.jpg"
},
{
  Front:"https://images.bewakoof.com/uploads/grid/app/trending-category-icons-Cargos-men-1706511996.jpg",
  Back:"https://images.bewakoof.com/uploads/grid/app/Pajamas-trending-category-icons-240x350-1706514429.jpg"
},
]

    return(
        <main>
<div className="flex flex-col">
            <div className="carousel mt-2">
                <Slickslider carousel= {Image} type={"main"} />
           
               
            </div>
            <div className="Trending flex flex-col justify-center items-center">
            <h1 className="font-bold text-[1.5rem] text-gray-600">TRENDING CATEGORIES</h1>

          
        <div className="w-full flex justify-center  overflow-auto py-5">

           
            {/* <Slickslider thumnail = {Images} type={"other"} /> */}
       
          {  
          Images.map((item ,index) => {
              return (
                <div key={index} className="w-3/2 h-full flex flex-col justify-center   ">
                  <div className="group w-[14rem] h-[20rem] mx-2 [prespective:1000px] cursor-pointer">
                    <div className="relative h-full w-full shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0">
                        <img className="h-full w-full object-contain object-center shadow-md shadow-black/40" src={item.Front} alt="Front" />
                      </div>
                      <div className="absolute inset-0 h-full w-full text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <img className="h-full w-full object-cover object-center shadow-md shadow-black/40" src={item.Back} alt="Back" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <span className="">Example</span>
                  </div>
      
                </div>
              );
            })
          }
            </div>
                </div>
   <div className="GIF w-full">
<img className="h-full w-full object-cover object-center" src="https://images.bewakoof.com/uploads/grid/app/Bwkf-x-IK-RM-Thin-Desktop-banner-strip--1--1707395643.gif" />
   </div>
   <div className="Cards w-full" >

   </div>
                </div>
      
    
        </main>
    )
}