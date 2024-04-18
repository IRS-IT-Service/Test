import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

export default function Slickslider({ carousel, type,thumnail }) {


    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className} ml-10`} >
                <MdOutlineArrowBackIos className="arrows" style={{ color: "white" }} />
            </div>
        );
    };

    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div onClick={onClick} className={`arrow ${className} mr-10`} >
                <MdArrowForwardIos className="arrows" style={{ color: "white" }} />
            </div>
        );
    };

    const settingsMain = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const settingOther = {
    dots: false,
    infinite: false,
    arrows:false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1560,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false
        }
      },
    {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
   
   
    ]
    };

    return (
      <div className="slick-slider">
        <Slider {...(type === "main" ? settingsMain : settingOther)}>
          
          {type === "main" ? carousel.map((image, index) => (
            <div key={index}>
              <img className="w-full" src={image} alt={`Slide ${index}`} />
            </div>
          )) :      
          thumnail.map((item ,index) => {
              return (
                <div key={index} className="w-full h-full flex justify-center">
                  <div className="group w-[14rem] h-[20rem] md:w-[14rem] md:[20rem] lg:w-[16rem] xl:w-[18rem] [prespective:1000px] cursor-pointer">
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
        </Slider>
      </div>
    );
    
}
