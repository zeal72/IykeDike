import React from 'react';
import { motion } from 'framer-motion';

const Biography = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className='container mx-auto px-4'>
      <motion.div
        className='Biography_section bg-[#040318] w-full flex justify-center items-center flex-col text-center py-12 md:py-20 lg:py-24'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }} // Set `once` to false for repeat animations
        variants={staggerChildren}
      >
        <div className='w-full max-w-[800px] flex flex-col items-center'>
          {/* Image with animation */}
          <motion.img
            src="iyke_img.png"
            alt="Biography Image"
            className='w-full h-auto ike'
            variants={fadeInUp}
          />

          {/* Biography Button with animation */}
          <div>
            <img
              className='w-full h-auto mt-4'
              src="subhead.png"
              alt="Biography Button"
            />
          </div>

          {/* Paragraph with animation */}
          <p
            className="text-white mt-6 md:mt-8"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: 'clamp(16px, 4vw, 27px)', // Responsive font size
              lineHeight: '1.2',
              letterSpacing: '0%',
              textAlign: 'center',
              color: 'white',
            }}

          >
            Iyke Dike is a visionary leader, educator, and entrepreneur dedicated to nurturing purpose and fostering innovation in the lives of young people. With a mission deeply rooted in closing the knowledge gap and empowering the next generation of leaders, Iyke leverages his diverse experiences in education, real estate, and mentorship to inspire sustainable growth in the marketplace and beyond.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Biography;