import React from 'react';
import { motion } from 'framer-motion';

const Explore_RealEastate = () => {
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
		<div className="CoreBeliefs w-full flex flex-col items-center bg-[#040318] px-4 sm:px-6 py-8 md:py-12">
			<motion.div
				className="container mx-auto max-w-6xl flex flex-col items-center text-center text-white"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
			>
				{/* Image Section */}
				<motion.div
					className="flex justify-center items-center w-full mb-8 sm:mb-10 md:mb-12"
					variants={scaleIn}
				>
					<img
						className="w-auto max-w-full h-auto"
						src="_ControlButton.png"
						alt="Explore Real Estate"
						style={{ maxWidth: '80%' }}
					/>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Explore_RealEastate;
