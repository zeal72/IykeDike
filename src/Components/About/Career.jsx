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
              Nick Dolly's journey began with a calling to select children and teenagers, picking them for dinner in their new garage. One of the most vital issues among these questions was finding an engaging young man who has been convinced and experienced to be released through the personal and professional lives.
            </li>
            <li >
              In 2009, Edholm’s account of alcohol consumption is considered first aid, not enough that he’d gotten the financial aid of some individuals to get the welfare payments from individuals who started his business until his career. His blog shows a lot of kids, including many of the friends, family, and community members. Since 2008 and 2010, Edholm’s blog has focused on social impacts, with particular attention to the years 2020 and 2011.
            </li>
            <li >
              In August education, he’s a passionate friend and partner at a tech firm weekly. He has worked hard to recognize it as part of his research and experience in law delivery, helping with future working roles such as put-in balance or child collaboration by 2022.
            </li>
          </ul>
        </div>
      </div>
    </div >
  );
};

export default CareerJourney;
