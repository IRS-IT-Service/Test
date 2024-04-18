'use client'
import react,{useState , useEffect} from 'react'
import MenuData from '../../../../src/MenuData'
import Link from 'next/link'
import { IoMdArrowDropup } from "react-icons/io";
import {usePathname, useRouter} from 'next/navigation'
export default function subNav({item}){

  const pathname = usePathname()

const [subChildren , setSubChildren] = useState([])

useEffect(() =>{
    updateSubchildren(subChildren)
},[subChildren])

const handleOpenChildren = (id) => {
    const currentItem = MenuData.find(
      (sidebarItem) => sidebarItem.id === id
    );
    if (currentItem && currentItem.subMenu) {
      if (subChildren.length > 0) {
        setSubChildren([]);
      } else {
        const child = currentItem.subMenu.map((item) => item);
        setSubChildren(child);
      }
    }
  };
  const updateSubchildren = (subChildren) => {
    return (
      <div className="text-[15px] text-black">
      {subChildren.map((subItem, index) =>
        !subItem.title && (
          <Link
            key={index}
            className={`${pathname === subItem.path ? "bg-gray-500 text-white" : ""} py-1.5 sidebar_hover hover:text-white hover:cursor-pointer hover:bg-gray-400 hover:text-[#fff] overflow-hidden flex`}
            href={subItem.path || '#'} // Use 'to' instead of 'href'
          >
            <div className='ml-10'>
              <span>{subItem.name}</span>
            </div>
          </Link>
        )
      )}
    </div>
    );
  };
  if (item.subMenu) {
    return (
      <div className="flex flex-col  text-black overflow-hidden " >
        <div
          className="flex items-center justify-between  sidebar_background border-b hover:text-red-500 border-[gray] p-2 px-2 hover:cursor-pointer"
          onClick={() => handleOpenChildren(item.id)}
        >

          <div className={`font-bold ${ subChildren.length > 0 ? "text-red-500" : ""} `}>{item.name}</div>
          <div>
            <IoMdArrowDropup
              className={` hover:text-red-500 ${ subChildren.length > 0 ? "text-red-500" : ""} ${
                subChildren.length > 0 ? "rotate-180" : "rotate-360"
              } transition-all  duration-[0.5s] ease-in-out w-[1.2rem]`}
            ></IoMdArrowDropup>
          </div>
        </div>
        <div
          className={`transition-all duration-[100] ease-in-out ${
            subChildren.length > 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          {subChildren.length > 0 && updateSubchildren(subChildren)}
        </div>
      </div>
    );
  } else {
    return (
      <div className=" font-bold items-center overflow-hidden border-b hover:text-red-500 border-[gray] p-2 px-2 cursor-pointer">
      
        {item.name}
      </div>
    );
  }
}