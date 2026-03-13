import { LineDotRightHorizontal } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Favorites = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.7 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };
  return (
    <div
      className="bg-gray-200 flex justify-center items-center px-6 py-12"
      id="#favorites"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full max-w-4xl flex flex-col gap-6 items-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-lg sm:text-xl font-extrabold flex gap-2 items-center justify-center text-center"
        >
          <LineDotRightHorizontal className="text-yellow-400" size={35} /> My
          Favorite Tools
        </motion.h1>
        <h1 className="text-3xl sm:text-4xl text-yellow-400 font-semibold text-center">
          Exploring The Tools
        </h1>
        <h1 className="text-3xl sm:text-4xl text-gray-600 font-medium">
          Behind My Designs
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-2">
          {[
            { src: "./src/assets/html.png", alt: "HTML" },
            {
              src: "./src/assets/js.png",
              alt: "JavaScript",
              extraClass: "rounded-full object-bottom",
            },
            { src: "./src/assets/react.png", alt: "React" },
            { src: "./src/assets/vsCode.png", alt: "VsCode" },
            { src: "./src/assets/chatgpt.png", alt: "ChatGPT" },
            { src: "./src/assets/claude.png", alt: "Claude" },
            { src: "./src/assets/figma.png", alt: "Figma" },
          ].map((tool, i) => (
            <div key={i} className="relative group">
              {/* Tooltip */}
              <span
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 
                             bg-black text-white text-xs px-3 py-1 rounded-md 
                                opacity-0 group-hover:opacity-100 
                                    transition duration-300 whitespace-nowrap"
              >
                {tool.alt}
              </span>

              {/* Icon container */}
              <div
                className="bg-gray-400/65 p-4 sm:p-5 rounded-full
    transition duration-300
    group-hover:shadow-[0_0_20px_rgba(250,204,21,0.8)]
    group-hover:scale-110 cursor-pointer"
              >
                <div className="bg-white p-2 rounded-full">
                  <img
                    src={tool.src}
                    alt={tool.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 ${tool.extraClass || ""}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Favorites;
