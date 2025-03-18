import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutHero = () => {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

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
			transition: { staggerChildren: 0.3 },
		},
	};

	return (
		<section className="mt-20 md:mt-24 lg:mt-28">
			{/* Hero Image Section */}
			<motion.div
				className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden"
				style={{ y }}
			>
				<img
					src="./AboutHero.png"
					alt="About Hero Image"
					className="w-full h-full object-cover object-center"
					loading="eager"
				/>
			</motion.div>

			{/* Welcome Section */}
			<motion.div
				className="w-full flex justify-center items-center flex-col text-center bg-gray-50 py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: false, amount: 0.3 }}
				variants={staggerContainer}
			>
				<div className="w-full max-w-6xl mx-auto">
					<motion.h1
						className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight md:leading-normal"
						variants={scaleUp}
					>
						Welcome to the Official Site of <br className="hidden sm:block" />
						<span className="whitespace-nowrap">AMB Iyke Dike</span>
					</motion.h1>

					<motion.p
						className="text-lg sm:text-xl md:text-2xl mt-4 md:mt-6 text-gray-600"
						variants={fadeInUp}
					>
						Step into the world of AMB Iyke Dike
					</motion.p>

					<motion.p
						className="text-base sm:text-lg md:text-xl mt-4 md:mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed"
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
