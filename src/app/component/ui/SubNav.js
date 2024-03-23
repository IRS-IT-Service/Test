'use client'
import react,{useState , useEffect} from 'react'
import MenuData from '../../../../src/MenuData'
import Link from 'next/link'
export default function subNav({item}){
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
      <div className="text-[15px]  text-black ">
        {subChildren.map((subItem ,index) => (
          <Link
            key={index}
            className=" py-3 sidebar_hover  hover:text-black hover:cursor-pointer overflow-hidden flex "
            to={subItem.path}
          >
        
            <div>
              <span>{subItem.name}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  };
  if (item.childrens) {
    return (
      <div className="flex flex-col  text-white overflow-hidden " key={index}>
        <div
          className="flex items-center justify-between  sidebar_background border-b  border-black p-4 px-2 hover:cursor-pointer"
          onClick={() => handleOpenChildren(item.id)}
        >

          <div>{item.title}</div>
          <div>
            <i
              className={` fas fa-angle-down ${
                subChildren.length > 0 ? "rotate-180" : "rotate-360"
              } transition-all  duration-[0.8s] ease-in-out`}
            ></i>
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
      <div className="flex items-center overflow-hidden ">
      
        {item.title}
      </div>
    );
  }
}