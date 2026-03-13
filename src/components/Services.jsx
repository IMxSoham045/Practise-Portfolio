import {
  ArrowRight,
  CodeXml,
  Flower,
  LineDotRightHorizontal,
  SquareCode,
} from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <section id="#services">
      <main className="flex gap-4 items-center mb-4">
        <LineDotRightHorizontal className="text-yellow-400" />
        <h1 className="font-bold text-xl">Services</h1>
      </main>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold">
          <span className="text-yellow-400">Services</span> I Provide
        </h1>
        <div>
          {/* Button */}
          <div className="flex gap-4">
            <button className="bg-yellow-500 rounded-full flex items-center gap-4 pr-2 cursor-pointer">
              <div className="flex items-center gap-2 bg-green-800 text-white px-6 py-3 rounded-full font-medium hover:bg-green-900 transition">
                View All Services
              </div>
              <span className=" text-black rounded-full p-2 bg-white">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-8">
        <div className="bg-gray-200 px-4 py-8 rounded-lg flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <CodeXml size={20} className="text-yellow-400" />
          </div>
          <h1 className="font-semibold text-green-900">HTML Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            facere aliquid doloremque. Unde ipsam odio nihil voluptatibus
            distinctio sunt! Earum!
          </p>
          <div className="flex gap-1">
            <a href="#">Learn More</a>
            <ArrowRight className="w-10 text-yellow-400" />
          </div>
        </div>
        <div className="bg-gray-200 px-4 py-8 rounded-lg flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Flower size={20} className="text-yellow-400" />
          </div>
          <h1 className="font-semibold text-green-900">React Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            facere aliquid doloremque. Unde ipsam odio nihil voluptatibus
            distinctio sunt! Earum!
          </p>
          <div className="flex gap-1">
            <a href="#">Learn More</a>
            <ArrowRight className="w-10 text-yellow-400" />
          </div>
        </div>
        <div className="bg-gray-200 px-4 py-8 rounded-lg flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <SquareCode size={20} className="text-yellow-400" />
          </div>
          <h1 className="font-semibold text-green-900">
            Javascript Programming
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            facere aliquid doloremque. Unde ipsam odio nihil voluptatibus
            distinctio sunt! Earum!
          </p>
          <div className="flex gap-1">
            <a href="#">Learn More</a>
            <ArrowRight className="w-10 text-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
