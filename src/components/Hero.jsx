import { ArrowRight } from "lucide-react";
import React from "react";
import profile from "../assets/profile.webp";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageZoom = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className="  flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-1 flex items-center w-full">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — stacks below image on mobile */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1"
          >
            <motion.span
              variants={fadeUp}
              className="zoom-text border border-yellow-400 px-4 py-1.5 text-sm rounded-md font-medium mb-5 w-fit"
            >
              Hello There!
            </motion.span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-5">
              I'm{" "}
              <span className="text-yellow-500 underline cursor-pointer">
                Soham Chitrao
              </span>
              , <br className="hidden sm:block" />
              <motion.span variants={fadeUp} className="text-orange-500">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "React Developer",
                    "MERN Stack Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </motion.span>
              <br className="hidden sm:block" />
              From Maharashtra, India.
            </h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-sm sm:text-base max-w-sm mb-8 leading-relaxed"
            >
              I'm a beginner{" "}
              <span className="text-amber-900 font-medium">
                Frontend Developer
              </span>{" "}
              looking for a job opportunity to grow and contribute.
            </motion.p>

            {/* Buttons — stack on very small, row from sm up */}
            <motion.div
              variants={imageZoom}
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
            >
              <button className="hover:border-white hover:scale-110 transition bg-yellow-500 rounded-full flex items-center justify-center pr-1.5 pl-1.5 py-1.5 cursor-pointer w-full sm:w-auto">
                <div className="flex items-center gap-2 bg-green-800 text-white px-5 py-2.5 rounded-full font-medium hover:bg-green-900 transition text-sm sm:text-base whitespace-nowrap ">
                  View My Portfolio
                </div>
                <span className="text-black rounded-full p-2 bg-white shrink-0 ml-1.5 hover:bg-black hover:text-white transition-colors duration-100">
                  <ArrowRight size={18} />
                </span>
              </button>

              <button className="border border-gray-800 cursor-pointer px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition text-sm sm:text-base w-full sm:w-auto">
                Hire Me
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT — image shown first on mobile */}
          <div className="flex justify-center items-center order-1 md:order-2">
            <div className="relative">
              {/* Yellow circle background */}
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-105 lg:h-105 bg-yellow-400 rounded-full flex items-center justify-center">
                <img
                  src={profile}
                  alt="Soham Chitrao"
                  className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-95 lg:h-95 object-cover object-top rounded-full relative z-10"
                />
              </div>

              {/* Badge — bottom left, anchored to the circle */}
              <motion.span
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-2 left-0 sm:bottom-4 sm:-left-4 bg-green-900 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium z-20 whitespace-nowrap"
              >
                MERN Learner
              </motion.span>

              {/* Badge — top right */}
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 right-0 sm:top-4 sm:-right-4 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium z-20 whitespace-nowrap"
              >
                Frontend Developer
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-yellow-400 py-3.5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-2 text-sm sm:text-base lg:text-lg font-semibold">
          <span>App Design ✱</span>
          <span>Website Design ✱</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
