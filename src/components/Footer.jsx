import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-6 py-10">
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
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-yellow-400 mb-1">Quick Links</h3>
          {["Home", "Services", "Projects", "About"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-yellow-400 transition text-sm w-fit"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-yellow-400 mb-1">Contact</h3>
          <a href="" className="text-gray-300 text-sm">
            chitraosoham1845@gmail.com
          </a>
          <p className="text-gray-300 text-sm">Maharashtra, India</p>
          <button className="mt-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition w-fit text-sm">
            Hire Me
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/20 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Soham Chitrao. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
