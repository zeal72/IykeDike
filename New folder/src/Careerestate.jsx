import React from 'react';
// import { motion } from 'framer-motion';

const Realestate = () => {
  // Animation variants


  return (
    <div className="w-full bg-gray-100 ">
      {/* Main container */}
      <div
        className="flex flex-col lg:flex-row w-full text-white overflow-hidden shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Set `once` to true for single animation

      >
        {/* Image Section */}
        <div
          className="w-full lg:w-[518px] h-[598px]"

        >
          <img
            src="estate2.png"
            alt="Career Journey"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div
          className="flex-1 lg:h-[598px] px-6 lg:px-24 bg-[#880001] flex flex-col justify-center"

        >
          <div
            className="mb-12 w-full"

          >
            <img
              src="estateicon.png"
              alt="Real Estate Section"
              className="w-auto max-w-full h-auto"
            />
          </div>

          <ul
            className="list-disc list-inside space-y-4 font-lato italic leading-[100%] tracking-[2%]"
            style={{
              fontSize: 'clamp(16px, 4vw, 19px)',
              fontWeight: 500,
            }}

          >
            <li>
              Building Wealth, Sustaining Purpose: In addition to his work in education, Iyke Dike is also a seasoned real estate entrepreneur, leveraging properties and assets to drive sustainability for his educational projects. Through his real estate ventures, he aims to create opportunities for wealth creation and development in the communities he serves.
            </li>
            <li className="text-xl pt-5">
              Our Properties:
            </li>
            <li>
              Residential and commercial properties developed to promote both urban development and sustainability.
            </li>
            <li>
              Profits from real estate investments fund the expansion of Edubase schools.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Realestate;