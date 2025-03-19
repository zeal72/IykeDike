import React from 'react';
import { motion } from 'framer-motion';

const CoreBeliefs = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="CoreBeliefs w-full flex justify-center items-center bg-[#040318] px-4 sm:px-6 py-2.5 md:py-2.5 lg:py-0">
      <motion.div
        className="flex flex-col justify-center items-center text-white lg:h-[450px] sm:min-h-fit md:min-h-fit"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Set `once` to false for repeat animations
      >
        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center mb-6 w-full sm:mt-6 lg:mt-0"
          variants={scaleIn}
        >
          <img
            className="w-auto max-w-full h-auto"
            src="corebeliefs.png"
            alt="Subheading"
          />
        </motion.div>

        {/* Text Section */}
        <motion.p
          className="text-[19px] font-lato font-medium italic leading-[1.5] tracking-wide max-w-[90%] md:max-w-[637px] text-center"
          variants={fadeInUp}
        >
          I believe that every individual, no matter where they start from, has the potential to rise, learn, and grow into something great.
          All it takes is the courage to try, the willingness to persist, and the drive to make an impact.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CoreBeliefs;