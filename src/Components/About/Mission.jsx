import React from 'react';
import { motion } from 'framer-motion';

const Mission = () => {
  // Animation variants
  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation for children
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full flex items-center bg-[#111135] ">
      {/* Main container */}
      <div
        className="flex flex-col-reverse lg:flex-row w-full text-white overflow-hidden shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Set `once` to false for repeat animations

      >
        {/* Text Section */}
        <motion.div
          className="CareerJourney flex-1 lg:min-h-fit px-10 sm:py-5 sm:min-h-fit md:min-h-fit md:py-5 lg:py-0 lg:px-24 bg-[#111135] flex flex-col justify-center items-center"
          variants={fadeInLeft}

        >
          <div
            className="flex justify-center items-center mb-12 w-full sm:mt-10 lg:mt-0"

          >
            <img
              className="w-auto max-w-full h-auto"
              src="mission.png"
              alt=""
              srcSet=""
            />
          </div>

          <ul
            className="list-disc list-inside space-y-4 font-lato font-medium italic"
            style={{
              fontSize: 'clamp(16px, 4vw, 19px)',
              fontWeight: '500px', // Responsive font size
            }}
          >
            <li >
              Iyke Dike is on a mission to empower and equip young people through purpose-driven education, leveraging innovative real estate development and the Edubase school system to provide accessible, high-quality learning environments. Through these platforms, we aim to bridge the knowledge gap, nurture leadership, and prepare the next generation for impact in both the marketplace and society.
            </li>
            <li >
              This mission is powered by the vision of building a transformative educational system that empowers young people to discover and fulfill their purpose, equipping them with knowledge and skills for marketplace relevance, while influencing policy and governance to create opportunities for youth development and societal progress.

            </li>
            <li >
              They rest on a set of values termed PRICOC - Persistence - Resilience - Innovation - Curiosity - Optimism - Courage
            </li>
          </ul>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full lg:w-[518px]"
          variants={fadeInRight}

        >
          <img
            src="iyke2.png"
            alt="Career Journey"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
