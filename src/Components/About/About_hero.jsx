import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const scaleUp = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
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
    <section className="mt-30 md:mt-30 lg:mt-30">
      {/* Hero Image Section */}
      <div className="w-full overflow-hidden">
        <img
          src="AboutHero.png"
          alt="About Hero Image"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Welcome Section */}
      <motion.div
        className="welcome-section w-full flex justify-center items-center flex-col text-center bg-gray-50 py-12 md:py-20 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Set `once` to false for repeat animations
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-work-sans">
          {/* Heading with Scale-Up Animation */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight"
            variants={scaleUp}
          >
            Welcome to the Official Site of <br className="hidden sm:block" />
            AMB Iyke Dike
          </motion.h1>

          {/* First Paragraph with Fade-In Animation */}
          <motion.p
            className="sm:text-lg md:text-xl mt-4 sm:mt-6"
            variants={fadeInUp}
          >
            Step into the world of AMB Iyke Dike
          </motion.p>

          {/* Second Paragraph with Fade-In Animation */}
          <motion.p
            className="text-base sm:text-lg md:text-xl mt-2 sm:mt-1 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Explore the fascinating journeys, groundbreaking achievements, and visionary ventures of the world's most influential business leaders who shaped industries and transformed the global economy.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
