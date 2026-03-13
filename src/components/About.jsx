import { ArrowRight, LineDotRightHorizontal } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <section className="bg-orange-400 min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="bg-yellow-200 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center relative">
            <img
              src="./src/assets/profile.webp"
              className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full relative z-10 object-cover object-top"
            />

            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute font-medium top-4 left-2 sm:top-8 sm:left-6 bg-yellow-500 text-black border-2 border-white text-md sm:text-sm px-3 py-1 rounded-full shadow z-10"
            >
              UX / UI Design
            </motion.span>

            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute font-medium bottom-8 left-0 bg-green-700 text-white border-2 border-black text-md sm:text-sm px-3 py-1 rounded-full shadow z-10"
            >
              HTML Developer
            </motion.span>

            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute font-medium right-0 bottom-20 bg-yellow-500 text-black border-2 border-white text-md sm:text-sm px-3 py-1 rounded-full shadow z-10"
            >
              React Developer
            </motion.span>

            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute font-medium top-29 right-0 bg-green-700 text-white border-2 border-black text-md sm:text-sm px-3 py-1 rounded-full shadow z-10 max-w-28 sm:max-w-none text-center"
            >
              Javascript Programming
            </motion.span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white text-center md:text-left">
          <p className="mb-2 flex gap-2 font-bold justify-center md:justify-start">
            <LineDotRightHorizontal className="text-yellow-100" /> About Me
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Who is <span className="text-yellow-100">Soham Chitrao?</span>
          </h1>

          <p className="text-gray-200 max-w-lg mb-8 mx-auto md:mx-0 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* STATS */}
          <div className="flex gap-6 sm:gap-10 mb-10 justify-center md:justify-start flex-wrap">
            <div>
              <h2 className="text-yellow-400 text-2xl font-bold">600+</h2>
              <p className="text-sm text-gray-200">Project Completed</p>
            </div>
            <div>
              <h2 className="text-yellow-400 text-2xl font-bold">50+</h2>
              <p className="text-sm text-gray-200">Industry Covered</p>
            </div>
            <div>
              <h2 className="text-yellow-400 text-2xl font-bold">18+</h2>
              <p className="text-sm text-gray-200">Years Of Experience</p>
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
            <button className="bg-yellow-500 rounded-full flex items-center gap-4 pr-2 p-1 cursor-pointer">
              <div className="flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-green-900 transition">
                Download CV
              </div>
              <span className="text-black rounded-full p-2 bg-white shrink-0 ml-1.5 hover:bg-black hover:text-white transition-colors duration-100">
                <ArrowRight />
              </span>
            </button>

            <span className="text-yellow-100 shadow-xl text-shadow-black font-script text-3xl cursive-text font-extrabold">
              <Typewriter
                words={["Soham Chitrao"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
