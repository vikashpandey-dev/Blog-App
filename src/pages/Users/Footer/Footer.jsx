import { FaFacebookF } from "react-icons/fa";
import { SiVexxhost } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BiLogoVk } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section: Text */}
        <div className="text-center md:text-left">
          <p className="mb-2">Created with ♥ by Omtemplates</p>
        </div>

        {/* Middle Section: Links */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="/" className="">Home</a>
          <a href="/about" className="">About</a>
          <a href="/contact" className="">Contact</a>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="grid grid-cols-4 gap-2 p-4">
    
    <p
      className="p-2 text-center rounded-full group flex items-center justify-center text-white hover:text-black"
      style={{ backgroundColor: "#ff0000" }}
    >
      <FaFacebookF className="group text-white-hover:text-black" size={30} />
    </p>
    <p
      className="p-2 text-center rounded-full group flex items-center justify-center hover:text-black"
      style={{ backgroundColor: "#00acee" }}
    >
      <SiVexxhost className="group-hover:text-black" size={30} />
    </p>
    <p
      className="p-2 text-center rounded-full group flex items-center justify-center hover:text-black"
      style={{ backgroundColor: "#3fbb50" }}
    >
      <FaWhatsapp className="group-hover:text-black" size={30} />
    </p>
    <p
      className="p-2 text-center rounded-full group flex items-center justify-center hover:text-black"
      style={{ backgroundColor: "#ff4500" }}
    >
      <FaReddit className="group-hover:text-black" size={30} />
    </p>
  
  </div>
      </div>
    </footer>
  );
}

export default Footer;
