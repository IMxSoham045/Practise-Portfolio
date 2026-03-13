import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/services";
import About from "../components/About";
import Favorites from "../components/Favorites";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div>
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Favorites />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
