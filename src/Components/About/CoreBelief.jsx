import React from 'react';
import { motion } from 'framer-motion';

const CoreBeliefs = () => {
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
	};

	const scaleIn = {
		hidden: { scale: 0.9, opacity: 0 },
		visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<div className="CoreBeliefs w-full flex flex-col items-center bg-[#040318] px-4 sm:px-6 py-8 md:py-12 lg:py-16">
			<motion.div
				className="container mx-auto max-w-6xl flex flex-col items-center text-white"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
			>
				{/* Image Section */}
				<motion.div
					className="flex justify-center items-center mb-8 w-full sm:mt-6 lg:mt-0"
					variants={scaleIn}
				>
					<img
						className="w-auto max-w-full h-auto"
						src="corebeliefs.png"
						alt="Core Beliefs Subheading"
						style={{ maxWidth: '80%' }}
					/>
				</motion.div>

				{/* Text Section */}
				<motion.p
					className="text-center text-gray-300 text-balance"
					style={{
						fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.2rem)',
						fontWeight: 400,
						lineHeight: 1.6,
						maxWidth: '52ch'
					}}
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
