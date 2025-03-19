import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutEstate = () => {



  return (
    <section className="mt-40 md:mt-40 lg:mt-40">
      {/* Hero Image Section with Parallax Effect */}
      <div
        className="w-full overflow-hidden"
      >
        <img
          src="estate.png"
          alt="About Hero Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Welcome Section */}
      <div
        className="welcome-section w-full flex justify-center items-center flex-col text-center text-white py-24"
        initial="hidden"
        whileInView="visible"

      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full pt-5">
          {/* Heading with Scale-Up Animation */}
          <h1
            className="text-3xl md:text-4xl font-bold leading-tight"

          >
            Welcome to the Official Site of <br className="hidden sm:block" />
            AMB Iyke Dike
          </h1>

          {/* First Paragraph with Fade-In Animation */}
          <p
            className="sm:text-lg md:text-xl mt-4 sm:mt-6 text-lg font-bold leading-tight"

          >
            Learn more about the life, exploits and ventures of AMB Iyke Dike in Real Estate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutEstate;