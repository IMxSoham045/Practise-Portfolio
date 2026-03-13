import { Facebook, Instagram, X } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-6 py-10" id="#footer">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="bg-yellow-400 px-4 py-2 rounded-full text-purple-700 font-bold text-lg">
              S
            </span>
            <span className="font-bold text-xl">Soham</span>
          </div>
          <p className="text-gray-300 text-sm max-w-xs">
            Frontend developer crafting clean, modern web experiences from
            Maharashtra, India.
          </p>
          <div className="flex items-center gap-2">
            <Instagram className="text-pink-500 hover:text-pink-600 cursor-pointer" />
            <Facebook className="text-[#1877F2] cursor-pointer hover:text-[#064ca7]" />
            <X className="text-white font-bold border border-white bg-black rounded-lg cursor-pointer hover:bg-black/45" />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl text-yellow-400 mb-1">
            Quick Links
          </h3>
          {["Home", "Services", "Projects", "About"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-yellow-400 transition text-md w-fit"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl text-yellow-400 mb-1">Contact</h3>
          <a href="" className="text-gray-300 text-md">
            chitraosoham1845@gmail.com
          </a>
          <p className="text-gray-300 text-md">Maharashtra, India</p>
          <button className="mt-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-transparent hover:border hover:text-white hover:border-yellow-400 transition w-fit text-sm cursor-pointer">
            Hire Me
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/20 mt-10 pt-6 text-center text-white text-sm">
        © {new Date().getFullYear()} Soham Chitrao. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
