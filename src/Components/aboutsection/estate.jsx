import React from 'react';
import { motion } from 'framer-motion';

const Realestatesection = () => {
	// Animation variants
	const fadeInLeft = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
	};

	const fadeInRight = {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2 // Added stagger delay
			},
		},
	};

	const listItemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	};

	return (
		<div className="w-full bg-gray-100">
			{/* Main container */}
			<motion.div
				className="flex flex-col lg:flex-row w-full text-white overflow-hidden shadow-lg"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }} // Reduced trigger amount
				variants={staggerContainer}
			>
				{/* Image Section */}
				<motion.div
					className="w-full lg:w-[518px] h-[598px] lg:h-auto"
					variants={fadeInLeft}
				>
					<img
						src="estate2.png"
						alt="Career Journey"
						className="w-full h-full object-cover object-center"
						loading="lazy"
					/>
				</motion.div>

				{/* Text Section */}
				<motion.div
					className="flex-1 lg:h-[598px] px-6 sm:px-8 md:px-10 lg:px-12 bg-[#880001] flex flex-col justify-center"
					variants={fadeInRight}
				>
					<motion.div
						className="mb-8 w-full"
						variants={listItemVariants}
					>
						<img
							className="w-auto max-w-fullmt-5  h-auto"
							src="estateicon.png"
							alt="Real Estate Section"
							style={{ maxWidth: '80%' }}
						/>
					</motion.div>

					<motion.ul
						className="list-inside space-y-4 py-8 text-start font-lato leading-[1.4] tracking-normal"
						style={{
							fontSize: 'clamp(0.9rem, 1.5vw + 0.5rem, 1.1rem)',
							fontWeight: 400,
							maxWidth: '52ch'
						}}
						variants={staggerContainer}
					>
						<motion.li variants={listItemVariants}>
							Building Wealth, Sustaining Purpose: In addition to his work in education, Iyke Dike is also a seasoned real estate entrepreneur, leveraging properties and assets to drive sustainability for his educational projects. Through his real estate ventures, he aims to create opportunities for wealth creation and development in the communities he serves.
						</motion.li>
						<motion.li variants={listItemVariants} className="text-lg sm:text-xl md:text-2xl mt-4">
							Our Properties:
						</motion.li>
						<motion.li className="list-disc list-inside" variants={listItemVariants}>
							Residential and commercial properties developed to promote both urban development and sustainability.
						</motion.li>
						<motion.li className="list-disc list-inside" variants={listItemVariants}>
							Profits from real estate investments fund the expansion of Edubase schools.
						</motion.li>
					</motion.ul>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Realestatesection;
