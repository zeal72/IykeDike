import React from 'react';
import { motion } from 'framer-motion';

const Explore_RealEstate = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
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

  return (
    <div className="CoreBeliefs w-full flex justify-center items-center bg-[#040318]">
      <motion.div
        className="w-full flex justify-center items-center flex-col text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Set `once` to false for repeat animations
        variants={staggerContainer} // Apply staggerContainer animation
      >
        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center w-full"
          variants={scaleIn} // Apply scaleIn animation
        >
          <img
            className="w-auto max-w-full h-auto pt-5 sm:pt-10"
            src="/_ControlButton.png"
            alt="Subheading"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Explore_RealEstate;