import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { SiVexxhost } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BiLogoVk } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
function Social() {
  return (
<>
<div className="">
    <h1 className='text-2xl font-semibold px-3'>Social Plugin</h1>
</div>
<div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 p-4">
    
  <p
    className="p-2 text-center group flex items-center justify-center text-white hover:text-black"
    style={{ backgroundColor: "#ff0000" }}
  >
    <FaFacebookF className="group text-white-hover:text-black" size={30} />
  </p>
  <p
    className="p-2 text-center group flex items-center justify-center hover:text-black"
    style={{ backgroundColor: "#00acee" }}
  >
    <SiVexxhost className="group-hover:text-black" size={30} />
  </p>
  <p
    className="p-2 text-center group flex items-center justify-center hover:text-black"
    style={{ backgroundColor: "#3fbb50" }}
  >
    <FaWhatsapp className="group-hover:text-black" size={30} />
  </p>
  <p
    className="p-2 text-center group flex items-center justify-center hover:text-black"
    style={{ backgroundColor: "#ff4500" }}
  >
    <FaReddit className="group-hover:text-black" size={30} />
  </p>
  <p
    className="p-2 text-center group flex items-center justify-center hover:text-black"
    style={{ backgroundColor: "#ca2127" }}
  >
    <FaPinterest className="group-hover:text-[#000]" size={30} />
  </p>
  <p
    className="p-2 text-center group flex items-center justify-center hover:text-[#000]"
    style={{ backgroundColor: "#4a76a8" }}
  >
    <BiLogoVk className="group-hover:text-[#000]" size={30} />
  </p>
  <p
    className="p-2 text-center group flex items-center justify-center text-white hover:text-[#000]"
    style={{ backgroundColor: "#4d5ed4" }}
  >
    <FaInstagram className="group text-white-hover:text-[#000]" size={30} />
  </p>
  <p
    className="p-2 text-center group flex items-center justify-center text-white hover:text-[#000]"
    style={{ backgroundColor: "#f50000" }}
  >
    <IoLogoYoutube className="group text-white-hover:text-[#000]" size={30} />
  </p>
</div>
</>



  )
}

export default Social