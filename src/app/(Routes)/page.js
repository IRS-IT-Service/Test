"use client"
import Carousel from "../component/ui/Carousel"
import react, { useState, useRef,useEffect } from "react";
import Slickslider from "../component/ui/Slickslider";
import { CiHeart } from "react-icons/ci";
import Footer from "../component/Footer";

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
            <div className="Trending flex flex-col justify-center items-center ">
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
                <div className="GIF w-full relative ">
  <img className="h-full w-full object-cover object-center  hover:scale-[0.85]  " src="https://images.bewakoof.com/uploads/grid/app/Bwkf-x-IK-RM-Thin-Desktop-banner-strip--1--1707395643.gif" alt="GIF" />
</div>
   <div className="OurBestPicks " >
    <div className="flex flex-col items-center mt-5">
    <h1 className="font-bold text-[1.5rem] text-gray-600">Our Best Picks</h1> 

     <div className="w-full flex justify-center">
      <div className="w-full h-full grid grid-cols-2 gap-2 mx-2">
        <div className="w-[calc(50vw - 1rem)] h-auto border-2 cursor-pointer"> {/* Adjusted width and height for margin */}
        <img className="h-full w-full object-fill object-center " src="https://images.bewakoof.com/uploads/grid/app/720x420-Midsize-bannner-Combos--1--1704012294.jpg" />
        </div>
      {/* Adjusted width and height for margin */}
  
      <div className="w-[calc(50vw - 1rem)] h-auto border-2 cursor-pointer"> {/* Adjusted width and height for margin */}
        <img className="h-full w-full object-fill object-center " src="https://images.bewakoof.com/uploads/grid/app/Official-Merch-store-Desktop-banner-1700470826-1701771559.webp" />
        </div>
        <div className="w-[calc(50vw - 1.5rem)] h-auto border-2 cursor-pointer"> {/* Adjusted width and height for margin */}
        <img className="h-full w-full object-fill object-center " src="https://images.bewakoof.com/uploads/grid/app/Customise-Desktop-midsize-banner-1704439012.jpg" />
        </div>
        <div className="w-[calc(50vw - 1.5rem)] h-auto border-2 cursor-pointer"> {/* Adjusted width and height for margin */}
        <img className="h-full w-full object-fill object-center " src="https://images.bewakoof.com/uploads/grid/app/Sizes-6xl-Plus-Size-Desktop-midsize-Banner-1706690349.jpg" />
        </div>
      </div>
    </div>
    </div>
  </div>
<div className="flex w-full justify-center mt-5">

   <div  className="Cards   mt-2 grid  md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 xxs:grid-cols-1 xl:grid-cols-5 gap-5 group" >
   {Array.from({length:100}).map((_ ,index)=>{
return(

  <div key={index} className="duration-500 w-[14rem] h-[20rem] border-[1px] border-black overflow-hidden cursor-pointer  group-hover:scale-[0.85] hover:!scale-100 ">
  <div className="h-full w-full flex flex-col shadow-md shadow-black/40">
  <div className="Image relative w-full h-[70%] border-2 " >
    <CiHeart  className="absolute top-0 right-0 " />
  <img className="h-full w-full object-contain object-center " src="https://th.bing.com/th/id/OIP.rKxgX-1DoZhtASPPbNGDswHaLH?w=126&h=190&c=7&r=0&o=5&pid=1.7" />
  </div>
  <div className="Descrp p-1">
  <p className="font-bold text-[12px] text-stone-500">
    Our Site Name @
  </p>
  <p className="font-bold text-[10px] text-stone-500 truncate">
    Packing of 2 packs of marks seven aldis ton 30
  </p>
  <div className="flex gap-3">
  <p className="font-bold text-[15px] text-black truncate">
  ₹ 1020
  </p>
  <p className="font-bold text-[12px] text-stone-500 truncate line-through ">
  ₹ 1400
  </p>
  
  </div>
  
  </div>
  <div className="border-2 flex items-center text-[10px] font-bold ml-3 border-black p-0.5 w-20 h-5">
  <p className="text-[10px]">100% cotton</p>
  </div>
  </div>
  </div>
  
 
)
   })
    
 
  
   }
   
   </div>
   </div>

                </div>
      
    <Footer/>
        </main>
    )
}