import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
export default function Footer({ carousel, type,thumnail }) {
    const year = new Date().getFullYear();

return(
    <main className="w-full flex justify-center border-2 h-auto bg-black items-start mt-5 p-[2rem] ">
        <div className="w-3/2 flex flex-col   ">
 <p className="font-bold text-[18px] text-yellow-400 leading-10 pt-5"> Our Company Name</p>
  <div  className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xl:grid-cols-4 gap-[10rem] mt-10  " >
 
  <div className="flex flex-col font-bold  text-white">

<p className=" text-[13px] text-yellow-400 "> CUSTOMER SERVICE</p>
<p>Contact us</p>
<p>Track Order</p>
<p>Cancel Order</p>

</div>
<div className="flex flex-col font-bold  text-white">
<p className=" text-[13px] text-yellow-400"> COMPANY</p>
<p>About Us</p>
<p>We're Hiring</p>
<p>Terms & Conditions</p>
<p>Privacy Policy</p>
</div>
<div className="flex flex-col font-bold  text-white">
<p className=" text-[13px] text-yellow-400 "> CONNECT WITH US</p>
<div className="flex gap-1 items-center cursor-pointer"><FaInstagram/><p>Instagram</p></div>
<div className="flex gap-1 items-center cursor-pointer"><FaFacebookSquare/><p>Facebook</p></div>
<div className="flex gap-1 items-center cursor-pointer"><FaTelegram/><p>Telegram</p></div>
<div className="flex gap-1 items-center cursor-pointer"><IoLogoPinterest/><p>Pinterest</p></div>
</div>
<div className="flex flex-col font-bold  text-white">
<p className=" text-[13px] text-yellow-400"> CUSTOMER SERVICE</p>
<p>Contact us</p>
<p>Contact us</p>
<p>Contact us</p>
<p>Contact us</p>
</div>
<div className="flex flex-col font-bold  text-white">
<p className=" text-[13px] text-yellow-400"> 100% SECURE PAYMENT
</p>
<img src="https://images.bewakoof.com/web/secure-payments-image.png" />
</div>

</div>
<div className="w-full flex justify-center font-bold text-[15px] text-yellow-300 mt-5">
    <p>Copy rights © companyName {year} </p>
    </div>
</div>


    </main>
)


}
