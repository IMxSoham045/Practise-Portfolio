import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-green-900 rounded-full text-white px-6 py-4 relative ">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-4 items-center">
          <h1 className="bg-yellow-400 px-4 py-2 rounded-full text-purple-700 font-bold">
            S
          </h1>
          <h1 className="font-bold text-xl">Soham</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <a
            href="#home"
            className="hover:text-yellow-500 hover:underline transition duration-300"
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-yellow-500 hover:underline transition duration-300"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-yellow-500 hover:underline transition duration-300"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-yellow-500 hover:underline transition duration-300"
          >
            About
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-white/65 px-5 py-2 rounded-lg border hover:bg-orange-600 transition-colors hover:border-white cursor-pointer font-semibold hover:scale-105">
            Contact Me
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-green-900 rounded-2xl mt-2 px-6 py-4 flex flex-col gap-4 font-semibold z-50 shadow-lg">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-500 transition"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-500 transition"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-500 transition"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-500 transition"
          >
            About
          </a>
          <button className="bg-white/65 px-5 py-2 rounded-lg border hover:bg-orange-600 transition-colors cursor-pointer font-semibold w-fit">
            Contact Me
          </button>
        </div>
      )}
    </section>
  );
};

export default Navbar;
