import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutEstate = () => {
  // Parallax effect for hero image
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, -100]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="mt-40 md:mt-40 lg:mt-40">
      {/* Hero Image Section with Parallax Effect */}
      <motion.div
        className="w-full overflow-hidden"
        initial={{ y: 0 }}
        animate={{ y: imageY }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="estate.png"
          alt="About Hero Image"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* Welcome Section */}
      <motion.div
        className="welcome-section w-full flex justify-center items-center flex-col text-center text-white py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center h-full pt-5">
          {/* Animated Heading */}
          <motion.h1
            variants={scaleUp}
            className="text-3xl md:text-4xl font-bold leading-tight"
          >
            Welcome to the Official Site of <br className="hidden sm:block" />
            AMB Iyke Dike
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            variants={fadeInUp}
            className="sm:text-lg md:text-xl mt-4 sm:mt-6 text-lg font-bold leading-tight"
          >
            Learn more about the life, exploits and ventures of AMB Iyke Dike in Real Estate.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutEstate;
