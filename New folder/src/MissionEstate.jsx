import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const RealEstateBanner = () => {
  // Parallax effect for the hero image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]); // Adjust for desired parallax effect

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
    <section className="">
      {/* Hero Image Section with Parallax Effect */}
      <div
        className="w-full overflow-hidden"
        style={{ y }} // Apply parallax effect
      >
        <img
          src="estate flyer.png"
          alt="About Hero Image"
          className="w-full h-auto object-cover sm:h-[300px] lg:h-[500px]" // Adjust height for different screens
        />
      </div>
    </section>
  );
};

export default RealEstateBanner;