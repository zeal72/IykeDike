import React from 'react';
import { motion } from 'framer-motion';

const CareerJourney = () => {
  return (
    <div className="w-full flex items-center bg-[#111135]">
      {/* Main container */}
      <div
        className="flex flex-col lg:flex-row   w-full text-white overflow-hidden shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Set `once` to false for repeat animations

      >
        {/* Image Section */}
        <div
          className="w-full lg:w-[518px]"
        >
          <img
            src="iyke2.png"
            alt="Career Journey"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          className="CareerJourney flex-1 lg:min-h-fit px-10 sm:py-5 sm:min-h-fit md:min-h-fit md:py-5 lg:py-0 lg:px-24 bg-[#111135] flex flex-col justify-center items-center"

        >
          <div
            className="flex justify-center items-center mb-12 w-full sm:mt-10 lg:mt-0"
          >
            <img
              className="w-auto max-w-full h-auto"
              src="subhead2.png"
              alt="Biography"
              srcSet=""
            />
          </div>

          <ul
            className="list-disc list-inside space-y-4 font-lato font-medium italic leading-[100%] tracking-[2%]"
            style={{
              fontSize: 'clamp(16px, 4vw, 19px)',
              fontWeight: '500px', // Responsive font size
            }}

          >
            <li >
              Iyke Dike’s journey began with a calling to raise children and teenagers, guiding them to discover their true purpose. Over the years, this has expanded into a dynamic career focused on equipping young people with the skills, confidence, and opportunities to be relevant in both their personal and professional lives.
            </li>
            <li >
              Through Edubase, a system of schools from primary to university level, Iyke is continually building a platform for thousands of young individuals to gain a holistic education that emphasizes both academic excellence and life purpose. His long-term vision on this, includes setting up 20 schools across South-East and South-South Nigeria by 2030 and launching Edubase University by 2036.
            </li>
            <li >
              Beyond education, Iyke is passionate about real estate as a tool for wealth creation and sustainability, leveraging it to fund life-impacting initiatives. He also aspires to take his leadership skills into the political sector, with a goal to become a chief administrator by 2031.
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default CareerJourney;
